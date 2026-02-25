// ─── TRANSLATIONS ───────────────────────────────
const homeTranslations = {
  id: {
    "name": "Suvarna Bhumi",
    "nav-work": "Karya",
    "nav-about": "Tentang",
    "nav-education": "Pendidikan",
    "nav-contact": "Kontak",
    "get-in-touch": "Hubungi Saya",
    "hero-label": "Specialist Programmer",
    "hero-title-h1": "<h1>Suvarna<br><em>Bhumi</em></h1>",
    "hero-description": "Saya bersemangat dalam bidang teknologi, selalu mengikuti perkembangan terbaru dan siap belajar, berkontribusi, dan tumbuh bersama komunitas yang luar biasa.",
    "download-cv": "Unduh CV",
    "scroll-text": "Lihat Karya",
    "stat-projects": "Proyek",
    "stat-grade": "Kelas",
    "about-title": "Tentang Saya",
    "about-description": 'Saya adalah <span>siswa SMK Telkom Purwokerto</span>, saat ini duduk di kelas 11. Di sekolah saya mempelajari pengembangan website, aplikasi, dan machine learning. Pernah membuat website menggunakan <span>HTML, CSS, dan JavaScript</span>, serta mempelajari <span>Laravel dan Kotlin</span>.',
    "about-quote": '"Teknologi adalah alat; kreativitas adalah kekuatan yang menggerakkannya."',
    "education-title": "Pendidikan",
    "edu-sd": "Pendidikan dasar yang membentuk fondasi akademik dan karakter.",
    "edu-smp": "Pendidikan menengah pertama dengan orientasi teknologi di SMP Telkom Purwokerto.",
    "edu-smk": "Rekayasa Perangkat Lunak — fokus pengembangan web dan mobile application.",
    "projects-title": "Proyek Unggulan",
    "projects-subtitle": "Pilihan proyek terbaik yang mencerminkan kemampuan teknis dan pendekatan saya dalam membangun produk digital.",
    "project1-title": "AI Image Classifier",
    "project1-desc": "Web Application berbasis AI yang memungkinkan pengguna memprediksi isi gambar secara real-time langsung di browser menggunakan TensorFlow.js.",
    "project2-title": "Warnet Booking",
    "project2-desc": "Aplikasi booking internet cafe berbasis Laravel dengan manajemen paket dinamis dan integrasi database relasional yang akurat.",
    "project3-title": "Game Tarik Tambang Quiz",
    "project3-desc": "Game kuis interaktif yang mengadu dua tim dalam kompetisi tug-of-war digital. Setiap jawaban benar menggerakkan tali, menciptakan pengalaman belajar yang seru.",
    "view-case": "Lihat Studi Kasus",
    "skills-title": "Keahlian",
    "footer-label": "Hubungi Saya",
    "footer-text": "© 2026 Suvarna Bhumi. All Rights Reserved."
  },
  en: {
    "name": "Suvarna Bhumi",
    "nav-work": "Work",
    "nav-about": "About",
    "nav-education": "Education",
    "nav-contact": "Contact",
    "get-in-touch": "Get in Touch",
    "hero-label": "Specialist Programmer",
    "hero-title-h1": "Suvarna<br><em>Bhumi</em>",
    "hero-description": "I am passionate about technology, always up to date with the latest developments and ready to learn, contribute, and grow with an amazing community.",
    "download-cv": "Download CV",
    "scroll-text": "View Work",
    "stat-projects": "Projects",
    "stat-grade": "Grade",
    "about-title": "About Me",
    "about-description": 'I am a student at <span>SMK Telkom Purwokerto</span>, currently in 11th grade. I study web development, mobile apps, and machine learning. I have built websites using <span>HTML, CSS, and JavaScript</span>, and also learned <span>Laravel and Kotlin</span>.',
    "about-quote": '"Technology is the tool; creativity is the force that drives it."',
    "education-title": "Education",
    "edu-sd": "Completed primary education that built an academic and character foundation.",
    "edu-smp": "Junior high education at Telkom Junior High School Purwokerto with a technology focus.",
    "edu-smk": "Software Engineering — focused on web and mobile application development.",
    "projects-title": "Featured Work",
    "projects-subtitle": "Selected projects that reflect my technical capabilities and approach to building digital products.",
    "project1-title": "AI Image Classifier",
    "project1-desc": "An AI-powered web application that lets users predict image content in real-time directly in the browser using TensorFlow.js.",
    "project2-title": "Warnet Booking",
    "project2-desc": "A Laravel-based internet cafe booking app with dynamic package management and relational database integration.",
    "project3-title": "Tug of War Quiz Game",
    "project3-desc": "An interactive web quiz game pitting two teams against each other. Each correct answer moves the rope, creating a fun competitive learning experience.",
    "view-case": "View Case Study",
    "skills-title": "Skills",
    "footer-label": "Get in Touch",
    "footer-text": "© 2026 Suvarna Bhumi. All Rights Reserved."
  }
};

// ─── CURSOR ───────────────────────────────
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!cursor || !ring) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    }, 60);
  });
}

// ─── SCROLL HEADER ───────────────────────────────
function initScrollHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ─── HAMBURGER ───────────────────────────────
function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const navLinks = document.querySelectorAll('.nav-menu a');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  menuOverlay.addEventListener('click', closeMenu);
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
}

// ─── LANGUAGE ───────────────────────────────
let currentLang = localStorage.getItem('language') || 'id';

function initHomeLanguage() {
  const langToggle = document.getElementById('langToggle');
  if (!langToggle) return;
  document.documentElement.lang = currentLang;
  langToggle.textContent = currentLang === 'id' ? 'EN' : 'ID';
  updateHomeTranslations();
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('language', currentLang);
    langToggle.textContent = currentLang === 'id' ? 'EN' : 'ID';
    document.documentElement.lang = currentLang;
    updateHomeTranslations();
  });
}

function updateHomeTranslations() {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (homeTranslations[currentLang][key] !== undefined) {
      el.innerHTML = homeTranslations[currentLang][key];
    }
  });
}

// ─── THEME ───────────────────────────────
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  const icon = themeToggle.querySelector('i');
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  icon.className = saved === 'light' ? 'fas fa-moon' : 'fas fa-sun';

  themeToggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    icon.className = next === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  });
}

// ─── SCROLL ANIMATIONS ───────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .slide-left, .slide-right').forEach(el => observer.observe(el));
}

// ─── SMOOTH SCROLL ───────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initScrollHeader();
  initHamburgerMenu();
  initHomeLanguage();
  initTheme();
  initScrollAnimations();
  initSmoothScroll();
});
