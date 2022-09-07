var	tombol = document.querySelector(".container-tombol");
var	layar = document.querySelector("#layar");
var	resetLayar = false;
var	bolehHitung = false;
var	tmpVal = ''; //*penyimpanan sementara angka yang akan dihitung
var	operator = '';



tombol.addEventListener("click", function(e){
	
	var tombolCLick = e.target;
	var nilaiTombol = tombolCLick.innerText;


	if(nilaiTombol=="C"){
		layar.value = "";

	}
	else if(nilaiTombol=="<"){
		layar.value = layar.value.slice(0, -1);

	}
	else if(nilaiTombol=="="){
		if (bolehHitung == true ) {
			layar.value = eval(tmpVal + operator + 	layar.value);
			bolehHitung = false;	
		}
	}
	else if(nilaiTombol == "."){
			layar.value = layar.value + nilaiTombol;
	}
	else if(tombolCLick.classList.contains('operator')){
		if (bolehHitung == true ) {
			layar.value = eval(tmpVal + operator + 	layar.value);
			bolehHitung = false;	
		}

		tmpVal = layar.value;
		operator = nilaiTombol;
		resetLayar = true;
	}
	else{
		if(resetLayar==true){
			layar.value = nilaiTombol;
			resetLayar = false;
			bolehHitung = true;
		}else{
			layar.value = layar.value + nilaiTombol;
		}			
	}


});
