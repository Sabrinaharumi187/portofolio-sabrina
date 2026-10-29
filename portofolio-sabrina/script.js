/**
 * NURUL SABRINA HARUMIE - PORTFOLIO INTERACTIVITY SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProjectFilters();
  initModal();
});

// 1. NAVBAR SCROLL EFFECT & ACTIVE LINK TRACKING
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksContainer = document.getElementById('navLinks');

  // Toggle Mobile Menu
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // Active section observer on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 180;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// 2. PROJECT FILTERING
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

// 3. PROJECT DETAILS MODAL DATA & HANDLERS
const projectDetails = {
  ppdb: {
    title: "PPDB SMK Se-Kota Padang (Jalur Afirmasi)",
    subtitle: "Student Admission System • Team Project Politeknik Negeri Padang",
    image: "./assets/real-ppdb.png",
    role: "Web Developer (Affirmation Pathway & Economic Verification Module)",
    period: "Desember 2025",
    techStack: ["PHP", "MySQL", "Bootstrap", "MVC Pattern", "Relational Database"],
    overview: `
      Sistem Penerimaan Murid Baru (SPMB) untuk 15 Sekolah Menengah Kejuruan (SMK) di Kota Padang merupakan platform terpadu yang memfasilitasi seleksi pendaftar secara transparan dan akuntabel. Proyek ini dibangun bersama tim dengan membagi 4 jalur seleksi utama.
    `,
    contributions: [
      "Mengembangkan modul <strong>Jalur Afirmasi</strong> dari perancangan alur pendaftaran hingga validasi data pendaftar.",
      "Membangun formulir data ekonomi pemohon: jenis bantuan pemerintah (KIP, PKH, KIS, SKTM), nomor kartu bantuan, rentang penghasilan orang tua, jumlah tanggungan, serta fitur unggah dokumen pendukung.",
      "Menghubungkan data pendaftar ke modul Super Admin dan Admin Sekolah untuk proses verifikasi berkas dan penerbitan status seleksi.",
      "Menerapkan pola arsitektur MVC (Model-View-Controller) untuk pemisahan logika database, pengolahan data, dan tampilan antarmuka yang bersih."
    ]
  },
  event: {
    title: "Event Management System — HIMA PNP",
    subtitle: "Aplikasi Web Manajemen Kegiatan HMJ Teknologi Informasi PNP",
    image: "./assets/real-hmj.jpg",
    role: "Full-Stack Web Developer",
    period: "Oktober 2025 – Januari 2026",
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "MVC Architecture"],
    overview: `
      Aplikasi web manajemen kegiatan kemahasiswaan yang dirancang untuk mendukung operasional Himpunan Mahasiswa Jurusan Teknologi Informasi (HMJ Tekinfo) Politeknik Negeri Padang. Aplikasi ini menggantikan pencatatan manual dan berhasil melayani 3+ event kemahasiswaan dengan lebih dari 100+ peserta terdaftar.
    `,
    contributions: [
      "Merancang dan membangun modul end-to-end: direktori kegiatan, formulir registrasi online dengan validasi real-time, dan halaman detail acara.",
      "Membangun Admin Dashboard untuk panitia: pemantauan kuota peserta, verifikasi pembayaran/tiket, dan rekapitulasi data kehadiran.",
      "Menerapkan antarmuka responsif menggunakan HTML5 dan CSS3 modern yang optimal diakses lewat smartphone maupun laptop peserta.",
      "Memastikan keamanan penyimpanan data peserta dan kemudahan operasional panitia selama kegiatan berlangsung."
    ]
  },
  uiux: {
    title: "UI/UX Design: HMJ Tekinfo Mobile App Prototype",
    subtitle: "Mobile Application Design • HMJ Teknologi Informasi Politeknik Negeri Padang",
    image: "./assets/real-figma.png",
    role: "UI/UX Designer",
    period: "2025 – 2026",
    techStack: ["Figma", "Mobile App UI", "Wireframing", "Interactive Prototyping", "Design System"],
    overview: `
      Perancangan antarmuka aplikasi mobile untuk mendukung kegiatan kemahasiswaan di lingkungan HMJ Teknologi Informasi Politeknik Negeri Padang. Berfokus pada kemudahan akses informasi kegiatan, registrasi akun peserta, serta pemantauan absensi dan status keanggotaan.
    `,
    contributions: [
      "Merancang antarmuka onboarding dan autentikasi: Halaman Selamat Datang / Login dan Formulir Buat Akun Baru dengan input data yang rapi dan terstruktur.",
      "Merancang Dashboard Kemahasiswaan yang intuitif: menampilkan metrik Total Event, Event Mendatang, Absensi Valid, dan Total Anggota.",
      "Menyusun prototipe interaktif di Figma untuk menguji alur navigasi pengguna secara menyeluruh.",
      "Bertanggung jawab penuh atas layout design, pemilihan warna, konsistensi tipografi, dan pengalaman pengguna (*user experience*)."
    ]
  },
  ianta: {
    title: "Proyek Inovasi Sosial: Jembatan Masa Tunggu",
    subtitle: "Top 30 Semifinalist (Top 37.5% dari 80 Peserta) • Beasiswa IANTA 2026",
    image: null,
    role: "Project Initiator & Research Lead",
    period: "Oktober 2026",
    techStack: ["Social Research", "Survey Design", "Data Processing", "Proposal & Visual Presentation"],
    overview: `
      Rancangan proyek inovasi sosial yang berfokus pada ketahanan ekonomi keluarga dengan penghasilan tidak menentu. Proyek ini memadukan survei lapangan langsung dengan skema pemberdayaan mikro yang terukur.
    `,
    contributions: [
      "Merancang metodologi survei dan mengumpulkan data dari 30 keluarga prasejahtera untuk memetakan tantangan pendapatan harian.",
      "Menyusun skema 'Dana Tabungan Komunitas' dan kurikulum pendampingan bisnis sederhana untuk 3 usaha mikro keluarga sasaran.",
      "Menetapkan target terukur dengan efisiensi anggaran awal sebesar Rp250.000 untuk pengujian skema model percontohan.",
      "Menyusun proposal presentasi komprehensif hingga berhasil lolos ke tahap semifinal (Top 30 pendaftar terbaik)."
    ]
  }
};

function initModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  // Close modal when clicking backdrop outside dialog
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const data = projectDetails[projectId];

  if (!modal || !modalBody || !data) return;

  let techPillsHtml = data.techStack
    .map(tech => `<span class="tag" style="background:rgba(244,114,182,0.15);color:#fff;border-color:rgba(244,114,182,0.4);">${tech}</span>`)
    .join('');

  let contributionsHtml = data.contributions
    .map(item => `<li style="margin-bottom:0.6rem;display:flex;align-items:flex-start;gap:0.5rem;"><span style="color:#f472b6;font-weight:bold;">✦</span><span>${item}</span></li>`)
    .join('');

  let imageHtml = data.image ? `
    <div style="border-radius:14px;overflow:hidden;border:1px solid rgba(244,114,182,0.25);margin-bottom:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,0.5);background:${data.image.includes('figma') ? '#ffffff' : '#140710'};display:flex;justify-content:center;align-items:center;">
      <img src="${data.image}" alt="${data.title}" style="width:100%;max-height:360px;object-fit:contain;display:block;padding:${data.image.includes('figma') ? '14px' : '0'};">
    </div>
  ` : '';

  modalBody.innerHTML = `
    <div style="margin-bottom:1.25rem;">
      <span style="font-size:0.8rem;text-transform:uppercase;color:#f472b6;font-weight:700;letter-spacing:0.05em;">${data.subtitle}</span>
      <h2 style="font-size:1.85rem;margin:0.35rem 0 0.5rem;color:#fff0f5;">${data.title}</h2>
      <div style="display:flex;flex-wrap:wrap;gap:1rem;font-size:0.88rem;color:#d1b4c3;margin-bottom:1rem;">
        <span><strong>Peran:</strong> ${data.role}</span>
        <span>•</span>
        <span><strong>Waktu:</strong> ${data.period}</span>
      </div>
    </div>

    ${imageHtml}

    <div style="margin-bottom:1.5rem;">
      <h4 style="font-size:1.1rem;color:#fbcfe8;margin-bottom:0.5rem;">Deskripsi Proyek</h4>
      <p style="color:#e2c8d7;font-size:0.95rem;line-height:1.7;">${data.overview}</p>
    </div>

    <div style="margin-bottom:1.75rem;">
      <h4 style="font-size:1.1rem;color:#fbcfe8;margin-bottom:0.75rem;">Kontribusi &amp; Fitur Utama</h4>
      <ul style="list-style:none;padding:0;color:#e2c8d7;font-size:0.93rem;">
        ${contributionsHtml}
      </ul>
    </div>

    <div>
      <h4 style="font-size:1rem;color:#fbcfe8;margin-bottom:0.6rem;">Teknologi &amp; Tools</h4>
      <div style="display:flex;flex-wrap:wrap;gap:0.45rem;">
        ${techPillsHtml}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Global exposure for inline onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;
