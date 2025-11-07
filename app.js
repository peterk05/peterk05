// Project Data
const projectsData = [
    {
        id: 'roborio-combat',
        title: 'RoboRiotz Featherweight Combat Robot',
        category: 'Robotics Competition',
        role: 'Team Lead & Technical Architect',
        duration: 'May 2025 - August 2025',
        teamSize: 5,
        funding: '€2000 sourced from sponsors',
        shortDescription: 'Led a 5-person team to design and build a 12 kg featherweight combat robot for RoboRiotz 2025 competition with advanced weapon dynamics and control systems.',
        fullDescription: 'Directed the design, fabrication, and validation of a competitive featherweight combat robot. Managed project timeline, technical specifications, and cross-functional team coordination. This project exemplified leadership in high-stakes robotics competition where precision engineering directly translates to competitive advantage.',
        longProcess: 'The RoboRiotz Featherweight Combat Robot project commenced with comprehensive research into existing competitive designs, particularly focusing on torque reaction weapon systems employed by successful competitors. Our team conducted extensive literature review on combat robotics from Robot Wars archives and contemporary BattleBots designs. We selected a torque reaction strategy, where rapid motor reversal causes the entire robot to rotate around fixed wheels, delivering weapon strikes through pure angular momentum.<br><br>Motor selection represented a critical design decision. We evaluated multiple options for drivetrain and weapon motors, ultimately selecting high-torque, high-RPM motors suitable for both rapid acceleration and consistent weapon spin maintenance. Using MATLAB, I developed comprehensive mathematical models to calculate angular momentum transfer, weapon rotational dynamics, and maximum achievable force from the system. These models informed motor specifications and validated our weapon design approach before fabrication.<br><br>Power system integration proved challenging. We sourced a high-capacity LiPo battery (6S configuration) and selected appropriate Electronic Speed Controllers (ESCs) capable of handling rapid directional changes without failure. We implemented anti-spark connectors and battery management systems to ensure reliability during competition. Extensive testing validated that our power delivery system could sustain full weapon spin while maintaining drive motor responsiveness.<br><br>Mechanical design required balancing multiple constraints: structural rigidity for impact absorption, weight distribution for stability during weapon engagement, and wheel configuration for grip and maneuverability. We constructed the frame from steel to withstand combat impacts while maintaining the 12 kg weight limit. Wheel selection focused on arena-appropriate materials that provided grip without excessive friction.<br><br>Throughout the 4-month project, our 5-person team collaborated closely. I coordinated task allocation, ensuring each member\'s contributions aligned with overall specifications. We conducted iterative testing, identifying mechanical stress points and refining designs accordingly. Late-stage testing revealed unexpected motor heating under sustained weapon operation, prompting thermal management modifications including heatsink integration and duty cycle optimization.<br><br>The project culminated in a validated combat platform that performed well in competition, demonstrating the effectiveness of our mathematical modeling and systems integration approach. Competition performance validated our design decisions and provided invaluable feedback for future iterations. Key learnings included the importance of thermal management in high-performance motors and the critical role of rigorous mathematical modeling in predicting real-world performance.',
        technologies: ['MATLAB', 'Motor Control', 'ESC Configuration', 'CAD Design', 'Systems Engineering', 'Project Management'],
        bgColor: 'var(--color-bg-1)',
        icon: '⚔️',
        technicalDetails: [
            'Weight: 12 kg (Featherweight class)',
            'Weapon: Torque reaction rotating system',
            'Motor Configuration: High-torque drivetrain with weapon motor',
            'Power: 6S LiPo battery (22.2V)',
            'Frame Material: Steel construction',
            'ESC: Dual channels for independent motor control',
            'Control: Radio frequency remote control'
        ],
        images: [
            { caption: 'Combat robot CAD design and specifications' },
            { caption: 'Motor and drivetrain component layout' },
            { caption: 'Weapon system assembly and testing' },
            { caption: 'Complete chassis integration' },
            { caption: 'Laboratory testing and validation' },
            { caption: 'Competition arena deployment' }
        ],
        videos: [
            { title: 'Combat Robot Competition Performance', description: 'Full match footage demonstrating weapon effectiveness and autonomous control' },
            { title: 'Weapon Dynamics and MATLAB Modeling', description: 'Mathematical validation of angular momentum calculations and performance predictions' }
        ]
    },
    {
        id: 'pick-place-robot',
        title: 'Autonomous Pick-and-Place Navigation Robot',
        category: 'Autonomous Systems',
        role: 'Developer',
        duration: 'January 2025 - June 2025',
        shortDescription: 'Developed an autonomous robot capable of detecting, retrieving, and returning objects from designated ground locations using integrated motor control and sensor feedback systems.',
        fullDescription: 'Built a sophisticated autonomous robot system that combines computer vision for object detection, mechanical navigation on linear tracks, and precise motor control to autonomously locate, retrieve, and return objects to a designated home base. The project integrated advanced control algorithms with practical hardware implementation.',
        longProcess: 'The Autonomous Pick-and-Place Navigation Robot project addressed the engineering challenge of autonomous material handling in dynamic environments. The system required integration of multiple subsystems: object detection using computer vision, autonomous navigation, localization, motor control with speed regulation, and precise gripper actuation.<br><br>Initial project definition established core objectives: detect designated objects (cans) on ground level, navigate autonomously to their location while avoiding obstacles, retrieve the object safely, and return to a predefined home base. These requirements drove our selection of hardware and algorithmic approaches.<br><br>Hardware architecture consisted of a mobile platform with two independent drive motors mounted on linear X-Y tracks, enabling both planar movement and precise positioning. A 360-degree rotating arm provided out-of-plane manipulation capability. We selected the robot actuators carefully, prioritizing repeatability and speed regulation over absolute speed, as application success depended on controlled motion rather than velocity.<br><br>The motor control system represented a critical design element. I developed MATLAB mathematical models describing the complete device physics, incorporating motor dynamics, gear reduction ratios, friction models, and load variations. These physics-based models enabled prediction of system behavior across the operational envelope and validated our control law design before hardware implementation.<br><br>Control algorithm development focused on speed regulation. We implemented a closed-loop system comparing desired motor speed to actual speed (measured via encoder feedback), calculating error, and applying corrective control signals. The control law incorporated acceleration profiling to ensure smooth motion and prevent mechanical shock loads. Multiple iterations refined the control parameters based on real hardware testing.<br><br>Sensor integration proved complex. Position feedback from linear track limit switches provided coarse localization, while motor encoders supplied fine-grained position information. We integrated these disparate sensor types into a unified state estimation system. Sensor fusion algorithms combined encoder data with periodic limit switch validation to maintain accurate position estimates despite encoder drift.<br><br>The computer vision subsystem detected target objects using color-based segmentation on RGB camera frames. While simple compared to deep learning approaches, color-based detection proved sufficiently robust for our controlled laboratory environment and maintained the real-time 30 FPS processing requirement on our embedded hardware.<br><br>Real-world testing revealed several challenges not apparent from modeling. Motor friction proved higher than theoretical estimates, requiring control parameter adjustments. The linear track exhibited periodic resistance variations, necessitating adaptive control thresholds. Gripper reliability improved after multiple design iterations addressing mechanical wear points.<br><br>The final system successfully executed autonomous pick-and-place cycles with high reliability. Typical cycle times achieved reliable object retrieval within 45 seconds of task initiation. Position accuracy met specification requirements, maintaining sub-centimeter precision for consistent gripper engagement.<br><br>Beyond technical achievement, this project provided practical experience with the complete robotics development cycle: requirements analysis, mathematical modeling, control design, hardware integration, sensor fusion, and iterative testing. The experience proved invaluable for subsequent more complex robotics projects.',
        technologies: ['MATLAB', 'Motor Control', 'Sensor Integration', 'Computer Vision', 'CAD', 'Embedded Systems', 'Control Systems'],
        bgColor: 'var(--color-bg-6)',
        icon: '🦾',
        technicalDetails: [
            'Platform: Dual motor drive on linear X-Y tracks',
            'End Effector: 360-degree rotating arm with gripper',
            'Control: Closed-loop motor speed regulation',
            'Sensors: Motor encoders, limit switches, RGB camera',
            'Processing: Real-time embedded control at 30 Hz cycle rate',
            'Position Accuracy: Sub-centimeter precision',
            'Cycle Time: ~45 seconds per object retrieval'
        ],
        images: [
            { caption: 'Robot mechanical design and linear track system' },
            { caption: 'Motor control circuit and electrical integration' },
            { caption: 'Gripper mechanism and end-effector design' },
            { caption: 'Complete robot assembly in lab environment' },
            { caption: 'Computer vision target detection setup' },
            { caption: 'Autonomous navigation testing arena' }
        ],
        videos: [
            { title: 'Autonomous Pick and Place Demonstration', description: 'Complete cycle of object detection, navigation, retrieval, and return to home base' },
            { title: 'Control System Performance and Accuracy', description: 'Precision positioning and speed regulation under various load conditions' }
        ]
    },
    {
        id: 'bird-monitoring-cv',
        title: 'Intelligent Pest Recognition System for Bird Population Monitoring',
        category: 'Computer Vision & Conservation',
        role: 'Co-Project Leader',
        duration: 'September 2025 - December 2025',
        teamSize: 3,
        shortDescription: 'Co-leading development of computer vision system using YOLOv8 for real-time bird species identification and tracking for endangered species monitoring and crop protection.',
        fullDescription: 'Developing an intelligent embedded computer vision system for autonomous bird species identification and tracking. The system combines state-of-the-art deep learning models with Raspberry Pi hardware for battery-powered field deployment. Applications include endangered species monitoring, invasive species tracking, and crop damage prevention through farmer alerts.',
        longProcess: 'The Intelligent Pest Recognition System for Bird Population Monitoring project originated from recognizing critical gaps in current wildlife monitoring methodologies. Traditional bird population surveys rely on manual observation, inherently limited by geographic coverage and temporal consistency. Our project aims to deploy autonomous, AI-powered monitoring stations capable of continuous species identification and tracking across distributed field locations.<br><br>Project scope encompasses three interconnected challenges: accurate real-time bird species identification, efficient embedded deployment on battery-powered hardware, and practical field integration for conservation applications.<br><br>Research phase involved comprehensive evaluation of available bird detection models. We surveyed existing approaches including Birds-YOLO (specialized model trained on diverse species across complex ecosystems) and generic YOLOv8 implementations. While Birds-YOLO offered pre-trained accuracy, computational requirements exceeded Raspberry Pi capabilities. We selected YOLOv8 as the foundation, planning custom fine-tuning for local species and our specific deployment context.<br><br>Dataset preparation represented a critical project phase. We collected training images across multiple species relevant to Irish ecosystems, capturing diverse plumage patterns, postures, and environmental conditions. Data augmentation techniques expanded training set diversity, including random rotations, scale variations, brightness adjustments, and horizontal flips. We implemented stratified sampling to ensure balanced representation across species, preventing model bias toward common species and underrepresentation of rare species.<br><br>Custom model training proceeded iteratively. Initial training on our dataset revealed performance gaps for morphologically similar species (e.g., common distinguishing features visible only under specific angles or lighting). We addressed these through targeted additional data collection of challenging species pairs and progressive model refinement. Validation on held-out test sets confirmed progressive accuracy improvements, ultimately achieving >92% accuracy across target species.<br><br>Deployment optimization proved technically challenging. Direct Raspberry Pi inference of full YOLOv8 model consumed excessive computational resources. We employed quantization techniques, converting model weights from 32-bit floating point to 8-bit integers, reducing model size by 75% while maintaining >90% accuracy. Additionally, we implemented dynamic input resolution adjustment, using lower resolution for initial coarse detection and higher resolution for confirmed detections. These optimizations achieved <500ms per-frame latency on Raspberry Pi hardware, enabling real-time processing.<br><br>Hardware integration addressed practical field deployment requirements. We selected Raspberry Pi 5 for its enhanced computational capability (dual-core at 2.4GHz versus earlier generations). Power management proved critical for autonomous operation; we integrated high-capacity battery packs with solar charging capability for extended deployment. Thermal management received attention, implementing passive heatsinks to maintain performance during extended operation in variable field temperatures.<br><br>The system\'s practical output involves species identification with associated confidence scores, frame-by-frame detection allowing population enumeration, and temporal persistence tracking. We developed cloud integration capabilities, enabling remote monitoring stations to upload identification data for centralized analysis. Battery status monitoring and autonomous low-power mode transitions ensure field reliability.<br><br>Ethical considerations permeate this project. We developed protocols ensuring minimal habitat disturbance, employed camouflaged camera housings, and maintained appropriate distances from sensitive breeding areas. Data security protocols protect against potential misuse of species location information (particularly relevant for rare or endangered species vulnerable to poaching). We built in configurable data retention policies, enabling deployment contexts ranging from real-time analysis (no permanent storage) to long-term population studies (encrypted cloud storage).<br><br>Performance validation testing occurred in multiple environments. Laboratory testing established baseline accuracy across diverse species and lighting conditions. Outdoor testing in university grounds validated real-world performance, identifying edge cases such as birds in flight (challenging detection) and camouflaged plumage patterns. We iteratively addressed discovered failure modes through model refinement and hardware adjustments.<br><br>The project contributes directly to UN Sustainable Development Goals SDG 9 (Industry, Innovation, and Infrastructure) through innovative application of deep learning in environmental monitoring, and SDG 15 (Life on Land) by enabling non-invasive population monitoring supporting conservation decision-making.<br><br>Current development emphasizes farmer notification integration—developing alert systems to notify farmers of crop-damaging bird species detection—and expanding species coverage to encompass broader geographic regions and ecosystem types.',
        technologies: ['YOLOv8', 'Deep Learning', 'Raspberry Pi', 'Python', 'Computer Vision', 'TensorFlow', 'Edge Computing', 'IoT'],
        bgColor: 'var(--color-bg-5)',
        icon: '🦅',
        researchQuestions: [
            'How can we track endangered birds and maintain records of population density by location?',
            'Can we identify invasive bird species to enable timely intervention?',
            'Can we alert farmers about crop-damaging birds to prevent resource loss?'
        ],
        technicalDetails: [
            'Model: YOLOv8 fine-tuned on custom dataset',
            'Hardware: Raspberry Pi 5 with enhanced processing',
            'Detection Accuracy: >92% across target species',
            'Inference Latency: <500ms per frame',
            'Power: Battery + solar charging for autonomous operation',
            'Video Formats: 30 FPS real-time processing',
            'Data: Cloud integration with encryption',
            'Deployment: Passive monitoring stations in field environments'
        ],
        sdgs: [
            'SDG 9: Industry, Innovation and Infrastructure',
            'SDG 15: Life on Land - protect biodiversity and halt species loss'
        ],
        images: [
            { caption: 'YOLOv8 model architecture and training pipeline' },
            { caption: 'Dataset preparation and species classification' },
            { caption: 'Raspberry Pi hardware integration and power system' },
            { caption: 'Custom model fine-tuning performance metrics' },
            { caption: 'Field deployment monitoring station setup' },
            { caption: 'Real-time bird species detection visualization' }
        ],
        videos: [
            { title: 'Real-time Bird Species Detection', description: 'Live demonstration of YOLOv8 model identifying and tracking bird species in real-time' },
            { title: 'Field Deployment and Conservation Impact', description: 'System operating in natural environments with applications for endangered species monitoring' }
        ]
    }
];

