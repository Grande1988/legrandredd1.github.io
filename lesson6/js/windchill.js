let speed = parseFloat(document.querySelector("#speed").textContent);
let temp = parseFloat(document.querySelector("#temp").textContent);
document.getElementById("windchill").innerHTML = windChill(temp, speed);

function windChill(temp, speed) {
    if (temp <= 50 && speed > 3){
    let end = Math.round(35.74 + .6215*temp - 35.75*speed**.16 + .4275*temp*speed**.16) + "&#8457;";
    return end;
    }
    else
    {
        return "N/A";
    }
}