const lastModDate = new Date(document.lastModified);
let strLMD = "Last Updated: " + lastModDate.getMonth()+1 + "/" + lastModDate.getDate() + "/" 
           + lastModDate.getFullYear() + " " + lastModDate.getHours() + ":" 
           + lastModDate.getMinutes() + ":" + lastModDate.getSeconds();
document.getElementById("datemodified").textContent = strLMD;