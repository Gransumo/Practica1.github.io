/**
 * Se crea un nodo del tipo type con document.createElement(type).
 * Posteriormente se integra el contenido dentro del nodo usando appendChild()
 * El contenido puede ser otro nodo o un String.
 * 
 * @param {*} type Tipo de nodo que se desea crear
 * @param {*} content Contenido que se quiera poner dentro del nodo (puede ser otro nodo)
 * @returns 
 */
function create_node(type, content) {
	if (!type || !content)
		return (null);
	var node = document.createElement(type);
	if (typeof content === "string"){
		var text = document.createTextNode(content);
		node.appendChild(text);
		return(node);
	} else if (content instanceof Node){
		node.appendChild(content);
		return (node);
	}
	return (null);
}

/**
 * Esta funcion crea un nodo del tipo deseado y le integra como nodos
 * hijos los nodos que vengan en el array "nodes";
 * @param {*} type Tipo de nodo que se quiere recibir
 * @param {*} nodes Array de nodos que se quieren añadir como hijos
 * @returns Nodo de "type" con los nodos de "nodes" como hijos
 */
function append_nodes(type, nodes) {
	if (!Array.isArray(nodes))
		return (null);
	var node = document.createElement(type);
	for (let i = 0; i < nodes.length; i++) {
		if (!(nodes[i] instanceof Node))
			return (null);
		node.appendChild(nodes[i]);
	}
	return (node);
}

function get_nNodes(type, n) {
	if (!type || n == 0)
		return (null);
	var nodes = [];
	for (let i = 0; i < n; i++) {
		nodes.push(document.createElement("img"));
	}
	return (nodes);
}

function is_repeat(array, value) {
	if (array.length === 0)
		return (false);
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value)
			return(true);
	}
	return (false);
}

function fisher_yates(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return (array);
}

function show_node(node){
	requestAnimationFrame(() => {
		node.style.maxHeight = node.scrollHeight + "px";
	});
}

function hide_node(node) {
	requestAnimationFrame(() => {
		node.style.maxHeight = "0";
		node.addEventListener("transitionend", () => {
			node.parentNode.removeChild(node);
		});
	});
}
