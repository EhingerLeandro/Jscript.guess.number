
let letrero = document.querySelector(".letrero");
const start = document.getElementById("but-start");
const mayor = document.getElementById("but-mayor");
const menor = document.getElementById("but-menor");
const buttonSi = document.querySelector('#but-si');
const buttonNo = document.querySelector('#but-no');
const buttonOk = document.querySelector('#but-ok');

let arr=[];
let guessedNumber;
let lastDigit;

buttonSi.style.display = "none";
buttonNo.style.display = "none";
mayor.style.display = "none";
menor.style.display = "none";
buttonOk.style.display = "none";

function beginAgain(){
	arr.length = 0;
	for(i=0; i<=100; i++){
		arr.push(i);
	} 
}

function guessNum(){
	lastDigit= arr.length;
	guessedNumber = Math.floor(Math.random() * (arr[lastDigit-1] -arr[0]) ) +arr[0];
}

function buttonsAskYesNo() {

}

start.addEventListener("click", e=>{
		beginAgain();
		guessNum();
		letrero.innerHTML= "Tu número es: "+ guessedNumber +" ?";
		start.style.display = "none";
		buttonSi.style.display = "block";
		buttonNo.style.display = "block";
		
    });

buttonSi.addEventListener("click", e=>{
		letrero.innerHTML= `Que bien encontramos tu número <b style="color: red;"> ${guessedNumber}</b>. Si quieres comenzar de nuevo oprime <b>Ok</b>.`;
		buttonSi.style.display = "none";
		buttonNo.style.display = "none";
		buttonOk.style.display = "block";
	})

buttonNo.addEventListener("click", e=>{
		letrero.textContent = "Tu número es mayor o menor?";
		menor.style.display = "block";
		mayor.style.display = "block";
		buttonSi.style.display = "none";
		buttonNo.style.display = "none";
})

function logicBroken(){
	if(!guessedNumber & guessedNumber != 0){
		letrero.innerHTML= `<span style="color: darkblue ;">!Atención! Elegiste una opción que rompe la lógica del juego.<br></span> Oprime <b> Ok </b> para Reiniciar.`;
		buttonOk.style.display = "block";
		menor.style.display = "none";
		mayor.style.display = "none";
	}else{
		menor.style.display = "none";
		mayor.style.display = "none";
		buttonSi.style.display = "block";
		buttonNo.style.display = "block";
		letrero.innerHTML= "Tu número es: "+ guessedNumber +" ?";
	}
}

function onlyNumberLeft(){
	letrero.innerHTML= `Tu número debe ser <b style="color:red;"> ${guessedNumber} </b> porque es el único número que queda por descarte. Oprime <b> Ok </b> para reiniciar.`;
	buttonOk.style.display = "block";
	menor.style.display = "none";
	mayor.style.display = "none";
}

mayor.addEventListener("click", e=>{
	arr.splice(0, guessedNumber+1 - arr[0]);
	guessNum();
	console.log(arr);
	if(arr.length ==1){
		onlyNumberLeft();
	}else{
		logicBroken();
	}
})

menor.addEventListener("click", e=>{
	arr.splice(arr.indexOf(guessedNumber), arr.length - arr.indexOf(guessedNumber));
	guessNum();
	console.log(arr);
	if(arr.length ==1){
		onlyNumberLeft();
	}else{
		logicBroken();
	}
})

buttonOk.addEventListener("click", e=>{
	letrero.innerHTML = `Escoge un número mentalmente <b>entre 0 y 100</b>, cuando ya lo termines de elegir oprime Start.`
	buttonOk.style.display = "none";
	start.style.display = "block";
})



