  // Windchill calculation and display:
  if (tempF <= 50 && speed > 3.0){
    let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 *tempF * Math.pow(speed, 0.16);
    let feeling= Math.round(f * 100) / 100;
    document.getElementById("windChill").innerText = feeling;
    }else{
    document.getElementById("windChill").innerText = "N/A";
    }  