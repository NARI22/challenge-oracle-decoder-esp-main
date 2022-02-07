function encript(){

	let input=document.getElementById("input-texto").value;

	var encript=input.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");

	document.getElementById("msg").value=encript;

	document.getElementById("text-copy").innerHTML="Mensaje Encriptado";
}


		
function desencriptar(){

	let input=document.getElementById("input-texto").value;

	var encript=input.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");

	document.getElementById("msg").value=encript;

	document.getElementById("text-copy").innerHTML="Mensaje Desencriptado";
}

//Esta función permitirá copiar con un click y continuar encriptando lo ya encriptado y viceversa

function copiar(){

	let copiar=document.getElementById("msg").value;

	document.getElementById("msg").value="";

	document.getElementById("input-texto").value=copiar;

	document.getElementById("input-texto").focus();	

}

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/