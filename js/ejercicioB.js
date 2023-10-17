
function exe(i) {
	var n1 = prompt("Ingrese el primer numero: ");
	var n2 = prompt("Ingrese el segundo numero: ");

	n1 = parseFloat(n1);
	n2 = parseFloat(n2);
	if (!isNaN(n1) && !isNaN(n2)) {
		switch (i) {
			case 0:
				alert(n1 + n2);
				break;
			case 1:
				alert(n1 - n2);
				break;
			case 2:
				alert(n1 * n2);
				break;
			case 3:
				alert(Math.pow(n1, n2));
				break;
			default:
				break;
		}
	}
}

function get_buttoms() {
	var botones = [];
	botones.push(create_node("button", "Sumar"));
	botones.push(create_node("button", "Restar"));
	botones.push(create_node("button", "Multiplicar"));
	botones.push(create_node("button", "Potencia"));

	for (let i = 0; i < botones.length; i++) {
		botones[i].className = "buttom"
		botones[i].addEventListener("click", () => {exe(i);});
	}
	var buttom_container = append_nodes("div", botones);
	buttom_container.className = "buttom_container";
	return (buttom_container);
}

document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exeB");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			desplegable = create_node("div", get_buttoms());
			desplegable.className = "desplegable";
			document.getElementById("ejercicioB").appendChild(desplegable);
			show_node(desplegable);
			desplegado = true;
		}else{
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
