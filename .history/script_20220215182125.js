// 55.83315789477545, 37.42638787537959;

let map;

function initMap() {
  const mapElement = document.getElementById("map");
  const eclipseOffice = { lat: 55.83704479945848, lng: 37.419199100804775 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.83704479945848, lng: 37.419199100804775 },
    zoom: 13,
  });
}

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 0,
  loop: true,
});
