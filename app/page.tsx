"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01", type: "REAL-TIME COMMUNICATION", title: "Chatting App",
    description: "A real-time messaging experience with a clean interface, conversations, and smooth communication flows.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    href: "https://chat-app-zeta-black.vercel.app/", label: "Explore project", visual: "chat",
  },
  {
    number: "02", type: "COMMERCE EXPERIENCE", title: "E-commerce Platform",
    description: "A shopping platform focused on intuitive product discovery, clear product details, and a straightforward buying journey.",
    stack: ["React", "JavaScript", "API Integration", "CSS"],
    href: "https://ecommerce-delta-three-54.vercel.app/home", label: "Explore project", visual: "shop",
  },
  {
    number: "03", type: "AI-POWERED PRODUCTIVITY", title: "AI Resume Analyzer",
    description: "An AI-assisted tool that reviews resumes and helps candidates understand how well their experience matches a role.",
    stack: ["Next.js", "Node.js", "LLM API", "Tailwind CSS"],
    href: "https://resume-analyzer-nine-rose.vercel.app/", label: "Explore project", visual: "resume",
  },
];

const skills = ["React", "Next.js", "JavaScript", "TypeScript", "Angular", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Git & GitHub"];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Aman Bhardwaj home"><span className="brand-mark">A.</span><span>AMAN BHARDWAJ</span></a>
        <button className="mobile-menu-toggle" type="button" aria-expanded={mobileMenuOpen} aria-controls="primary-navigation" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMobileMenuOpen((open) => !open)}><span /><span /><span /></button>
        <div className={`nav-links${mobileMenuOpen ? " is-open" : ""}`} id="primary-navigation"><a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></div>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={() => setDarkMode((current) => !current)} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} title={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span><span className="theme-toggle-label">{darkMode ? "Light" : "Dark"}</span>
          </button>
          <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line" /></div>
          <h1>Building digital<br /><span className="headline-accent">experiences</span><br />that feel right.</h1>
          <p className="hero-description">I&apos;m Aman, a frontend developer who turns ideas into clean, responsive, and useful web experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <span>↘</span></a><a className="text-link" href="#about">A little about me <span>↗</span></a></div>
          <div className="hero-meta"><span>BASED IN INDIA</span><span className="meta-separator" /><span>FRONTEND DEVELOPER</span><span className="meta-separator" /><span>2+ YEARS BUILDING FOR THE WEB</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract portfolio artwork">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-card card-back"><span>DESIGN</span><span>+</span><span>ENGINEERING</span></div>
          <div className="art-card card-front"><div className="card-top"><span className="mini-dot"/><span className="mini-dot"/><span className="mini-dot"/><span className="card-label">CREATIVE CODE / 2026</span></div><div className="code-lines"><i className="line long"/><i className="line medium"/><i className="line short"/><i className="line long muted"/><i className="line medium"/></div><div className="art-symbol">&lt;/&gt;</div><div className="card-bottom"><span>THOUGHTFUL UI</span><span>BUILT TO WORK</span></div></div>
          <div className="floating-tag">PIXEL-PERFECT<br />WITH PURPOSE</div>
          <div className="art-cross cross-one">✳</div><div className="art-cross cross-two">✳</div>
        </div>
        <a className="scroll-cue" href="#work"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>

      <section className="work-section" id="work"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow section-kicker">SELECTED WORK / 2024—2026</p><h2>Things I&apos;ve <span>built.</span></h2></div><p className="section-intro">A selection of projects where I&apos;ve explored useful ideas, solved problems, and brought interfaces to life.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}>
          <div className={`project-visual ${project.visual}`}>
            <div className="visual-window"><div className="window-bar"><span/><span/><span/><b>{project.visual === "chat" ? "messages.app" : project.visual === "shop" ? "storefront.co" : "resume.ai"}</b></div>
              {project.visual === "chat" && <div className="chat-preview"><div className="chat-side"><i/><i/><i/><i/></div><div className="chat-main"><div className="chat-title"/><div className="bubble left"/><div className="bubble right"/><div className="bubble left small"/><div className="chat-input"/></div></div>}
              {project.visual === "shop" && <div className="shop-preview"><div className="shop-nav"/><div className="shop-hero"><div><i/><i/><i/></div><div className="shop-image"/></div><div className="shop-products"><i/><i/><i/></div></div>}
              {project.visual === "resume" && <div className="resume-preview"><div className="resume-sidebar"><i/><i/><i/><i/></div><div className="resume-paper"><b/><i/><i/><i/><i/><i/><div className="score">86<span>/100</span></div></div></div>}
            </div><span className="visual-index">PROJECT {project.number}</span>
          </div>
          <div className="project-info"><div className="project-type">{project.type}</div><div className="project-title-row"><h3>{project.title}</h3><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="round-arrow">↗</a></div><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.label} <span>↗</span></a></div>
        </article>)}</div>
      </div></section>

      <section className="about-section shell" id="about"><div className="about-label"><p className="eyebrow section-kicker">A LITTLE INTRODUCTION</p><span className="about-number">01 / ABOUT</span></div><div className="about-content"><h2>Curious by nature.<br /><span>Developer by craft.</span></h2><p className="about-lead">I enjoy creating interfaces that make complex things feel simple.</p><p className="about-body">I&apos;m a frontend developer with 2+ years of experience building web applications. I work primarily with React, Next.js, JavaScript, and modern frontend tools, and I also enjoy working across the stack with Node.js and databases. I care about readable code, thoughtful details, and experiences that work beautifully on every screen.</p><a className="text-link dark-link" href="#contact">Have a project in mind? <span>↗</span></a></div></section>

      <section className="skills-section" id="skills"><div className="shell skills-inner"><div><p className="eyebrow section-kicker">MY TOOLKIT</p><h2>Good work starts<br />with <span>good tools.</span></h2></div><div className="skills-content"><p>Tools I use to turn concepts into reliable products — and a few I&apos;m always exploring.</p><div className="skill-list">{skills.map((skill, index) => <span key={skill}><small>{String(index + 1).padStart(2, "0")}</small>{skill}</span>)}</div></div></div></section>

      <footer className="footer" id="contact"><div className="shell"><p className="eyebrow">HAVE SOMETHING GOOD IN MIND?</p><div className="footer-main"><h2>Let&apos;s make<br /><span>it happen.</span></h2><a className="contact-circle" href="mailto:amanbhardwaj052@gmail.com" aria-label="Send Aman an email">SAY<br/>HELLO <span>↗</span></a></div><div className="footer-bottom"><a className="brand footer-brand" href="#top"><span className="brand-mark">A.</span><span>AMAN BHARDWAJ</span></a><span>DESIGNED & BUILT WITH CARE</span><div className="social-links"><a href="https://github.com/AMANBH0207" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/aman-bhardwaj-72ba85148" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="mailto:amanbhardwaj052@gmail.com">EMAIL ↗</a></div><span>© 2026</span></div><p className="footer-note">amanbhardwaj052@gmail.com</p></div></footer>
    </main>
  );
}
