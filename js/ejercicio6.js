
document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exe6");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			var n1 = prompt("Ingrese el primer numero: ");
			var n2 = prompt("Ingrese el segundo numero: ");

			n1 = parseFloat(n1);
			n2 = parseFloat(n2);
			if (!isNaN(n1) && !isNaN(n2)) {
				desplegable = create_node("div", create_node("span" , 
				(n1 == n2) ? "Los numeros son iguales" : ((n1 > n2) ? n1 + " es mayor." : n2 + " es mayor")));
				desplegable.className = "desplegable";
				document.getElementById("ejercicio6").appendChild(desplegable);
				show_node(desplegable);
				desplegado = true;
			}
		}else{
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
