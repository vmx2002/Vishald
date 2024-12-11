<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vishal Bhupesh Dawane - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header id="home">
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#experience">Internship Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="hero">
            <img src="placeholder.jpg" alt="Vishal Bhupesh Dawane" class="hero-image">
            <h1>Vishal Bhupesh Dawane</h1>
            <p>Aspiring Structural Engineer</p>
            <p>"Building the Future with Precision and Passion"</p>
            <div class="cta-buttons">
                <button onclick="viewResume()">View Resume</button>
                <button onclick="scrollToSection('contact')">Contact Me</button>
                <button onclick="scrollToSection('projects')">Explore Projects</button>
            </div>
        </div>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>I am Vishal Bhupesh Dawane, a passionate structural engineer in the making. Currently pursuing my B.E. in Civil Engineering from [University Name], I have achieved a CGPA of 7.60, and I am set to graduate in 2025. My journey in civil engineering began with a fascination for innovative structures and sustainable practices. I am deeply committed to exploring eco-friendly solutions and leveraging cutting-edge tools and technologies to design the future of construction.</p>
        <img src="about-visual.gif" alt="About Me Visual" class="section-image">
        <div class="timeline">
            <div class="timeline-item">2021: Started B.E. in Civil Engineering</div>
            <div class="timeline-item">2023: Completed coursework on advanced structural analysis</div>
            <div class="timeline-item">2024: Internship at ABC Constructions</div>
            <div class="timeline-item">2025: Final Year Project on Smart Sustainable Building Design</div>
        </div>
    </section>

    <section id="experience">
        <h2>Internship Experience</h2>
        <h3>ABC Constructions (Summer 2024)</h3>
        <p>During my internship at ABC Constructions, I gained hands-on experience in structural design and analysis. I contributed to various aspects of building construction and design, working closely with a team of professionals to ensure high-quality outputs. My key contributions included:</p>
        <ul>
            <li>Assisting in the design of reinforced concrete (RC) structures for residential buildings, ensuring adherence to safety standards and client requirements.</li>
            <li>Conducting structural stability analyses using STAAD.Pro and AutoCAD, identifying potential risks and proposing solutions.</li>
            <li>Participating in on-site inspections to ensure construction met regulatory compliance and quality standards.</li>
            <li>Preparing detailed reports on material strength, load calculations, and construction feasibility.</li>
        </ul>
        <img src="internship-diagram.png" alt="Internship Contributions Diagram" class="section-image">
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project">
            <h3>Smart Sustainable Building Design (Final Year Project)</h3>
            <p>This project focused on developing an eco-friendly multi-story building design with integrated energy-efficient solutions. By leveraging tools like ETABS and Revit, I conducted detailed structural analyses and optimized material usage, achieving a 15% reduction in construction materials without compromising stability. The design incorporated rainwater harvesting, solar panels, and smart HVAC systems for sustainability.</p>
            <img src="sustainable-building.gif" alt="Sustainable Building Design Visualization" class="section-image">
        </div>
        <div class="project">
            <h3>Earthquake-Resistant Housing</h3>
            <p>In this project, I designed a prototype for single-family housing capable of withstanding seismic activity. Using SAP2000, I performed load testing and created detailed documentation for the structural design. The prototype focused on affordable, durable housing solutions for earthquake-prone regions, ensuring safety and longevity under extreme conditions.</p>
            <img src="earthquake-design.png" alt="Earthquake-Resistant Housing Design" class="section-image">
        </div>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <h3>Technical Skills</h3>
        <p>AutoCAD, STAAD.Pro, ETABS, Revit, SAP2000, MS Project</p>
        <h3>Programming Skills</h3>
        <p>Python (for automation and data analysis), MATLAB</p>
        <h3>Soft Skills</h3>
        <p>Leadership, teamwork, problem-solving, attention to detail</p>
        <img src="skills-visual.gif" alt="Skills Visualization" class="section-image">
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
        </form>
        <div class="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Instagram</a>
        </div>
        <img src="contact-visual.png" alt="Contact Section Visual" class="section-image">
    </section>

    <footer>
        <p>&copy; 2024 Vishal Bhupesh Dawane. All rights reserved.</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
