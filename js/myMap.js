
function initMap() {
    const pos = { lat: 40.88778132, lng: 71.55284797};
    const map = new google.maps.Map(document.getElementById("map"), 
    {
      zoom: 15,
      center: pos,
    });
    const marker = new google.maps.Marker(
    {
      position: pos,
      map: map,
    });
  }
  