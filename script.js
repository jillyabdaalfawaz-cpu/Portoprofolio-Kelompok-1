// Fungsi interaktif untuk mengganti profil dengan memicu ulang animasi buku
function openProfile(evt, profileName) {
    let sections = document.getElementsByClassName("profile-section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active-section");
    }

    let tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    let targetSection = document.getElementById(profileName);
    targetSection.classList.add("active-section");
    
    // Trik JavaScript agar animasi buku terbuka ter-trigger setiap kali diklik
    let bookPage = targetSection.querySelector(".book-page");
    bookPage.style.animation = 'none';
    bookPage.offsetHeight; // Trigger reflow
    bookPage.style.animation = null;

    evt.currentTarget.classList.add("active");
}