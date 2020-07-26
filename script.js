let inp = document.getElementById("input");
let outp = document.getElementById("output");
let kgb = document.getElementById("kg");
let lb = document.getElementById("pound");
let select = document.getElementById("weight");

function countryChange(){
	outp.style.display="flex";
	if(select.value == "Kg") {
		kgb.style.display="none";
		lb.style.display="flex";
	}
	else if(select.value == "Lbs"){
		lb.style.display="none";
		kgb.style.display="flex";
	}
	else{
		lb.style.display="none";
		kgb.style.display="none";
		outp.style.display="none";
	}
}

kgb.addEventListener("click", function(){
	if (inp.value < 0 || inp.value=="") {
		inp.value=" ";
		output.value=" ";
	}
	else{
		let i = inp.value ;
		outp.value = (i / 2.205).toFixed(2) + " Kg";
	}
})

lb.addEventListener("click", function(){
	if (inp.value < 0 || inp.value=="") {
		inp.value=" ";
		output.value=" ";
	}
	else{
		let i = input.value ;
		output.value = (i * 2.205).toFixed(2) + " Pound";
	}
})