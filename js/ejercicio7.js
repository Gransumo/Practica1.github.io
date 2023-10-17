
function bigger(n) {
	var bigger = 0;
	for (let i = 0; i < n.length; i++) {
		if (n[i] > bigger)
			bigger = n[i];
	}
	return (bigger);
}

function smallest(n) {
	var smallest = n[0];
	for (let i = 0; i < n.length; i++) {
		if (n[i] < smallest)
			smallest = n[i];
	}
	return (smallest);
}

function do_promps() {
	var n = [];
	n.push(prompt("Ingrese la primera nota: "));
	n.push(prompt("Ingrese la segunda nota: "));
	n.push(prompt("Ingrese la tercera nota: "));
	n.push(prompt("Ingrese la cuarta nota: "));

	n[0] = parseFloat(n[0]);
	n[1] = parseFloat(n[1]);
	n[2] = parseFloat(n[2]);
	n[3] = parseFloat(n[3]);
	return (n);
}

function checker(n) {
	for (let i = 0; i < n.length; i++) {
		if (isNaN(n[i]) || n[i] < 0 || n[i] > 10)
			return (false);
	}
	return (true);
}

function average(n) {
	var suma = 0;

	for (let i = 0; i < n.length; i++) {
		suma += n[i];
	}
	return ((suma / 4).toFixed(2));
}

function getResults(n) {
	var array = [];
	array.push(create_node("span", `La media de notas es ${average(n)}`));
	array.push(document.createElement("br"));
	array.push(create_node("span", `La nota mayor es ${bigger(n)}`));
	array.push(document.createElement("br"));
	array.push(create_node("span", `La nota menor es ${smallest(n)}`));
	return (array);
}

document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exe7");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			var n = do_promps();
			if (checker(n)) {
				desplegable = append_nodes("div", getResults(n));
				desplegable.className = "desplegable";
				document.getElementById("ejercicio7").appendChild(desplegable);
				show_node(desplegable);
				desplegado = true;
			}
		}else{
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
