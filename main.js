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
            document.getElementById("color").value = "rojo";
            document.getElementsByClassName("circulo")[1].style.border = 'transparent';
            document.getElementsByClassName("circulo")[2].style.border = 'transparent';
        };
        if (contador == 2) {
            document.getElementsByClassName("circulo")[1].style.border = "3px solid yellow";
            document.getElementById("color").value = "azul";
            document.getElementsByClassName("circulo")[0].style.border = 'transparent';
            document.getElementsByClassName("circulo")[2].style.border = 'transparent';
        };
        if (contador == 3) {
            document.getElementsByClassName("circulo")[2].style.border = "3px solid yellow";
            document.getElementById("color").value = "verde";
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