function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        console.log("Esconder div");
      x.style.display = "none";
    } else {
        console.log("Mostrar div");
      x.style.display = "block";
    };
    
  }


  window.onscroll = function(ev) {

    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      carregar('BarraIngles',80);
      carregar('BarraC',100);
      carregar('BarraSAP',89);
      carregar('BarraCSHARP',35);
      carregar('BarraJAVA',82);
    }
};

function carregar(id,valor){
  $('#' + id).animate({
    width: valor + '%'
  }, 4000, function(){
    // terminou
  });
  }