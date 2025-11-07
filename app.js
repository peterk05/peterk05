// Project Data
const projectsData = [
    {
        id: 'battle-bot',
        title: 'Autonomous Battle Bot',
        category: 'Robotics',
        shortDescription: 'Arduino-powered combat robot featuring computer vision for autonomous opponent tracking and engagement.',
        fullDescription: 'The Autonomous Battle Bot represents a comprehensive exploration of robotics, artificial intelligence, and mechanical engineering. This project combines low-level hardware control with sophisticated computer vision algorithms to create an intelligent combat system. The robot autonomously detects opponents, calculates optimal attack trajectories, and executes combat maneuvers with precision timing. Throughout development, I encountered significant challenges in real-time processing, motor synchronization, and durability under impact. This project deepened my understanding of embedded systems, sensor integration, and the practical constraints of robotics development.',
        longProcess: 'The development process began with establishing the design philosophy: create a robust combat platform that could operate autonomously while maintaining structural integrity under combat stress. I selected Arduino as the primary controller due to its extensive ecosystem and real-time capabilities. The mechanical chassis was engineered using impact-resistant materials with strategic weight distribution for stability and maneuverability. Motor selection involved careful consideration of torque requirements, response time, and power consumption. I implemented a custom motor controller circuit to provide independent speed control for each motor, enabling precise turning and engagement tactics. The computer vision system utilizes OpenCV for real-time image processing, detecting opponents through color recognition and motion analysis. Processing occurs at 30 FPS on an onboard Raspberry Pi, with results transmitted to the Arduino for decision-making. Combat algorithms were developed iteratively, testing various strategies for approach, engagement, and recovery. The firmware was optimized extensively to minimize latency between sensing and actuation, critical for competitive performance. Multiple iterations of the chassis were tested and refined based on battle performance data, leading to significant improvements in durability and maneuverability. Future enhancements include machine learning integration for adaptive strategy selection and improved sensor fusion for more reliable opponent tracking.',
        technologies: ['Arduino', 'C++', 'Computer Vision', 'Motor Control', 'Embedded Systems'],
        bgColor: 'var(--color-bg-1)',
        icon: '🤖',
        images: [
            { caption: 'Battle bot chassis design and construction' },
            { caption: 'Motor and drive system integration' },
            { caption: 'Computer vision sensor configuration' },
            { caption: 'Final assembled robot platform' },
            { caption: 'Operational testing environment' },
            { caption: 'Combat arena deployment' }
        ],
        videos: [
            { title: 'Autonomous Battle Performance', description: 'Live demonstration of autonomous opponent tracking and engagement' },
            { title: 'Development Process Overview', description: 'Journey from concept to competition-ready robot' }
        ]
    },
    {
        id: 'bird-species-cv',
        title: 'Computer Vision System for Bird Species Identification and Conservation',
        category: 'Computer Vision',
        shortDescription: 'Real-time bird species identification system using machine learning and computer vision for wildlife monitoring.',
        fullDescription: 'This project addresses critical challenges in wildlife conservation through intelligent computer vision. The system automatically identifies bird species in real-time, enabling large-scale monitoring of populations and behaviors. By deploying this technology in field environments, conservationists can gather unprecedented volumes of species distribution data. The machine learning models were trained on extensive datasets to recognize diverse plumage patterns, body postures, and environmental variations. The system\'s deployment on edge devices like Raspberry Pi enables remote monitoring stations that operate with minimal power consumption. This work combines practical engineering with environmental impact, demonstrating how technology can advance conservation goals.',
        longProcess: 'The project originated from recognizing the limitations of manual bird species surveys. Conservation efforts require continuous population monitoring across vast geographic areas, a task infeasible through traditional observation methods. I researched existing computer vision techniques and selected a transfer learning approach using pre-trained neural networks for efficiency and accuracy. Dataset curation involved collecting and annotating thousands of bird images across multiple species, diverse plumage patterns, and various environmental lighting conditions. Data augmentation techniques were applied to increase training robustness and reduce overfitting. The model was trained using TensorFlow, iteratively adjusting hyperparameters to optimize accuracy while maintaining acceptable inference latency. Significant effort focused on optimizing the model for Raspberry Pi deployment, reducing computational requirements through quantization and model pruning while maintaining species identification accuracy. The inference pipeline was architected to process camera feeds in real-time, extracting species information and confidence metrics. Integration with cloud logging systems enables researchers to collect and analyze population data remotely. Extensive field testing in multiple environments validated performance across seasons and weather conditions. The system achieved >92% accuracy on target species while maintaining <500ms inference latency. Future development includes expanding species coverage, implementing seasonal migration tracking, and integrating acoustic analysis for nocturnal species monitoring.',
        technologies: ['Raspberry Pi', 'Python', 'TensorFlow', 'OpenCV', 'Machine Learning'],
        bgColor: 'var(--color-bg-5)',
        icon: '🦅',
        images: [
            { caption: 'Bird species dataset preparation' },
            { caption: 'Model architecture and training visualization' },
            { caption: 'Raspberry Pi deployment configuration' },
            { caption: 'Real-time inference output display' },
            { caption: 'Field deployment station setup' },
            { caption: 'Conservation area monitoring' }
        ],
        videos: [
            { title: 'Real-time Species Identification', description: 'Live demonstration of the system identifying bird species from camera feed' },
            { title: 'Field Deployment and Results', description: 'System operating in natural wildlife environments with conservation applications' }
        ]
    },
    {
        id: 'pick-place-robot',
        title: 'Pick and Place Autonomous Robot',
        category: 'Electronics',
        shortDescription: 'Precision robotic arm with custom PCB control interface for autonomous component placement and manipulation.',
        fullDescription: 'The Pick and Place Autonomous Robot exemplifies precision engineering and control systems design. This project addresses the need for accurate, repeatable component positioning in manufacturing and assembly applications. The system combines mechanical precision with intelligent control algorithms to achieve micron-level positioning accuracy. The custom PCB design incorporates power delivery, motor drivers, and feedback signal conditioning in a compact, integrated package. Development required deep understanding of motor control fundamentals, feedback loop design, and real-time computation. The resulting system demonstrates capabilities approaching industrial-grade precision while remaining accessible for educational and prototyping applications.',
        longProcess: 'The design process started with establishing performance requirements: achieve ±0.1mm positioning accuracy, maintain smooth acceleration profiles, and operate reliably across extended missions. I conducted extensive research into stepper and servo motor technologies, ultimately selecting a hybrid approach combining stepper motors for positioning with servo motors for force feedback. The PCB design required careful layout considerations for power integrity, signal integrity, and electromagnetic compatibility. Motor driver selection involved evaluating current capacity, step resolution, and control interface compatibility with Arduino platforms. The custom PCB integrates four independent motor driver channels, each capable of independent speed and direction control with dynamic braking. Feedback systems include end-stop sensors and optional encoder integration for closed-loop verification. The firmware implements sophisticated motion control algorithms including acceleration profiling, path planning, and collision detection. Multiple firmware iterations focused on optimizing motion smoothness and reducing settling time. Mechanical integration involved designing mounting brackets and alignment fixtures ensuring precise component placement. Extensive testing validated positioning accuracy across the full operational envelope. The system successfully performs repetitive placement tasks with sub-millimeter accuracy. Planned enhancements include vision-based verification and adaptive force control for delicate component handling.',
        technologies: ['PCB Design', 'Arduino', 'C', 'Motor Control', 'Electronics', 'Embedded Systems'],
        bgColor: 'var(--color-bg-6)',
        icon: '🦾',
        images: [
            { caption: 'PCB schematic design and layout' },
            { caption: 'Motor driver circuit topology' },
            { caption: 'Feedback sensor integration' },
            { caption: 'Mechanical arm assembly' },
            { caption: 'Control interface and alignment' },
            { caption: 'Precision positioning demonstration' }
        ],
        videos: [
            { title: 'Autonomous Component Placement', description: 'Precise placement and manipulation of components with repeatability demonstration' },
            { title: 'Motion Control and Acceleration Profiles', description: 'Real-time demonstration of smooth motion control and dynamic braking' }
        ]
    },
    {
        id: 'computer-vision-tracker',
        title: 'Computer Vision Tracker',
        category: 'Computer Vision',
        shortDescription: 'Advanced multi-object tracking system utilizing real-time computer vision algorithms with adaptive learning.',
        fullDescription: 'The Computer Vision Tracker represents state-of-the-art application of computer vision algorithms for simultaneous multi-object tracking. This project focused on maintaining accurate object identity and trajectory estimation across complex scenes with occlusion and motion blur challenges. The system processes visual information at real-time frame rates while executing sophisticated data association algorithms. Advanced filtering techniques ensure trajectory smoothness and handle temporary tracking loss gracefully. The adaptive learning component continuously refines tracking parameters based on observed performance, enabling robust operation in diverse scenarios.',
        longProcess: 'Development began with surveying contemporary multi-object tracking methodologies, comparing centroid tracking, Kalman filtering, and deep learning approaches. I implemented a multi-stage pipeline: object detection using optimized neural networks, feature extraction for object discrimination, data association for identity consistency, and trajectory refinement using Kalman filtering. The detection stage utilizes transfer learning for real-time inference while maintaining accuracy. Feature extraction combines color, shape, and motion characteristics for robust object discrimination. The data association algorithm implements Hungarian algorithm optimization to handle complex scenarios with numerous objects. Kalman filtering provides temporal smoothing and trajectory prediction for robustness during occlusion. Significant optimization efforts achieved 60+ FPS processing on standard hardware. The system was validated on multiple benchmark datasets and custom test sequences. Performance metrics include >95% ID consistency maintenance and robust handling of temporary occlusions. Enhancements in development include trajectory prediction for autonomous system applications, adaptive parameter tuning, and multi-camera integration for expanded scene coverage.',
        technologies: ['Python', 'OpenCV', 'TensorFlow', 'Raspberry Pi', 'Computer Vision', 'Machine Learning'],
        bgColor: 'var(--color-bg-3)',
        icon: '👁️',
        images: [
            { caption: 'Detection and feature extraction pipeline' },
            { caption: 'Data association visualization' },
            { caption: 'Kalman filtering trajectory smoothing' },
            { caption: 'Multi-object tracking in complex scenes' },
            { caption: 'Occlusion handling demonstration' },
            { caption: 'Real-time performance metrics' }
        ],
        videos: [
            { title: 'Multi-Object Tracking Performance', description: 'Real-time tracking of multiple objects with identity maintenance' },
            { title: 'Advanced Scenario Handling', description: 'System performance in occlusion, rapid motion, and complex environments' }
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
    
    // Back to projects
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('projects');
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
                    <p class="location">Maynooth University, Ireland</p>
                    <button class="cta-button" data-page="projects">View Projects</button>
                </div>
            </section>
            
            <section style="padding: 100px 32px; background: var(--color-background);">
                <h2 class="section-title">Featured Projects</h2>
                <p class="section-subtitle">Explore my engineering work across robotics, computer vision, and electronics</p>
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
            
            ${renderFooter()}
        </div>
    `;
}

// Render About Page
function renderAboutPage() {
    return `
        <div class="page">
            <section style="padding-top: 120px; min-height: 100vh;">
                <h2 class="section-title">About Me</h2>
                <p class="section-subtitle">Building innovative solutions through robotics, electronics, and intelligent systems</p>
                <div class="about-content">
                    <div>
                        <p class="about-text">
                            I'm a second-year Robotics and Intelligent Devices student at Maynooth University with a passion for building intelligent systems that bridge hardware and software. My work spans battle bot construction, computer vision projects, and autonomous robotic systems. When I'm not engineering, you'll find me producing hard techno music or training Brazilian Jiu-Jitsu.
                        </p>
                    </div>
                    <div class="interests-grid">
                        <div class="interest-item">Battle Bot Construction</div>
                        <div class="interest-item">Computer Vision & AI</div>
                        <div class="interest-item">Arduino & Raspberry Pi Projects</div>
                        <div class="interest-item">PCB Design & Electronics</div>
                        <div class="interest-item">Music Production</div>
                        <div class="interest-item">Brazilian Jiu-Jitsu</div>
                    </div>
                </div>
            </section>
            ${renderFooter()}
        </div>
    `;
}

// Render Projects Page
function renderProjectsPage() {
    return `
        <div class="page">
            <section style="padding-top: 120px; min-height: 100vh;">
                <h2 class="section-title">All Projects</h2>
                <p class="section-subtitle">Comprehensive portfolio of robotics, computer vision, and electronics engineering</p>
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
            ${renderFooter()}
        </div>
    `;
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
                    <a href="#" data-page="projects">Projects</a> / 
                    <span>${project.title}</span>
                </div>
                
                <div class="project-hero">
                    <span class="category">${project.category}</span>
                    <h1>${project.title}</h1>
                    <div class="hero-image-placeholder" style="background: ${project.bgColor};">
                        <span>${project.icon}</span>
                    </div>
                </div>
                
                <div class="project-overview">
                    <p>${project.fullDescription}</p>
                </div>
                
                <div class="process-section">
                    <h2>Full Development Process</h2>
                    <div class="process-content">
                        <p>${project.longProcess}</p>
                    </div>
                </div>
                
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
                
                <div class="project-navigation">
                    <button class="back-button">← Back to Projects</button>
                    <div style="display: flex; gap: 16px;">
                        ${prevProject ? `<button class="nav-button" data-project-id="${prevProject.id}">← Previous</button>` : ''}
                        ${nextProject ? `<button class="nav-button" data-project-id="${nextProject.id}">Next →</button>` : ''}
                    </div>
                </div>
            </section>
            ${renderFooter()}
        </div>
    `;
}

// Render Skills Page
function renderSkillsPage() {
    return `
        <div class="page">
            <section style="padding-top: 120px; min-height: 100vh;">
                <h2 class="section-title">Skills & Technologies</h2>
                <p class="section-subtitle">Technical expertise spanning hardware and software development</p>
                <div class="skills-content">
                    <div class="skills-category">
                        <h3>Programming Languages</h3>
                        <div class="skills-grid">
                            <div class="skill-item">
                                <div class="skill-name">Java</div>
                                <div class="skill-level">Intermediate</div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-name">C</div>
                                <div class="skill-level">Intermediate</div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-name">Python</div>
                                <div class="skill-level">Advanced</div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-name">Arduino</div>
                                <div class="skill-level">Advanced</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="skills-category">
                        <h3>Hardware & Electronics</h3>
                        <div class="skills-grid">
                            <div class="skill-item">
                                <div class="skill-name">Raspberry Pi</div>
                                <div class="skill-level">Advanced</div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-name">Arduino</div>
                                <div class="skill-level">Advanced</div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-name">PCB Design</div>
                                <div class="skill-level">Intermediate</div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-name">Electronics</div>
                                <div class="skill-level">Advanced</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="skills-category">
                        <h3>Software & Tools</h3>
                        <div class="skills-grid">
                            <div class="skill-item">
                                <div class="skill-name">Computer Vision</div>
                                <div class="skill-level">Advanced</div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-name">CAD</div>
                                <div class="skill-level">Intermediate</div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-name">FL Studio</div>
                                <div class="skill-level">Advanced</div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-name">Git</div>
                                <div class="skill-level">Intermediate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ${renderFooter()}
        </div>
    `;
}

// Render Contact Page
function renderContactPage() {
    return `
        <div class="page">
            <section style="padding-top: 120px; min-height: 100vh;">
                <h2 class="section-title">Get In Touch</h2>
                <p class="section-subtitle">Let's collaborate on your next engineering project</p>
                <div class="contact-content">
                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" class="submit-button">Send Message</button>
                    </form>
                    <div class="contact-info">
                        <p>Or reach out directly:</p>
                        <p><strong>Email:</strong> <a href="mailto:peterkernohan@gmail.com">peterkernohan@gmail.com</a></p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/peterkernohan" target="_blank" rel="noopener">github.com/peterkernohan</a></p>
                        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/peterkernohan" target="_blank" rel="noopener">linkedin.com/in/peterkernohan</a></p>
                    </div>
                </div>
            </section>
            ${renderFooter()}
        </div>
    `;
}

// Render Footer
function renderFooter() {
    return `
        <footer>
            <div class="footer-content">
                <p>&copy; 2025 Peter Kernohan. All rights reserved.</p>
                <p class="footer-tagline">Built with passion for engineering</p>
            </div>
        </footer>
    `;
}

// Handle Contact Form Submit
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    alert('Thank you! Your message has been sent successfully.');
    document.getElementById('contactForm').reset();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}