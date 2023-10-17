
function getTable(n){
	var array = [];
	for (let i = 1; i <= 10; i++) {
		array.push(create_node("li", n + " x " + i + " = " + n * i),);
	}
	return(array);
}

document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exe5");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			var n = prompt("Dime un numero del 1-9: ");
			if (n && !isNaN(n) && n >= 1 && n <= 9) {
				n = parseInt(n);
				var tabla_container = create_node("div", create_node ("div", append_nodes("ul", getTable(n))));
				tabla_container.className = "tablas";
				desplegable = create_node("div", tabla_container);
				desplegable.className = "desplegable";
				document.getElementById("ejercicio5").appendChild(desplegable);
				show_node(desplegable);
				desplegado = true;
			}
		}
		else if (desplegado) {
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
