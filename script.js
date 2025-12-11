// =============================
// OPEN POPUP ORDER OPTIONS
// =============================
function openOrderOptions() {
  document.getElementById("orderPopup").style.display = "flex";
}

// =============================
// CLOSE POPUP
// =============================
function closeOrderOptions() {
  document.getElementById("orderPopup").style.display = "none";
}

// =============================
// DIRECT WHATSAPP ORDER
// =============================
function orderWhatsApp() {
  let phone = "6289688200978"; // GANTI NOMOR WA
  let message = "Halo Dicicip.in! Saya ingin memesan menu dari daftar menu.";
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// =============================
// DIRECT GOFOOD
// =============================
function orderGoFood() {
  window.open("https://gofood.link/u/9Bq9O", "_blank");
}

// =============================
// DIRECT SHOPEEFOOD
// =============================
function orderShopeeFood() {
  window.open("https://shopee.co.id/universal-link/now-food/shop/524254?deep_and_deferred=1&shareChannel=copy_link", "_blank");
}
