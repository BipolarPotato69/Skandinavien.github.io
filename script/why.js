var video = document.querySelector('video');
window.addEventListener('scroll',function(){
	var value = 1 + window.scrollY/-800;
	video.style.opacity = value;
})

window.addEventListener("scroll",function(){
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 550);
})

function readMore() {
  var x = document.getElementById("myDIV");
  var aText = document.getElementById("aText");

  if (x.style.display === "none") {
    x.style.display = "block";
    aText.innerHTML = "Read Less";
  } else {
    x.style.display = "none";
    aText.innerHTML = "Read More";
  }
}

function readMore2() {
  var x = document.getElementById("myDIV2");
  var aText = document.getElementById("aText2");

  if (x.style.display === "none") {
    x.style.display = "block";
    aText2.innerHTML = "Read Less";
  } else {
    x.style.display = "none";
    aText2.innerHTML = "Read More";
  }
}

function readMore3() {
  var x = document.getElementById("myDIV3");
  var aText = document.getElementById("aText3");

  if (x.style.display === "none") {
    x.style.display = "block";
    aText3.innerHTML = "Read Less";
  } else {
    x.style.display = "none";
    aText3.innerHTML = "Read More";
  }
}

function readMore4() {
  var x = document.getElementById("myDIV4");
  var aText = document.getElementById("aText4");

  if (x.style.display === "none") {
    x.style.display = "block";
    aText4.innerHTML = "Read Less";
  } else {
    x.style.display = "none";
    aText4.innerHTML = "Read More";
  }
}
