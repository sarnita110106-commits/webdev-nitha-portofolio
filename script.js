const body = document.body;
const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});


const btnSapa = document.getElementById("btnSapa");
const greeting = document.getElementById("greeting");

btnSapa.addEventListener("click", () => {
    const nama = prompt("Masukkan nama kamu YAH 😊");

    if (nama && nama.trim() !== "") {
        greeting.innerText = `Halo, ${nama}! Selamat datang di portofolio KAKAK NITHA ✨`;
    } else {
        greeting.innerText = "Halo, pengunjung misterius HEHE🙌";
    }
});


/* 
REFLEKSI SINGKAT
Bagian yang paling sulit dipahami: 
Awalnya saya agak bingung bagaimana menghubungkan tombol di HTML 
dengan JavaScript dan membuat interaksi yang bisa 
menampilkan hasil di halaman.

Momen 'WOW':
Saat tombol 'Ubah Tema' berhasil mengubah warna seluruh halaman, 
dan tombol 'Sapa Saya' menampilkan nama pengunjung sesuai input. 
Rasanya puas sekali bisa melihat halaman statis menjadi interaktif.

*/