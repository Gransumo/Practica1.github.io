
function init() {
	var n = prompt("Dame un numero: ");
	if(n) {
		n = parseInt(n);
		alert((isNaN(n)) ? "Tipo de dato no valido" : "El doble del numero es " + (2 * n));
	}
}

function get_buttom() {
	var boton = create_node("button", "Iniciar");
	boton.className = "buttom";
	boton.id = "init_button";
	var buttom_container = create_node("div", boton);
	buttom_container.className = "buttom_container";
	return (buttom_container);
}

document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exe9");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			desplegable = create_node("div", get_buttom());
			desplegable.className = "desplegable";
			document.getElementById("ejercicio9").appendChild(desplegable);
			show_node(desplegable);
			desplegable.addEventListener("transitionend", () => {
				document.getElementById("init_button").addEventListener("click", init);
			});
			desplegado = true;
		}else{
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
