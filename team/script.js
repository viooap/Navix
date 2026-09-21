// Mengatur Interaksi Pindah Menu Aktif pada Navbar
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Hapus kelas 'active' dari semua menu
        navLinks.forEach(item => item.classList.remove('active'));
        
        // Tambahkan kelas 'active' ke menu yang baru saja diklik
        this.classList.add('active');
    });
});

// Interaksi sederhana kartu tim (opsional)
const profileCards = document.querySelectorAll('.profile-card');
profileCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('.social-icon')) return;
        const name = card.querySelector('.member-name').textContent;
        console.log(`Melihat profil: ${name}`);
    });
});
