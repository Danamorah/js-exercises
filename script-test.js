var arr = ["hello", "world", "in", "a", "frame"];
function arreglo(arr){
  var elemnt = "*";
  arr.join()

}
function sum(num){
	num = num.toString();
	var suma = parseInt(num[0]) + parseInt(num[1]);
	return suma;
}



function voc(str){
	var vocales = 0;
	var consonan = 0;
	debugger
	for(i = 0; i < str.length; i++){
		 if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
			vocales++;
		}
		else{
			consonan++;
		}

	}
	if( vocales > consonan ){
		return "hay m'as vocales"
	}
}

function anagram (s,t){
	var str = s;
	var str2 = t;
	var count = 0; 
	debugger
	if (str.length == str2.length){
		return true;
	}
	for(i = 0; i < str2.length ; i++){
		if(srt.includes(str2[i])){
			count++
		}
	} 
	return count;

}

function fibonacci(n,n1){
	debugger
   //var init = n + n1;
   var arr = [];
   arr.push(n,n1)
   var sum = arr[arr.length - 1] + arr[arr.length -2];
   while (sum < 1597){
   	sum = arr[arr.length - 1] + arr[arr.length -2]
   	arr.push(sum);
   } 
   
   arr.push(sum);
   return arr;


}
function rotar(num){
	var arr = [1,2,3,4,5,6]
	debugger
	var arr2 = arr.splice(0, num);
	return arr.concat(arr2);
}
function ascii(str){
	debugger
	var str = str;
	var arr = [];
	for (i = 0 ; i < str.length ; i++){
		var n = str.charCodeAt([i]);
		arr.push(n);
	}
}
function sum(){
	debugger
	var arr = [50,60,60,45,70]
	for(i = 0 ; i < arr.length - 1 ; i++){
		//var sum1 = arr[i] + arr[i+2];
		var sum2 = arr[i+1] + arr[i+3];
	}
	return sum2;
}
// ejercicio 6
function upper(str){
	debugger
	var str = str.split("");
	var res = [];
	for (i = 0 ; i < str.length - 1; i++){
		res.push(str[i] + str[i+1].toUpperCase());
	}
	return res;

}
function dup(){
	debugger
	var arr = [1,2,3,5,6,7,5];
	var count = 0 ;
	for (var i = 0 ; i < arr.length ; i ++) {
		if(arr[i] == arr[i+1]){
			count++
		}
	}
}
// repaso javascript clase 12 - 04 - 2016
// pedir nombre
function name(){
    let person = prompt("Please enter your name");
    return "your name is " + person	
}
// pedir num a user y sum

function numbers(){
    let num1 = prompt("Please enter your number 1");
    let num2 = prompt("Please enter your number 2");
    let sum = parseInt(num1) + parseInt(num2)
    console.log(sum)

}
// operacion segun user

function oper(){
    let num1 = prompt("Please enter your number 1");
    let num2 = prompt("Please enter your number 2");
    let operation = prompt("Please enter the operation");
    let result = 0 ;
    if( operation == "+"){
       result = parseInt(num1) + parseInt(num2)
    }
    else if( operation == "-"){
    	result parseInt(num1) - parseInt(num2)
    }
    else if( operation == "/"){
    	result = parseInt(num1) / parseInt(num2)
    }
    else if( operation == "*"){
    	result = parseInt(num1) * parseInt(num2)
    }
    return result;

}
// promedio

function promedio(){
	let num1 = prompt("Please enter your number 1");
    let num2 = prompt("Please enter your number 2");
    let num3 = prompt("Please enter your number 3");
    let operation = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3
    if(num1 > 10 || num1 < 0 || num2 > 10 || num2 < 0 ||  num3 > 10 || num3 < 0){
    	console.log("enter number between 0 and 10")
    	return
    }

    if (operation > 7){
    	console.log("aprobado")
    }
    else if (operation > 4 && operation < 7){
    	console.log("regular")
    }
    else if(operation < 4){
    	console.log("reprobado")
    }
    let max = 0;
    if(parseInt(num1) > parseInt(num2) && parseInt(num1) > parseInt(num3) ){
    	max = num1 ;
    	console.log("el primero es el mayor")
    }
    else if( parseInt(num2) > parseInt(num1) && parseInt(num2) > parseInt(num3)){
    	max = num2
    	console.log("el segundoes el mayor")
    }
    else if (parseInt(num3) > parseInt(num1) && parseInt(num3) > parseInt(num2)){
        max = num3
        console.log("el tercero es el mayor")
    }

}
// de numeros a letras

