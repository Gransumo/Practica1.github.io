
function get_colors() {
	var parrafo = create_node("p", "En un lugar de la mancha");
	var botones = [];
	botones.push(create_node("button", "Azul"));
	botones.push(create_node("button", "Verde"));
	botones.push(create_node("button", "Rojo"));

	for (let i = 0; i < botones.length; i++) {
		botones[i].className = "buttom"
		botones[i].addEventListener("click", () => {
			switch (i) {
				case 0:
					parrafo.style.color = "blue";
					break;
				case 1:
					parrafo.style.color = "green";
					break;
				case 2:
					parrafo.style.color = "red";
					break;
				default:
					break;
			}
		});
	}
	var buttom_container = append_nodes("div", botones);
	buttom_container.className = "buttom_container";
	return (append_nodes("div", [parrafo, buttom_container]));
}

document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exeC");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			desplegable = create_node("div", get_colors());
			desplegable.className = "desplegable";
			document.getElementById("ejercicioC").appendChild(desplegable);
			show_node(desplegable);
			desplegado = true;
		}else{
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
