// Fungsi interaktif untuk mengganti profil dengan memicu ulang animasi halaman buku
function openProfile(evt, profileName) {
    // Sembunyikan semua section profil
    let sections = document.getElementsByClassName("profile-section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active-section");
    }

    // Hilangkan status aktif pada semua tombol tab
    let tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Tampilkan section profil yang dituju
    let targetSection = document.getElementById(profileName);
    targetSection.classList.add("active-section");
    
    // Trik JavaScript untuk me-trigger ulang animasi halaman buku terbuka (reflow trick)
    let bookPage = targetSection.querySelector(".book-page");
    bookPage.style.animation = 'none';
    bookPage.offsetHeight; // Memaksa browser merestart render layout
    bookPage.style.animation = null;

    // Berikan class active pada tombol tab yang diklik
    evt.currentTarget.classList.add("active");
}