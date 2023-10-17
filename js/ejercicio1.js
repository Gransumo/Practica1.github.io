
document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exe1");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			desplegable = create_node("div", create_node("h2" , "HOLA MUNDO¡!!!"));
			desplegable.className = "desplegable";
			document.getElementById("ejercicio1").appendChild(desplegable);
			show_node(desplegable);
			desplegado = true;
		}else{
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
