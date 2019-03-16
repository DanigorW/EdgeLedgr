/*
let header = 'The Sky Is The Limit';
let i = 0;

const typing = () =>{
    if(i < header.length){
        document.querySelector('.header').innerHTML += header.charAt(i);
        i++;
        setTimeout(typing ,150);
    }
    
}
*/

function initMap() {
    // Your location
    const loc = { lat: 31.771959, lng:35.21701};
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }