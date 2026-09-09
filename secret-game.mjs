
import {level,fresh,tick} from './secret-game-core.mjs';
const trigger=document.querySelector('.secret-star'),dialog=document.querySelector('#secret-game'),canvas=dialog.querySelector('canvas'),g=canvas.getContext('2d');
const status=dialog.querySelector('.game-status'),pauseButton=dialog.querySelector('[data-pause]');
let p=fresh(),active=false,paused=false,frame=0,last=0,acc=0,camera=0,time=0,jump=false;
const keys=new Set(),touch=new Set();
const pressed=k=>keys.has(k)||touch.has(k);
function clear(){keys.clear();touch.clear();jump=false}
function pause(value){paused=value;clear();pauseButton.textContent=paused?'Resume':'Pause';pauseButton.setAttribute('aria-pressed',String(paused))}
function reset(){p=fresh();camera=0;pause(false);canvas.focus()}
function close(){active=false;cancelAnimationFrame(frame);clear();dialog.close();trigger.focus()}
trigger.addEventListener('click',()=>{dialog.showModal();active=true;reset();last=performance.now();acc=0;frame=requestAnimationFrame(loop)});
dialog.querySelector('[data-close]').addEventListener('click',close);
dialog.addEventListener('cancel',e=>{e.preventDefault();close()});
dialog.querySelector('[data-restart]').addEventListener('click',reset);
pauseButton.addEventListener('click',()=>{pause(!paused);canvas.focus()});
canvas.addEventListener('keydown',e=>{
 const k=e.key.toLowerCase();if(['arrowleft','arrowright','arrowup',' ','a','d','w'].includes(k)){e.preventDefault();if(!keys.has(k)&&['arrowup',' ','w'].includes(k))jump=true;keys.add(k)}
 if(k==='p')pause(!paused);if(k==='r')reset();
});
window.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));
window.addEventListener('blur',()=>{if(active)pause(true)});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&active)pause(true)});
dialog.querySelectorAll('[data-control]').forEach(b=>{
const k=b.dataset.control;
b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);touch.add(k);if(k===' ')jump=true;canvas.focus()});
for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>touch.delete(k));
});
function rect(x,y,w,h,c){g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),w,h)}
function text(s,x,y,size=10,c='#fff9d7'){g.fillStyle=c;g.font='bold '+size+'px monospace';g.fillText(s,x,y)}
function draw(){
 g.imageSmoothingEnabled=false;
 rect(0,0,480,270,'#90d7ed');
 // Layered scenery scrolls at different rates.
 for(let i=0;i<14;i++){
 const x=i*110-camera*.2;
 rect(x,53+(i%3)*13,36,7,'#f4fbde');rect(x+8,47+(i%3)*13,20,8,'#f4fbde');
 }
 for(let i=0;i<18;i++){
 const x=i*90-camera*.4;
 rect(x,166,66,68,'#78baa0');rect(x+9,146,48,28,'#78baa0');rect(x+20,132,25,20,'#78baa0');
 }
 g.save();g.translate(-Math.round(camera),0);
 for(let i=0;i<12;i++){
 const x=i*250+100;rect(x,192,9,40,'#7b6752');rect(x-12,173,34,23,'#337568');rect(x-7,163,25,12,'#4e9980');rect(x-3,166,9,4,'#a7cf7b');
 }
 for(const b of level.platforms){
 rect(b.x,b.y,b.w,b.h,'#344955');rect(b.x,b.y,b.w,5,'#a8d46b');rect(b.x+2,b.y+5,b.w-4,b.h-5,'#b57c56');
 for(let x=b.x+4;x<b.x+b.w-5;x+=16){rect(x,b.y+12,9,2,'#dca675');if(b.h>20)rect(x+5,b.y+24,6,2,'#8d5e4d')}
 }
 level.coins.forEach((c,i)=>{if(p.coins.has(i))return;const w=3+Math.round(Math.abs(Math.sin(time*3+i))*2);rect(c.x-w,c.y-6,w*2,12,'#aa702d');rect(c.x-w+1,c.y-5,w*2-2,10,'#ffd45b');rect(c.x-1,c.y-4,1,7,'#fff2ac')});
 // Finish workshop and flag.
 rect(2710,151,100,81,'#324e5a');rect(2714,157,92,70,'#e9e3bf');rect(2730,180,30,52,'#487783');rect(2771,168,22,19,'#83c8d4');
 rect(2800,122,3,110,'#344955');rect(2803,123,27,16,'#e78964');
 text('ROBOT LAB',2718,164,9,'#344955');
 // Original tiny robot character, with a two-frame walk cycle.
 const x=Math.round(p.x),y=Math.round(p.y),step=p.grounded&&Math.abs(p.vx)>10?Math.floor(time*12)%2:0;
 rect(x+2,y,8,2,'#344955');rect(x,y+2,12,9,'#344955');rect(x+1,y+3,10,6,'#f7f0cd');
 rect(x+(p.facing>0?6:2),y+5,2,2,'#376777');rect(x+9,y+5,1,2,'#376777');
 rect(x+2,y+11,8,5,'#477b85');rect(x+4,y+12,3,2,'#e7b75f');
 rect(x+1,y+16-step,4,2+step,'#344955');rect(x+8,y+16-(1-step),3,3-step,'#344955');
 g.restore();
 if(paused||p.won){rect(80,78,320,105,'#263b4cee');text(p.won?'LAB REACHED!':'PAUSED',143,110,20);text(p.won?p.coins.size+' / '+level.coins.length+' energy cells collected':'Press Resume to continue',115,140,12);text('R: restart    Esc: return to portfolio',105,166,10)}
 status.textContent=p.won?'Lab reached. '+p.coins.size+' of '+level.coins.length+' cells collected.':p.coins.size+' / '+level.coins.length+' cells · '+(paused?'Paused':'Reach the robot lab →');
}
function loop(now){
 if(!active)return;
 const elapsed=Math.min((now-last)/1000,.05);last=now;
 if(!paused&&!p.won){
 acc+=elapsed;time+=elapsed;
 while(acc>=1/120){
 const hold=pressed(' ')||pressed('w')||pressed('arrowup');
 tick(p,{left:pressed('a')||pressed('arrowleft'),right:pressed('d')||pressed('arrowright'),jump,hold},1/120);jump=false;acc-=1/120;
 }
 const target=Math.max(0,Math.min(level.width-480,p.x-155));camera+=(target-camera)*Math.min(1,elapsed*8);
 }else acc=0;
 draw();frame=requestAnimationFrame(loop);
}
