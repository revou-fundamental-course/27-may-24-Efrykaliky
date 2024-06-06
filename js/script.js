// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};
navSlide();

//form
document.getElementById('formulir').addEventListener('submit', function(event) {
  event.preventDefault();  // Mencegah pengiriman formulir default


  //membuat tanggal sekarang
  const now = new Date();
  const dateTimeString = now.toLocaleString();
 

  // Ambil nilai dari formulir
 
  const nama = document.getElementById('nama').value;
  const tglLahir = document.getElementById('tgl_lahir').value;
  const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
  const pesan = document.getElementById('pesan').value;

  // Buat teks hasil inputan
  const resultText = `Date/time: ${dateTimeString}\n \nName: ${nama}\nDate of Birth: ${tglLahir}\nGender: ${jenisKelamin}\nMessages:\n${pesan}`;

  // Tampilkan hasil inputan di text area
  document.getElementById('result').value = resultText;

  // Tampilkan pesan alert
  alert('Your Message Has Been Submitted');
  document.getElementById('nama').value ="";
  document.getElementById('tgl_lahir').value ="";
  document.getElementById('pesan').value ="";
  
});
  