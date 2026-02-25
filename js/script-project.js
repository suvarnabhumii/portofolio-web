// ─── TRANSLATIONS ───────────────────────────────
const projectTranslations = {
  id: {
    "ai-title": "Pendeteksi<br>Gambar Otomatis",
    "warnet-title": "Website<br>E-Booking",
    "tarik-title": "Game Tarik<br>Tambang Quiz",
    "overview-title": "Project Overview",
    "ai-overview": "Website pintar pendeteksi objek instan yang dilatih menggunakan Google Teachable Machine. Didukung oleh TensorFlow.js, aplikasi ini bekerja sangat cepat serta menjaga privasi pengguna karena seluruh data diproses langsung di perangkat.",
    "warnet-overview": "Platform reservasi digital untuk Game Center yang memungkinkan pengguna memesan paket bermain secara mudah. Sistem ini mempermudah manajemen operasional warnet serta memberikan kepastian ketersediaan slot PC.",
    "tarik-overview": "Game kuis interaktif berbasis web yang mengadu dua tim dalam kompetisi tarik tambang digital. Setiap jawaban benar menggerakkan tali ke arah tim tersebut.",
    "role-label": "My Role",
    "role-ai": "Frontend & AI Integration",
    "role-warnet": "Fullstack Developer",
    "role-tarik": "Frontend Developer",
    "tools-label": "Tools",
    "timeline-label": "Timeline",
    "timeline-ai": "2 Bulan",
    "timeline-warnet": "2 Bulan",
    "timeline-tarik": "1 Bulan",
    "process-title": "Proses",
    "ai-process": "Melatih model AI menggunakan Google Teachable Machine, lalu mengekspornya ke format TensorFlow.js untuk diintegrasikan ke website agar mampu mendeteksi objek secara real-time langsung di browser.",
    "warnet-process": "Pengembangan dimulai dengan merancang database relasional. Saya menggunakan Laravel untuk membangun logika backend, mulai dari migration database hingga controller pemesanan, lalu merancang tampilan frontend responsif.",
    "tarik-process": "Saya merancang mekanik permainan — bagaimana tali bergerak sesuai skor tim, kapan game berakhir, dan cara menampilkan pertanyaan acak. Kemudian membangun antarmuka visual menggunakan animasi CSS murni.",
    "challenge-title": "Tantangan",
    "ai-challenge": "Menjaga akurasi deteksi di berbagai kondisi cahaya serta mengoptimalkan performa agar proses AI berjalan ringan tanpa membebani resource browser.",
    "warnet-challenge": "Membangun logika pemesanan akurat di mana status transaksi berubah otomatis, serta memastikan keamanan data Login dan validasi agar tidak terjadi duplikasi pesanan.",
    "tarik-challenge": "Membuat animasi tali yang smooth dan membangun sistem state permainan yang mengelola giliran tim, skor, dan kondisi menang/kalah secara real-time.",
    "source-code": "Lihat Source Code",
    "prev-project": "Proyek Sebelumnya",
    "next-project": "Proyek Berikutnya"
  },
  en: {
    "ai-title": "Automated<br>Image Detector",
    "warnet-title": "E-Booking<br>Website",
    "tarik-title": "Tug of War<br>Quiz Game",
    "overview-title": "Project Overview",
    "ai-overview": "A smart instant object detection website trained using Google Teachable Machine. Powered by TensorFlow.js, the app runs fast and keeps user privacy since all data is processed on-device.",
    "warnet-overview": "A digital reservation platform for a Game Center allowing users to book play packages easily. The system streamlines warnet operations and ensures PC slot availability for customers.",
    "tarik-overview": "An interactive web-based quiz game pitting two teams in a digital tug-of-war. Each correct answer moves the rope toward that team, creating a fun competitive learning experience.",
    "role-label": "My Role",
    "role-ai": "Frontend & AI Integration",
    "role-warnet": "Fullstack Developer",
    "role-tarik": "Frontend Developer",
    "tools-label": "Tools",
    "timeline-label": "Timeline",
    "timeline-ai": "2 Months",
    "timeline-warnet": "2 Months",
    "timeline-tarik": "1 Month",
    "process-title": "Process",
    "ai-process": "Trained the AI model using Google Teachable Machine, then exported it to TensorFlow.js format to integrate into the website for real-time object detection in the browser.",
    "warnet-process": "Started by designing a relational database, then used Laravel to build backend logic from migrations to booking controllers, and finally crafted a responsive frontend.",
    "tarik-process": "Designed the game mechanics first — how the rope moves with team scores, when the game ends, and how to display random questions. Then built the visual interface using pure CSS animations.",
    "challenge-title": "Challenge",
    "ai-challenge": "Maintaining detection accuracy across various lighting conditions and optimizing performance so AI inference runs efficiently without straining browser resources.",
    "warnet-challenge": "Building accurate booking logic where transaction status auto-updates, and ensuring login security and form validation to prevent duplicate orders.",
    "tarik-challenge": "Creating smooth rope animations and building a state management system that handles team turns, scores, and win/lose conditions in real-time.",
    "source-code": "View Source Code",
    "prev-project": "Previous Project",
    "next-project": "Next Project"
  }
};

let currentLang = localStorage.getItem('language') || 'id';

function initLang() {
  const langToggle = document.getElementById('langToggle');
  if (!langToggle) return;
  langToggle.textContent = currentLang === 'id' ? 'EN' : 'ID';
  applyTranslations();
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('language', currentLang);
    langToggle.textContent = currentLang === 'id' ? 'EN' : 'ID';
    applyTranslations();
  });
}

function applyTranslations() {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (projectTranslations[currentLang][key] !== undefined) {
      el.innerHTML = projectTranslations[currentLang][key];
    }
  });
}

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

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in, .slide-up, .zoom-in').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initTheme();
  initAnimations();
});