let num1 = prompt("Please enter your number");
if(num1 == "1"){
	console.log("uno")
}
else if(num1 == "2"){
	console.log("dos")
}
else if(num1 == "3"){
	console.log("tres")
}
else if(num1 == "4"){
	console.log("cuatro")
}
else if(num1 == "5"){
	console.log("cinco")
}
else if(num1 == "6"){
	console.log("seis")
}
else if(num1 == "7"){
	console.log("siete")
}
else if(num1 == "8"){
	console.log("ocho")
}
else if(num1 == "9"){
	console.log("nueve")
}
//
function prom(n1,n2,n3){
	let promedio = (n1 + n2 + n3) / 3
	console.log("su promedio es " + promedio)

}
// ecmascript arrow function
const prom = (n1,n2,n3) =>{
	let promedio = (n1 + n2 + n3) / 3
	if( promedio >= 7){
       console.log("su promedio es " + promedio + " pasaste")
	}
	else if( promedio < 7 && promedio > 4 ){
       console.log("su promedio es " + promedio + " pasaste arrastrando")
	}
	else if(promedio < 4){
		console.log("su promedio es " + promedio + " reprobaste")
	} 
}

const grade = () =>{
	let names = ""
	while( name != "x"){
		let name = prompt("Please enter the name");
		console.log(name + Math.random())

	}
}

// ejercicio robot//
var Robot = {
	posicion_x : 0,
	posicion_y : 0,
	avanzar : function(){
		posicion_y += 1;
	},
	ir_izquierda : function(){
		posicion_x -= 1;
	},
	ir_derecha : function(){
		posicion_x += 1;
	},
	retroceder : function(){
		posicion_y -= 1;
	},
	corrent_pos : function(){
		console.log( posicion_x + " | " posicion_y)
	}  
}
// clase robot es6

class Robot {
	constructor ()
  {
  	this.posicion_x = 0;
    this.posicion_y = 0;
  }
  
  avanzar()
  {
  	this.posicion_y += 1;
  }
  retroceder()
  {
  	this.posicion_y -= 1;
  }
  derecha()
  {
 		this.posicion_x += 1;
  }
  izquierda()
  {
 		this.posicion_x -= 1;
  }
  
  mostrar_posicion()
  {
  	console.log(this.posicion_x + " | " + this.posicion_y);
  }
}


//arreglo 10 x 10 tablero
const tablero = [
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10],
[1,2,3,4,5,6,7,8,9,10]
]

	function crearTablero(){
		let pos = 0;
		for(let i = 0 ; i < tablero.length ; i++){
			for(let j = 0 ; j < tablero[i].length; j++){
				let div = document.createElement("div");
				div.classList.add("tablero");
				pos++
				div.setAttribute("id",pos);
				let container = document.getElementById("tablero-container");
				container.appendChild(div);

			}
		}
	}

function move(){
 let r = new Robot();
r.mostrar_posicion();

for (let i = 0; i < 5; i++)
{
	debugger
	r.avanzar();
	let init = 0;
	// if( r.posicion_x == 1 && r.posicion_y == 2){
 //    	init = document.getElementById("11");
 //    	init.classList.add("robot")
 //    }
 //    else if (r.posicion_x == 2 && r.posicion_y == 2){
 //        init = document.getElementById("12");
 //    	init.classList.add("robot")
 //    }
 //    else if(r.posicion_x == 2 && r.posicion_y == 3){
 //        init = document.getElementById("22");
 //    	init.classList.add("robot")
 //    }
	r.derecha();
	// init = document.getElementById("1");
	init = document.getElementById("1"+r.posicion_x+r.posicion_y)
	init.classList.add("robot")
    
}

r.mostrar_posicion();
}




















