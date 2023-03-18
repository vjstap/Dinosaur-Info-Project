let toggle = button => {
    let element = document.getElementById("wikipediaiframe");

    if (element.hidden) {
      element.hidden = false;
      button.innerText = "Hide Wikipedia";
    } else {
      element.hidden = true;
      button.innerText = "Show Wikipedia";
    }
  }