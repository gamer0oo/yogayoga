var map
function initMap() {
    macc = { lat: -33.500216, lng: -70.615721 }
    map = new google.maps.Map(document.getElementById("map"), {zoom: 17, center: macc});
    market = new google.maps.Maker({position: macc, map: map});
}

initMap()
