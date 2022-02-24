// const swiper = new Swiper(".swiper", {
//   speed: 400,
//   spaceBetween: 0,
//   loop: true,
// });

// Cat-swiper
new Swiper(".cat-swiper", {
  loop: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

// Office location
let map;

function initMap() {
  const mapElement = document.getElementById("map");
  const eclipseOffice = { lat: 55.83704479945848, lng: 37.419199100804775 };

  map = new google.maps.Map(mapElement, {
    center: eclipseOffice,
    zoom: 13,
  });
}