// Router State
let currentPage = 'home';
let currentProject = null;

// Initialize App
function init() {
    setupNavigation();
    renderPage('home');
    
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinksMenu = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinksMenu.classList.toggle('active');
        mobileMenuBtn.textContent = navLinksMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateTo(page);
            
            // Close mobile menu
            document.getElementById('navLinks').classList.remove('active');
            document.getElementById('mobileMenuBtn').textContent = '☰';
        });
    });
    
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('home');
    });
}

// Navigate to Page
function navigateTo(page, projectId = null) {
    currentPage = page;
    currentProject = projectId;
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Render page
    renderPage(page, projectId);
}

// Render Page
function renderPage(page, projectId = null) {
    const app = document.getElementById('app');
    
    switch(page) {
        case 'home':
            app.innerHTML = renderHomePage();
            break;
        case 'about':
            app.innerHTML = renderAboutPage();
            break;
        case 'projects':
            app.innerHTML = renderProjectsPage();
            break;
        case 'project-detail':
            app.innerHTML = renderProjectDetailPage(projectId);
            break;
        case 'skills':
            app.innerHTML = renderSkillsPage();
            break;
        case 'contact':
            app.innerHTML = renderContactPage();
            break;
        default:
            app.innerHTML = renderHomePage();
    }
    
    // Setup event listeners after rendering
    setupPageEventListeners();
}

