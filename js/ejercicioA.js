
function get_content() {
	var n = prompt("Dime un mes (1-12): ");
	n = parseInt(n);
	var meses_dias = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if(n && !isNaN(n) && n >= 1 && n <= 12)
		return (create_node("span", `${meses_dias[n]}`));
}

document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exeA");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			desplegable = create_node("div", get_content());
			desplegable.className = "desplegable";
			document.getElementById("ejercicioA").appendChild(desplegable);
			show_node(desplegable);
			desplegado = true;
		}else{
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
