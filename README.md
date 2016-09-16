*****
#JUGANDO CRI:

Para empezar a desarrolar este trabajo, se tiene que tener en cuenta:

1- Existiran tres circulos con fondo de color distintos.

2- Habra un input, un boton que diga "Cri" y otro que diga "Super Cri".

3- Al ppresionar sobre "cri" en el primer circulo tendrá un borde del color que desees, si vuelvo a presionar "cri" se borrará el borde        del primer circulo y ahora aparecerá en el segundo.

4- Este poceso seguira siendo el mismo.

5- Si es el usuario quien quiere elegir en que circulo aparecerá el borde, solo debe escribir en el input y presionar sobre "super cri".


Se debe ver asi:

 ![super cri](http://i65.tinypic.com/2cdwsb6.png)
 
 
   
	 
####LA GRAN PREGUNTA ES COMO DEBEMOS HACERLO:

+ Se empezará en el HTML, creando tres div con un id y un class cada uno:
 	```HTML
 	<div class="circulo" id="uno"></div>
	```
+ Luego se le dará algunos estilos como el color de fondo y el tamaño,etc.
+ En el documento javascript empzaremos creando un evento. 
+ Luego crearemos *var boton* y otra llamada *var contador* que lo iniciaremos en 1.
+ A *bonton* le daremos un evento de "click", y dentro de este evento empezaremos a crear eventos la condicion será 
	``` javascript  
	if (contador == 1){}
	```
+ En este se dará borde al primer circulo.
+ Se repitirá el proceso de acuerdo al circulo, pero cuando llegue a la tercera condicion (tercer circulo),
	se colocará que el contador en cero.
+ Y antes de cerrar est evento sec colocara "contador++" para que el contador avanze, y sigua cumpliendo las condiciones.
+ Para "super cri" es un proceso similar, se creara otro envento "click", donde el usuario escogera en que circulo aparezca el borde.
+ Para estta oportunidad ya no se utilizará el contador.

#####tiene que quedar asi (super cri):

![super cri](http://i68.tinypic.com/nd0c39.png)


****

