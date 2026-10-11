import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight, FaBars, FaCodeBranch, FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import profile from "./assets/profile.jpg";
import wandersite from "./assets/wandersite.png";
import video from "./assets/video.png";
import weather from "./assets/weather.png";

const projects = [
  {
    title: "WanderSite",
    kind: "FULL-STACK WEB APP",
    description: "A travel listing platform inspired by Airbnb, with authentication, reviews, image uploads, interactive maps and complete CRUD workflows.",
    image: wandersite,
    github: "https://github.com/somildholakia/Mini-airbnb",
    live: "https://practice-project-p5ge.onrender.com/listings",
    tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    color: "butter",
  },
  {
    title: "CodeMeet",
    kind: "REAL-TIME COMMUNICATION",
    description: "A Zoom-like video conferencing app focused on meeting rooms, real-time audio/video communication and screen sharing.",
    image: video,
    github: "https://github.com/somildholakia/CodeMeet",
    live: "https://codemeet-iota-ochre-71.vercel.app/",
    tags: ["React", "WebRTC", "Socket.io", "Node.js"],
    color: "lilac",
  },
  {
    title: "Weather App",
    kind: "LIVE WEATHER · FRONTEND",
    description: "A responsive weather app that fetches live weather information and lets users search locations through a straightforward interface.",
    image: weather,
    github: "https://github.com/somildholakia/Weather_app_react",
    live: "https://weather-app-react-2-f4qp.onrender.com/",
    tags: ["React", "REST API", "OpenWeather", "CSS"],
    color: "mint",
  },

];

const experiences = [
  {
    year: "2026",
    title: "Campus Ambassador",
    place: "Cloud Junction · Remote",
    description: "Supporting student outreach and community engagement around cloud learning, technical programs and opportunities.",
    color: "mint",
  },
  {
    year: "2026",
    title: "AI & ML Intern",
    place: "Coding Blocks School of Technology · Remote",
    description: "Completed hands-on summer internship projects spanning machine learning, data science and AI applications.",
    color: "butter",
  },
  {
    year: "2026",
    title: "Open Source Contributor",
    place: "GirlScript Summer of Code (GSSoC’26) · Remote",
    description: "Selected contributor working with GitHub issues, pull requests, code review and collaborative open-source workflows.",
    color: "lilac",
  },
  {
    year: "2026",
    title: "Open Source Contributor",
    place: "Social Summer of Code (SSoC’26) · Remote",
    description: "Selected for the program to collaborate on open-source projects and strengthen practical development skills.",
    color: "peach",
  },
  {
    year: "2026",
    title: "Open Source Contributor",
    place: "Nexus Spring of Code (NSoC’26) · Remote",
    description: "Contributed through issue investigation, pull requests and maintainer feedback in collaborative repositories.",
    color: "mint",
  },
  {
    year: "2026",
    title: "McKinsey.org Forward Program",
    place: "McKinsey & Company · Completed Jun 2026",
    description: "Developed structured problem-solving, communication, leadership and professional skills.",
    color: "butter",
  },
];

const skillGroups = [
  { title: "FRONTEND", color: "lilac", skills: ["React", "JavaScript", "HTML & CSS", "Tailwind CSS"] },
  { title: "BACKEND", color: "butter", skills: ["Node.js", "Express.js", "REST APIs", "Authentication"] },
  { title: "DATA & TOOLS", color: "mint", skills: ["MongoDB", "Mongoose", "Git & GitHub", "Cloudinary"] },
];

