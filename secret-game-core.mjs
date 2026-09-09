
export const level = {
 width: 2880,
 platforms: [
 {x:0,y:232,w:420,h:38},{x:480,y:232,w:360,h:38},{x:900,y:232,w:340,h:38},
 {x:1300,y:232,w:320,h:38},{x:1680,y:232,w:400,h:38},{x:2140,y:232,w:740,h:38},
 {x:190,y:183,w:76,h:12},{x:330,y:148,w:70,h:12},{x:580,y:174,w:90,h:12},
 {x:760,y:143,w:70,h:12},{x:1010,y:177,w:100,h:12},{x:1190,y:145,w:80,h:12},
 {x:1440,y:177,w:90,h:12},{x:1770,y:179,w:70,h:12},{x:1930,y:145,w:110,h:12},
 {x:2260,y:180,w:100,h:12},{x:2440,y:148,w:100,h:12}
 ],
 coins:[{x:222,y:161},{x:355,y:126},{x:620,y:152},{x:785,y:121},{x:1050,y:155},{x:1220,y:123},{x:1475,y:155},{x:1800,y:157},{x:1970,y:123},{x:2300,y:158},{x:2480,y:126},{x:2660,y:209}]
};
export function fresh(){return {x:40,y:200,vx:0,vy:0,w:12,h:18,grounded:false,coyote:0,buffer:0,coins:new Set(),won:false,deaths:0,facing:1}}
export function tick(p,input,dt){
 if(p.won)return;
 p.buffer=input.jump?0.13:Math.max(0,p.buffer-dt);
 p.coyote=p.grounded?0.10:Math.max(0,p.coyote-dt);
 const direction=(input.right?1:0)-(input.left?1:0);
 const target=direction*145,accel=direction?1050:1400;
 p.vx+=Math.max(-accel*dt,Math.min(accel*dt,target-p.vx));
 if(direction)p.facing=direction;
 if(p.buffer>0&&p.coyote>0){p.vy=-345;p.buffer=0;p.coyote=0;p.grounded=false}
 p.vy=Math.min(570,p.vy+960*dt);
 if(!input.hold&&p.vy < -155)p.vy=-155;
 const overlap=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
 p.x+=p.vx*dt;
 for(const b of level.platforms)if(overlap(p,b)){p.x=p.vx>0?b.x-p.w:b.x+b.w;p.vx=0}
 p.x=Math.max(0,Math.min(level.width-p.w,p.x));
 p.y+=p.vy*dt;p.grounded=false;
 for(const b of level.platforms)if(overlap(p,b)){if(p.vy>=0){p.y=b.y-p.h;p.grounded=true}else p.y=b.y+b.h;p.vy=0}
 level.coins.forEach((c,i)=>{if(Math.abs(p.x+6-c.x)<15&&Math.abs(p.y+9-c.y)<19)p.coins.add(i)});
 if(p.y>340){p.x=40;p.y=200;p.vx=p.vy=0;p.deaths++;p.coyote=p.buffer=0}
 if(p.x>2770)p.won=true;
}
