/* Input: get a temperature from the first text field
            get a wind speed from the second text field
 * Processing: call the second function (windChill)
            store the value returned by windChill in a variable
 * Output: output the value returned by windChill to the div for the user to see
 */

    
 
function doInputOutput() {
    let tempF = parseFloat(document.getElementById('highnmb').innerHTML); 
    let speed = parseFloat(document.getElementById('wndmph').innerHTML); 
   let wCOutput = windChill(tempF, speed);
   document.getElementById("outputDiv").innerHTML= wCOutput+"F"+"&deg;";
}


// call the second function (windChill)
// store the value returned by windChill in a variable
// output the value returned by windChill to the div for the user to see
function windChill(T, S) {
 let wC  =  35.74 + 0.6215*T-35.75*(Math.pow(S, 0.16)) + 0.4275*T*(Math.pow(S, 0.16));
 let rwC = Math.round(wC);

 return rwC;
}


