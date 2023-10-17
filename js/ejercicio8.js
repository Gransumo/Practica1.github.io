
function getTable(n){
	var array = [];
	for (let i = 1; i <= 10; i++) {
		array.push(create_node("li", n + " x " + i + " = " + n * i),);
	}
	return(array);
}

function get_tables() {
	var array = [];
	for (let i = 1; i <= 10; i++)
		array.push(create_node("div", append_nodes("ul", getTable(i))));
	var grid = append_nodes("div", array);
	grid.className = "tablas";
	return (grid);
}

document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exe8");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			desplegable = create_node("div", get_tables());
			desplegable.className = "desplegable";
			document.getElementById("ejercicio8").appendChild(desplegable);
			show_node(desplegable);
			desplegado = true;
		}else{
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
