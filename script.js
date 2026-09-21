// Mengambil elemen tombol hamburger dan menu link
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Logika ketika tombol menu di HP diklik
hamburgerBtn.addEventListener('click', () => {
    // Menambah / menghapus class 'aktif' untuk memunculkan dropdown menu
    navMenu.classList.toggle('aktif');
});
