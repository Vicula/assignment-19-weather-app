

navigator.geolocation.getCurrentPosition(function getMyWeather(pos){
   console.log(pos)
   console.log(pos.coords.longitude)
});
