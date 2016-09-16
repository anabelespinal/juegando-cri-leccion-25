/*
window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	boton.addEventListener("click", function() {
	 	document.getElementById("color1").style.border = "3px solid red";

		document.getElementById("color2").style.border = "0px solid red";
		document.getElementById("color3").style.border = "0px solid red";
		
		document.getElementById("color1").style.border = "0px solid red";
		document.getElementById("color2").style.border = "3px solid red";
		document.getElementById("color3").style.border = "0px solid red";
	
		document.getElementById("color1").style.border = "0px solid red";
		document.getElementById("color2").style.border = "0px solid red";
		document.getElementById("color3").style.border = "3px solid red";
		
	});

	var boton2 = document.getElementById("superCri");
	boton2.addEventListener("click", function() {
		
	var color = document.getElementById("input").value;
	if (color=="blue"){
		document.getElementById("color1").style.border = "3px solid yellow";
		document.getElementById("color2").style.border = "0px solid yellow";
		document.getElementById("color3").style.border = "0px solid yellow";
	} else if (color=="green"){
		document.getElementById("color1").style.border = "0px solid yellow";
		document.getElementById("color2").style.border = "3px solid yellow";
		document.getElementById("color3").style.border = "0px solid yellow";
	} else if (color=="black"){
		document.getElementById("color1").style.border = "0px solid yellow";
		document.getElementById("color2").style.border = "0px solid yellow";
		document.getElementById("color3").style.border = "3px solid yellow";
	}
		
	});
	
});
*/
/*
window.addEventListener("load", function() {
	var boton = document.getElementById("crip");
	boton.addEventListener("click", function() {
		function borderCrip(){
			var cripUno = document.getElementById("body").children[1].classList.add("cripBorderUno");
		}
		borderCrip();
	});
});
//document.getElementById("lista").children[3].classList.add("agregada")
//document.getElementById("lista").children[3].classList.remove("agregada")
	
	//var cripDos = document.getElementById("cripDos").style.border = "3px solid yellow";
	//var cripTres = document.getElementById("cripTres").style.border = "3px solid purple";
	function cripCambiarColor() {
		var cripUno = document.getElementById("cripUno").style.border = "3px solid red";
		//var cripDos = document.getElementById("cripDos").style.border = "3px solid yellow";
		//(var cripTres = document.getElementById("cripTres").style.border = "3px solid purple";
	}
	cripCambiarColor();
	});
	boton.addEventListener("dblclick", function() {
		function crip2(){
			//document.getElementById("body").children[1].remove();
			var cripDos = document.getElementById("cripDos").style.border = "3px solid yellow";
		}
		crip2();
	});
*/
/*
window.addEventListener("load", function() {
   var supercri = document.getElementById("supercri");
   supercri.addEventListener("click", function() { 
    var color = document.getElementById("color").value;
    if(color == "blue"){
      document.getElementById("blue").classList.toggle("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    } 
      else if(color == "red"){
      document.getElementById("red").classList.toggle("border");
      document.getElementById("blue").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    }
      else if(color == "yellow"){
      document.getElementById("yellow").classList.toggle("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("blue").classList.remove("border");
    }
  });
 });
*/

/* // contador de click
​<p id="pinchame">lorem ipsum...</p>​​​​​​​​​​​​​​​​​​​​​​​​
window.onload = function(){
    var contador = 0;
    document.getElementById("pinchame").onclick = function(){
        contador++;
        alert(contador);
    }
}
*/

/* //click
<html>

<body>

<!-- Copiar dentro del tag BODY -->

<SCRIPT>

var i = 0

</SCRIPT>



Click <a href="http://www.sitio.com" onClick=  "

javascript:

i = i + 1

if (i == 1) {

window.status= 'Ejemplo, hiciste click ' + i + ' veces en este link.'

}

else

{

window.status= 'Ejemplo, hiciste click ' + i + ' veces en este link'

}

;return false"> acá </a> muchas veces y mira la barra de estado.

</body>

</html>
*/
window.addEventListener("load", function () {
	 var boton = document.getElementById("cri");
	 var contador = 1;
	 boton.addEventListener("click", function () {
        if (contador == 1) {
            // document.getElementsByClassName("circulo")[0].style.border = "3px solid yelloy";
            // document.getElementById("color").placeholder = "rojo";
            // document.getElementsByClassName("circulo")[1].style.borderColor ='transparent';
            // document.getElementsByClassName("circulo")[2].style.borderColor = 'transparent';

            document.getElementsByClassName("circulo")[0].style.border = "3px solid yellow";
            document.getElementById("color").placeholder = "rojo";
            document.getElementsByClassName("circulo")[1].style.border = 'transparent';
            document.getElementsByClassName("circulo")[2].style.border = 'transparent';
        };
        if (contador == 2) {
            document.getElementsByClassName("circulo")[1].style.border = "3px solid yellow";
            document.getElementById("color").placeholder = "azul";
            document.getElementsByClassName("circulo")[0].style.border = 'transparent';
            document.getElementsByClassName("circulo")[2].style.border = 'transparent';
        };
        if (contador == 3) {
            document.getElementsByClassName("circulo")[2].style.border = "3px solid yellow";
            document.getElementById("color").placeholder = "verde";
            document.getElementsByClassName("circulo")[0].style.border = 'transparent';
            document.getElementsByClassName("circulo")[1].style.border = 'transparent';
            contador = 0;
        };
        contador++;
	 }); 
    var botonDos = document.getElementById("superCri");
	botonDos.addEventListener("click", function() {
        var IngresarColor = document.getElementById("color").value;
        if (IngresarColor == "rojo"){
            document.getElementsByClassName("circulo")[0].style.border = "3px solid yellow";
            document.getElementsByClassName("circulo")[1].style.border = 'transparent';
            document.getElementsByClassName("circulo")[2].style.border = 'transparent';
        };
        if (IngresarColor == "azul"){
            document.getElementsByClassName("circulo")[0].style.border = 'transparent';
            document.getElementsByClassName("circulo")[1].style.border = "3px solid yellow";
            document.getElementsByClassName("circulo")[2].style.border = 'transparent';
        };
        if (IngresarColor == "verde"){
            document.getElementsByClassName("circulo")[0].style.border = 'transparent';
            document.getElementsByClassName("circulo")[1].style.border = 'transparent';
            document.getElementsByClassName("circulo")[2].style.border = "3px solid yellow";
        };

        });
});


