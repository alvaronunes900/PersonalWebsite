function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        console.log("Esconder div");
      x.style.display = "none";
    } else {
        console.log("Mostrar div");
      x.style.display = "block";
    }
  }