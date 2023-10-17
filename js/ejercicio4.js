
document.addEventListener("DOMContentLoaded", () => {
	var buttom = document.getElementById("exe4");
	buttom.addEventListener("click", () => {
		var n = prompt("Dame un numero: ");
		if(n) {
			n = parseInt(n);
			alert((isNaN(n)) ? "Tipo de dato no valido" : "El triple del numero es " + (3 * n));
		}
	});
})
