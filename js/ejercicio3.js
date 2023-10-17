
document.addEventListener("DOMContentLoaded", () => {
	var buttom = document.getElementById("exe3");
	buttom.addEventListener("click", () => {
		var edad = parseInt(prompt("Dime tu edad:"));
		alert( (isNaN(edad) == true) ? "Tipo de dato no valido" :
		 ((edad < 0 || edad > 100) ? "Introduzca una edad valida" :
		  ((edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad")));
	});
})