// Setup Page Event Listeners
function setupPageEventListeners() {
    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project-id');
            navigateTo('project-detail', projectId);
        });
    });
    
    // View details buttons
    const viewButtons = document.querySelectorAll('.view-details');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = btn.getAttribute('data-project-id');
            navigateTo('project-detail', projectId);
        });
    });
    
    // Back to home/projects
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const page = btn.getAttribute('data-page') || 'home';
            navigateTo(page);
        });
    });
    
    // Project navigation
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project-id');
            navigateTo('project-detail', projectId);
        });
    });
    
    // CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = btn.getAttribute('data-page');
            if (target) {
                navigateTo(target);
            }
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // Breadcrumb links
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateTo(page);
        });
    });
}

// Render Home Page
function renderHomePage() {
    return `
        <div class="page">
            <section class="hero">
                <div class="hero-content">
                    <p class="subtitle">Robotics & Intelligent Devices Engineer</p>
                    <h1>Peter Kernohan</h1>
                    <p class="location">Second-Year Student | Maynooth University | Maynooth, Co. Kildare, Ireland</p>
                    <button class="cta-button" data-page="projects">View Projects</button>
                </div>
            </section>
            
            <section id="about" style="padding: 100px 32px; background: var(--color-background);">
                <h2 class="section-title">About</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <p style="font-size: 1.15rem; line-height: 1.8; color: var(--color-text); margin-bottom: 24px; text-align: center;">
                        Second-year Robotics & Intelligent Devices student with extensive knowledge in embedded systems and autonomous electromechanical system design. Active IEEE Events Organizer, IEEE committee member and student rep of the Robotics course. Passionate about intelligent AI robots and systems that solve real-world problems in environmental monitoring, autonomous navigation, and smart robotics applications.
                    </p>
                    <div style="text-align: center; margin-top: 32px;">
                        <p style="font-size: 1rem; color: var(--color-text-secondary); margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:peterjohnkernohan@gmail.com" style="color: var(--color-primary); text-decoration: none;">peterjohnkernohan@gmail.com</a></p>
                        <p style="font-size: 1rem; color: var(--color-text-secondary); margin-bottom: 8px;"><strong>Phone:</strong> 089 214 7352</p>
                        <p style="font-size: 1rem; color: var(--color-text-secondary); margin-bottom: 8px;"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/peter-kernohan-a4b788356" target="_blank" rel="noopener" style="color: var(--color-primary); text-decoration: none;">linkedin.com/in/peter-kernohan-a4b788356</a></p>
                        <p style="font-size: 1rem; color: var(--color-text-secondary);"><strong>GitHub:</strong> <a href="https://github.com/peterk05" target="_blank" rel="noopener" style="color: var(--color-primary); text-decoration: none;">github.com/peterk05</a></p>
                    </div>
                </div>
            </section>
            
            <section id="projects" style="padding: 100px 32px; background: var(--color-surface);">
                <h2 class="section-title">Featured Projects</h2>
                <p class="section-subtitle">Explore my engineering work across robotics, computer vision, and autonomous systems</p>
                <div class="projects-grid">
                    ${projectsData.map(project => `
                        <div class="project-card" data-project-id="${project.id}">
                            <div class="project-image" style="background: ${project.bgColor};">
                                <span style="font-size: 64px;">${project.icon}</span>
                            </div>
                            <div class="project-content">
                                <span class="project-category">${project.category}</span>
                                <h3 class="project-title">${project.title}</h3>
                                <p class="project-description">${project.shortDescription}</p>
                                <button class="view-details" data-project-id="${project.id}">View Details →</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
            
            <section id="skills" style="padding: 100px 32px; background: var(--color-background);">
                <h2 class="section-title">Skills & Expertise</h2>
                <div style="max-width: 1280px; margin: 0 auto;">
                    <div class="skills-category">
                        <h3>Programming Languages</h3>
                        <div class="skills-grid">
                            <div class="skill-item"><div class="skill-name">C</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">C++</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">Python</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Java</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">Arduino (C++)</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">MATLAB</div><div class="skill-level">Advanced</div></div>
                        </div>
                    </div>
                    <div class="skills-category">
                        <h3>Embedded Systems</h3>
                        <div class="skills-grid">
                            <div class="skill-item"><div class="skill-name">Arduino Development</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">BLDC Motor Control</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">ESC Configuration</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Motor Drivers</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Digital Logic Design</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">Sensor Integration</div><div class="skill-level">Advanced</div></div>
                        </div>
                    </div>
                    <div class="skills-category">
                        <h3>Robotics & Control</h3>
                        <div class="skills-grid">
                            <div class="skill-item"><div class="skill-name">Computer Vision</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Object Detection</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">PID Control Systems</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Deep Learning</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Real-time Sensor Processing</div><div class="skill-level">Advanced</div></div>
                        </div>
                    </div>
                    <div class="skills-category">
                        <h3>Design & Fabrication</h3>
                        <div class="skills-grid">
                            <div class="skill-item"><div class="skill-name">CAD (Fusion 360)</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">CAD (SolidWorks)</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">3D Printing</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">Mechanical Design</div><div class="skill-level">Intermediate</div></div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="experience" style="padding: 100px 32px; background: var(--color-surface);">
                <h2 class="section-title">Experience</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <div style="margin-bottom: 48px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; margin-bottom: 8px;">Events Organizer & Committee Member</h3>
                        <p style="font-size: 1.1rem; color: var(--color-primary); font-weight: 600; margin-bottom: 8px;">IEEE Maynooth Student Branch | Present</p>
                        <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-secondary);">Manage event logistics, budgeting, coordinate teams of student volunteers and ensure timely delivery of event materials and setup. Organizing a local Robotics competition for the first time in Maynooth University.</p>
                    </div>
                    <div style="margin-bottom: 48px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; margin-bottom: 8px;">Head 2nd Year Student Representative</h3>
                        <p style="font-size: 1.1rem; color: var(--color-primary); font-weight: 600; margin-bottom: 8px;">Robotics & Intelligent Devices Programme, Maynooth University | Present</p>
                        <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-secondary);">Represent second-year cohort as primary liaison between students and faculty. Provide feedback via board meetings on all areas of the course to constantly improve the experience for students.</p>
                    </div>
                    <div style="margin-bottom: 48px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; margin-bottom: 8px;">Bachelor of Science in Robotics & Intelligent Devices</h3>
                        <p style="font-size: 1.1rem; color: var(--color-primary); font-weight: 600; margin-bottom: 8px;">Maynooth University | September 2023 - Present</p>
                        <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-secondary);">Strong foundation in embedded systems, autonomous system design, deep learning, control system dynamics, and key programming languages.</p>
                    </div>
                </div>
            </section>
            
            <section id="contact" style="padding: 100px 32px; background: var(--color-background);">
                <h2 class="section-title">Get In Touch</h2>
                <div style="max-width: 600px; margin: 0 auto; text-align: center;">
                    <p style="font-size: 1.15rem; line-height: 1.7; color: var(--color-text-secondary); margin-bottom: 32px;">Interested in collaboration or have questions about my projects? Feel free to reach out.</p>
                    <div style="margin-bottom: 16px;">
                        <p style="font-size: 1.1rem; margin-bottom: 12px;"><strong>Email:</strong> <a href="mailto:peterjohnkernohan@gmail.com" style="color: var(--color-primary); text-decoration: none; font-weight: 600;">peterjohnkernohan@gmail.com</a></p>
                        <p style="font-size: 1.1rem; margin-bottom: 12px;"><strong>Phone:</strong> 089 214 7352</p>
                        <p style="font-size: 1.1rem; margin-bottom: 12px;"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/peter-kernohan-a4b788356" target="_blank" rel="noopener" style="color: var(--color-primary); text-decoration: none; font-weight: 600;">linkedin.com/in/peter-kernohan-a4b788356</a></p>
                        <p style="font-size: 1.1rem;"><strong>GitHub:</strong> <a href="https://github.com/peterk05" target="_blank" rel="noopener" style="color: var(--color-primary); text-decoration: none; font-weight: 600;">github.com/peterk05</a></p>
                    </div>
                </div>
            </section>
            
            ${renderFooter()}
        </div>
    `;
}

// Render About Page - Redirect to home
function renderAboutPage() {
    navigateTo('home');
    setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return '';
}

// Render Projects Page - Redirect to home
function renderProjectsPage() {
    navigateTo('home');
    setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return '';
}

// Render Project Detail Page
function renderProjectDetailPage(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return renderProjectsPage();
    
    const currentIndex = projectsData.findIndex(p => p.id === projectId);
    const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
    const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;
    
    return `
        <div class="page">
            <section class="project-detail">
                <div class="breadcrumb">
                    <a href="#" data-page="home">Home</a> / 
                    <span>${project.title}</span>
                </div>
                
                <div class="project-hero">
                    <span class="category">${project.category}</span>
                    <h1>${project.title}</h1>
                    ${project.role ? `<p style="font-family: var(--font-sans); font-size: 1.2rem; color: var(--color-text-secondary); margin-bottom: 8px;"><strong>Role:</strong> ${project.role}</p>` : ''}
                    ${project.duration ? `<p style="font-family: var(--font-sans); font-size: 1.1rem; color: var(--color-text-secondary); margin-bottom: 8px;"><strong>Duration:</strong> ${project.duration}</p>` : ''}
                    ${project.teamSize ? `<p style="font-family: var(--font-sans); font-size: 1.1rem; color: var(--color-text-secondary); margin-bottom: 8px;"><strong>Team Size:</strong> ${project.teamSize} people</p>` : ''}
                    ${project.funding ? `<p style="font-family: var(--font-sans); font-size: 1.1rem; color: var(--color-text-secondary); margin-bottom: 24px;"><strong>Funding:</strong> ${project.funding}</p>` : ''}
                    <div class="hero-image-placeholder" style="background: ${project.bgColor};">
                        <span>${project.icon}</span>
                    </div>
                </div>
                
                <div class="project-overview">
                    <p>${project.fullDescription}</p>
                </div>
                
                ${project.researchQuestions ? `
                <div style="margin-bottom: 48px;">
                    <h2 style="font-family: var(--font-heading); font-size: 2.5rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 24px; margin-top: 32px;">Research Questions</h2>
                    <ul style="font-family: var(--font-sans); font-size: 1.1rem; line-height: 1.9; color: var(--color-text); letter-spacing: -0.005em; padding-left: 24px;">
                        ${project.researchQuestions.map(q => `<li style="margin-bottom: 12px;">${q}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                <div class="process-section">
                    <h2>Full Development Process</h2>
                    <div class="process-content">
                        ${project.longProcess.split('<br><br>').map(para => `<p>${para}</p>`).join('')}
                    </div>
                </div>
                
                ${project.technicalDetails ? `
                <div class="specs-section">
                    <h2>Technical Specifications</h2>
                    <ul style="font-family: var(--font-sans); font-size: 1.05rem; line-height: 1.9; color: var(--color-text); letter-spacing: -0.005em; padding-left: 24px; margin-top: 16px;">
                        ${project.technicalDetails.map(detail => `<li style="margin-bottom: 8px;">${detail}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                <div class="gallery-section">
                    <h2>Project Gallery</h2>
                    <div class="gallery-grid">
                        ${project.images.map((img, index) => `
                            <div class="gallery-item">
                                <div class="gallery-placeholder" style="background: ${['var(--color-bg-1)', 'var(--color-bg-2)', 'var(--color-bg-3)', 'var(--color-bg-4)', 'var(--color-bg-5)', 'var(--color-bg-6)'][index % 6]};">
                                    <span style="font-size: 48px;">📷</span>
                                </div>
                                <div class="gallery-caption">${img.caption}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="video-section">
                    <h2>Video Demonstrations</h2>
                    ${project.videos.map((video, index) => `
                        <div class="video-container">
                            <div class="video-placeholder" style="background: ${['var(--color-bg-1)', 'var(--color-bg-8)'][index % 2]};">
                                <span style="font-size: 72px;">▶️</span>
                                <p style="margin-top: 16px; color: var(--color-text-secondary); font-size: 1.1rem;">Video Player Placeholder</p>
                            </div>
                            <h3 class="video-title">${video.title}</h3>
                            <p class="video-description">${video.description}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div class="specs-section">
                    <h2>Technologies & Tools</h2>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `
                            <span class="tech-badge">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                ${project.sdgs ? `
                <div style="margin-top: 48px; margin-bottom: 32px;">
                    <h2 style="font-family: var(--font-heading); font-size: 2.5rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 24px;">UN Sustainable Development Goals</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                        ${project.sdgs.map(sdg => `
                            <span style="padding: 12px 20px; background: var(--color-bg-3); border-radius: 6px; font-family: var(--font-sans); font-size: 0.95rem; font-weight: 600; color: var(--color-text);">${sdg}</span>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <div class="project-navigation">
                    <button class="back-button" data-page="home">← Back to Home</button>
                    <div style="display: flex; gap: 16px;">
                        ${prevProject ? `<button class="nav-button" data-project-id="${prevProject.id}">← ${prevProject.title.split(' ').slice(0, 2).join(' ')}</button>` : ''}
                        ${nextProject ? `<button class="nav-button" data-project-id="${nextProject.id}">${nextProject.title.split(' ').slice(0, 2).join(' ')} →</button>` : ''}
                    </div>
                </div>
            </section>
            ${renderFooter()}
        </div>
    `;
}

// Render Skills Page - Redirect to home
function renderSkillsPage() {
    navigateTo('home');
    setTimeout(() => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return '';
}

// Render Contact Page - Redirect to home
function renderContactPage() {
    navigateTo('home');
    setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return '';
}

// Render Footer
function renderFooter() {
    return `
        <footer>
            <div class="footer-content">
                <p>&copy; 2025 Peter Kernohan. All rights reserved.</p>
                <p class="footer-tagline">Robotics & Intelligent Devices Engineer | Maynooth University</p>
                <p style="margin-top: 12px; font-size: 0.95rem;">
                    <a href="mailto:peterjohnkernohan@gmail.com" style="color: var(--color-primary); text-decoration: none; margin: 0 8px;">Email</a> | 
                    <a href="https://github.com/peterk05" target="_blank" rel="noopener" style="color: var(--color-primary); text-decoration: none; margin: 0 8px;">GitHub</a> | 
                    <a href="https://linkedin.com/in/peter-kernohan-a4b788356" target="_blank" rel="noopener" style="color: var(--color-primary); text-decoration: none; margin: 0 8px;">LinkedIn</a>
                </p>
            </div>
        </footer>
    `;
}

// Handle Contact Form Submit - Not needed for single page
function handleContactFormSubmit(e) {
    e.preventDefault();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}