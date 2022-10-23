"use strict";
//  Modal classını bir değişkene atadık. Bu değişkende saklayacağız.(overlay,close-modal)
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");
// querySelectorAll => Classı aynı olanın hepsini seç querySelector yazdığımızda sadece ilki geliyor
// console.log(btnShowModal);

// açılırken kullanılacak fonksiyon
const openModal = function () {
  console.log("Tıklandı");
  modal.classList.remove("hidden"); //(nokta kullanmadık) birden fazla class'ı kaldırabiliriz , ile
  overlay.classList.remove("hidden");
};
// kapatılınca kullanılacak fonksiyon
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Döngü yaptık. i btnshowmodal uzunluğundan fazlaysa 1 arttır ve her bir butona
// Click yapıldığında open modal fonksiyonu çalışsın.
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}
//yukarıdaki fonksiyonu close olduğu zaman çağıracağız
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// Klavye tuşlarına tıkladığımızda kapatılıyor.
document.addEventListener("keydown", function (event) {
  //genel kullanımda parametre 'e' dir event kısaltımı
  // console.log("tuşa basıldıs.");
  console.log(event.key);
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    console.log("Escape Basıldı");
    if (!modal.classList.contains("hidden")) {
      // closeModal() // yukarda parantezsiz yazdığımız js sen yaz burda ise ben yazdıracğaım için parantez koydum
    }
    closeModal();
  }
});