const socials = [
  { label: "GitHub", href: "https://github.com/somildholakia", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/somilsomi/", Icon: FaLinkedin },
  { label: "Email", href: "mailto:somildholakia0852@gmail.com", Icon: FaEnvelope },
];

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [["Work", "#projects"], ["About", "#about"], ["Journey", "#journey"], ["Contact", "#contact"]];

  return (
    <div className="site-shell">
      <div className="top-strip" />
      <header className="site-header">
        <a href="#home" className="wordmark">somil<span>.dev</span><i>✳</i></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-resume" href="/resume.pdf" download>Resume <FaDownload /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE STUDENT · MUMBAI, INDIA</p>
            <h1>I build things<br />for the <span className="highlight-word">internet.</span></h1>
            <p className="hero-lede">Hey, I’m <strong>Somil Dholakia (Somi)</strong> — a Computer Science student and MERN Stack Developer building useful web experiences, contributing to open source and sharing the learning journey.</p>
            <div className="chip-row">
              <span className="chip chip-white">✳ MERN STACK</span>
              <span className="chip chip-lime">⌘ OPEN SOURCE</span>
              <span className="chip chip-yellow">↗ BUILDING IN PUBLIC</span>
            </div>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <FaArrowDown /></a>
              <a className="button button-light" href="#contact">Let’s connect <FaArrowRight /></a>
            </div>
            <div className="social-links">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                  <Icon /><span>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="art-note note-top">A LITTLE CODE.<br />A LOT OF CURIOSITY.</div>
            <div className="art-blob blob-coral" /><div className="art-blob blob-lime" /><div className="art-blob blob-blue" />
            <div className="art-spark spark-one">✳</div><div className="art-spark spark-two">✦</div>
            <div className="portrait-card"><div className="portrait-frame"><img src={profile} alt="Portrait of Somil Dholakia" /></div><div className="portrait-label"><span>MADE IN MUMBAI</span><span>✹</span></div></div>
            <div className="floating-sticker">BUILD<br />THINGS<br /><b>✳</b></div>
            <div className="art-note note-bottom">DESIGN MINDS.<br />SHIP IDEAS.</div>
          </motion.div>
        </section>

        <section className="stats-band section-wrap" aria-label="Verified highlights">
          {[
            ["236+", "days building in public"],
            ["7K+", "LinkedIn followers"],
            ["9.36", "Semester IV SGPI"],
            ["3", "open-source programs"],
          ].map(([number, label], index) => (
            <div className="stat-item" key={label}>
              <strong>{number}</strong><span>{label}</span>{index < 3 && <i />}
            </div>
          ))}
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading eyebrow="01 — SELECTED WORK" title={<>Things I’ve been<br className="desktop-break" /> making lately.</>} note="Real projects, source code and live demos — explore the builds." />
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article className={`project-card ${project.color}`} key={project.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.06 }}>
                <div className="project-visual">
                  <span className="project-kind">{project.kind}</span>
                  <div className="project-image"><img src={project.image} alt={`${project.title} project screenshot`} loading="lazy" /></div>
                  <span className="project-number">0{index + 1}</span>
                </div>
                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><FaArrowRight /></a>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    <a className="project-link" href={project.github} target="_blank" rel="noreferrer"><FaGithub /> Source code <FaExternalLinkAlt /></a>
                    {project.live && <a className="project-link" href={project.live} target="_blank" rel="noreferrer"><FaArrowRight /> Live demo <FaExternalLinkAlt /></a>}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <a className="text-link" href="https://github.com/somildholakia?tab=repositories" target="_blank" rel="noreferrer">Explore all GitHub repositories <FaArrowRight /></a>
        </section>

        <section className="about-section">
          <div className="section-wrap about-grid" id="about">
            <div>
              <SectionHeading eyebrow="02 — A BIT ABOUT ME" title={<>Curious<br />by default.</>} />
              <p className="about-copy">I’m a Mumbai-based Computer Science student at Nirmala Memorial Foundation College of Commerce & Science, pursuing B.Sc. Computer Science (2024–2027). I enjoy building full-stack products, exploring AI/ML, and learning how software works under the hood.</p>
              <p className="about-copy">I’ve contributed to open-source programs, taken part in the McKinsey.org Forward Program, and worked on practical AI/ML projects through Coding Blocks School of Technology. I also share my learning journey publicly and connect with a growing developer community on LinkedIn.</p>
              <a className="text-link" href="https://www.linkedin.com/in/somilsomi/" target="_blank" rel="noreferrer">Follow the journey <FaArrowRight /></a>
            </div>
            <div className="about-sticker-card">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="big-spark">✳</span>
              <div className="about-card-copy"><span>MY DEFAULT MODE</span><h3>Build.<br />Share.<br /><em>Repeat.</em></h3></div>
              <span className="handwritten">always learning ↗</span>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading eyebrow="03 — MY TOOLBOX" title="Tools I reach for." note="A practical stack for turning ideas into working products." />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className={`skill-card ${group.color}`} key={group.title}>
                <div className="skill-card-top"><span>{group.title}</span><FaCodeBranch /></div>
                {group.skills.map((skill, index) => <div className="skill-row" key={skill}><span className="skill-index">0{index + 1}</span><span>{skill}</span><span className="skill-arrow">↗</span></div>)}
              </div>
            ))}
          </div>
        </section>

        <section className="journey-section" id="journey">
          <div className="section-wrap section-block">
            <SectionHeading eyebrow="04 — PROGRAMS & EXPERIENCE" title="Learning beyond code." note="Open-source communities, internships and professional development." />
            <div className="timeline">
              {experiences.map((experience, index) => (
                <motion.article className="timeline-item" key={experience.title + experience.place} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.05 }}>
                  <div className={`timeline-marker ${experience.color}`}>{String(index + 1).padStart(2, "0")}</div>
                  <div className="timeline-year">{experience.year}</div>
                  <div className="timeline-content"><h3>{experience.title}</h3><p className="timeline-place">{experience.place}</p><p>{experience.description}</p></div>
                  <span className="timeline-arrow">↗</span>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-panel">
            <div className="contact-deco contact-deco-one">✳</div><div className="contact-deco contact-deco-two">✦</div>
            <p className="eyebrow">HAVE A GOOD IDEA?</p><h2>Let’s make<br /><span>it real.</span></h2>
            <p className="contact-copy">Open to internships, collaborations and interesting conversations. My inbox is open.</p>
            <div className="contact-actions">
              <a className="button button-lime" href="mailto:somildholakia0852@gmail.com">Say hello <FaArrowRight /></a>
              <a className="contact-social" href="https://github.com/somildholakia" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="contact-social" href="https://www.linkedin.com/in/somilsomi/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">somil<span>.dev</span><i>✳</i></a>
        <p>Designed with curiosity. Built with code.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <small>© {new Date().getFullYear()} Somil Dholakia</small>
      </footer>
    </div>
  );
}
