var lat = '';
var lon = '';
var f = false;
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

$('#weather').click(function(){
  var apiurl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=e6b16395e0d9e609c012595f72cef7a4"
  //$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=e6b16395e0d9e609c012595f72cef7a4", function(a){
    if (f){
      $.getJSON(apiurl, function(a){
        var temp = ((a.main.temp-273.15) * (9/5) + 32).toFixed();
        $('#tester').text(temp + " F");
    		console.log(a);
      }
             )
    }
    else {
      $.getJSON(apiurl, function(a){
        var temp = (a.main.temp-273.15).toFixed(1);
        $('#tester').text(temp + " C");
        console.log(a);
      }
              )
    }
}
)