function openMenu() {
    let burger = document.getElementById('burger');
    burger.classList.toggle('active');

    let headerMenu = document.getElementById('headerMenu');
    let contactBar = document.getElementById('contactBar');
    let modalMenu = document.getElementById('modalMenu');
    modalMenu.style.display = modalMenu.style.display === 'block' ? 'none' : 'block';

    modalMenu.append(headerMenu);
    modalMenu.append(contactBar);
    if (burger.classList.contains('active')) {
        headerMenu.style.display = 'block';
        contactBar.style.display = 'flex';
    } else {
        headerMenu.style.display = 'none';
        contactBar.style.display = 'none';
    }
}

$(document).ready(function () {
    $('.header-nav__link').click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
});

let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: true,
});

let map = L.map('map').setView([48.2142134, 16.3820376], 15);

if (map.tap) map.tap.disable();
L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
}).addTo(map);
map._layersMinZoom = 5;

let redIcon = L.icon({
    iconUrl: 'assets/images/redMarker.png',

    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [30, 30], // point of the icon which will correspond to marker's location
});
L.marker([48.2142134, 16.3820376], {icon: redIcon}).addTo(map);

// Datapicker
flatpickr(".flatpickr", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

