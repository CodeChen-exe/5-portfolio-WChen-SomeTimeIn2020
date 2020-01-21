// Tabbed Menu
function openSection(evt, sectionName) {
  var i, x, tabsections;
  x = document.getElementsByClassName("sections");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tabsections = document.getElementsByClassName("tabsection");
  for (i = 0; i < x.length; i++) {
    tabsections[i].className = tabsections[i].className.replace(" w3-dark-gray", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-gray";
}
document.getElementById("theHTML").click();