
(function () {
  const yearEl = document.querySelector("#currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nav = document.querySelector(".main-navbar");
  window.addEventListener("scroll", function () {
    if (!nav) return;
    if (window.scrollY > 30) {
      nav.classList.add("navbar-scrolled");
    } else {
      nav.classList.remove("navbar-scrolled");
    }
  });

  const forms = document.querySelectorAll(".wa-form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = form.querySelector('[name="nama"]')?.value || "";
      const paket = form.querySelector('[name="paket"]')?.value || "";
      const tanggal = form.querySelector('[name="tanggal"]')?.value || "";
      const peserta = form.querySelector('[name="peserta"]')?.value || "";
      const pesan = form.querySelector('[name="pesan"]')?.value || "";
      const phone = "6281234567890";
      const text = `Halo admin, saya ingin konsultasi paket wisata.%0A%0ANama: ${nama}%0APaket: ${paket}%0ATanggal: ${tanggal}%0AJumlah Peserta: ${peserta}%0APesan: ${pesan}`;
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    });
  });
})();
