let toggle = button => {
  let element = document.querySelector('.wikipediaiframe');

  if (element.hidden) {
    element.hidden = false;
    button.innerText = "Hide Wikipedia";
  } else {
    element.hidden = true;
    button.innerText = "Show Wikipedia";
  }
}
var modal = document.getElementById("myModal");
var imgs = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

imgs.forEach(function(img) {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
  let img = link.querySelector("img");
  if (img) {
    let originalSrc = img.src;
    let hoverSrc = img.dataset.hoverSrc;

    link.addEventListener("mouseenter", function() {
      img.src = hoverSrc;
    });

    link.addEventListener("mouseleave", function() {
      img.src = originalSrc;
    });
  }
});