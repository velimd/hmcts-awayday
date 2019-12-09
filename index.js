function contactUs() {
  const data = document.getElementById("frm1");
  console.log(data);
  var text = "";
  for (var i = 0; i < data.length-1 ;i++) {
    text += data.elements[i].value + "<br>";
  }
  document.getElementById("displayForm").innerHTML = text;
}