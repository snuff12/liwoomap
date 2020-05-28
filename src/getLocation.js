function getLocation(currentLocationX, currentLocationY) {
    if (navigator.geolocation) { // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(function(position) {
        currentLocationX = position.coords.latitude;
        currentLocationY = position.coords.longitude;
      }, function(error) {
        console.error(error);
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      });
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  }

  export default getLocation;