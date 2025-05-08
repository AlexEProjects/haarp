//0 bluef00t "Templaterr"
var html = '<a href="index.html"><h3>Home</h3></a>';


html += '<h3>Information:</h3>';
html += '<p> <a href="whatisit.html"> What is it?</a></p>'
html += '<p> <a href="thetruth.html"> The TRUTH!</a></p>'
html += '<p> <a href="sources.html"> AMAZING sources!</a></p>'

document.getElementById("sidebar").innerHTML = html;