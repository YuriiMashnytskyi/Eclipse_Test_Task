// const swiper = new Swiper(".swiper", {
//   speed: 400,
//   spaceBetween: 0,
//   loop: true,
// });

// Cat-swiper
new Swiper(".cat-swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
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
