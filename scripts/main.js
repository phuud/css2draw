console.log('This would be the main JS file.');

var lines = document.getElementById("lines");
for(var i=1; i<6; i++) {
    lines.innerHTML += "<span class='line_"+i+"'></span>";
}