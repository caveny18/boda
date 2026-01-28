const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "boda-jimena.firebaseapp.com",
  projectId: "boda-jimena",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let selectedGift = "";

function openModal(gift) {
  selectedGift = gift;
  document.getElementById("giftTitle").innerText = gift;
  document.getElementById("giftModal").classList.add("show");
}

function closeModal() {
  document.getElementById("giftModal").classList.remove("show");
}

function confirmGift(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const monto = document.getElementById("monto").value;

  db.collection("aportes").add({
    nombre,
    monto,
    regalo: selectedGift,
    fecha: new Date(),
    confirmado: false
  });

  alert("Gracias 💛 Hemos recibido tu regalo.");
  closeModal();
}
