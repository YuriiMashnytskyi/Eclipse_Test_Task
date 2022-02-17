// 55.83315789477545, 37.42638787537959;

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 0,
  loop: true,
});
