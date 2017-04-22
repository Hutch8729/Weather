var lat = '';
var lon = '';
var f = true;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
				
    } 
	}
  function showPosition(position) {
		var tester = document.getElementById('tester');
    tester.innerHTML = "Latitude: " + position.coords.latitude + "</br>Longitude: " + position.coords.longitude;
    lat = position.coords.latitude
    lon = position.coords.longitude
 	}

document.getElementById('tempType').addEventListener('click', function () {
  if(f){
    f = false;
    $('#farenheit').show();
    $('#celsius').hide();
  }
  else {
    f = true;
    $('#farenheit').hide();
    $('#celsius').show();
  }
});

$('#weather').click(function(){
  var apiurl = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=e6b16395e0d9e609c012595f72cef7a4"
  //$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=e6b16395e0d9e609c012595f72cef7a4", function(a){
      $.getJSON(apiurl, function(a){
        var farTemp = ((a.main.temp-273.15) * (9/5) + 32).toFixed();
        $('#farenheit').text(farTemp + " F");
        var celTemp = (a.main.temp-273.15).toFixed(1);
        $('#celsius').text(celTemp + " C");
    		console.log(a);
      }
             )
}
)