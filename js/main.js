/*Preloader*/
window.onload = function(){

};
/*Inicio de script*/
$(document).ready(function(){
	/*Eventos*/
	/*Modal*/
	$('#btn-ver-m').click(function(){
		$('.noidal').show('fade');
	});
	$('#btn-mod-c').click(function(){
		$('.noidal').hide('fade');
	});
	/*Autocompletado de la parte de los particpantes*/
	/*Categoria Con peso*/
	$('#peso').keyup(function(){
		$medidapeso = $('#peso').val();
		$sexo = $('#sex').val();
		$edad = $('#edad').val();
		if($sexo == 'Hombre'){
			$sel1= 'man';
		}else{
			$sel1 = 'won';
		};
		/*Controlar la lista de los valores de Categoria en base a edad*/
		if($sel1 == 'won' && $edad <= 16){
			if($medidapeso <= 17){$('#categoria').val('Catarina');};
			if($medidapeso >= 17.1 && $medidapeso <= 20){$('#categoria').val('Luciernaga');};
			if($medidapeso >= 20.1 && $medidapeso <= 23){$('#categoria').val('Abeja');};
			if($medidapeso >= 23.1 && $medidapeso <= 26){$('#categoria').val('Avispa');};
			if($medidapeso >= 26.1 && $medidapeso <= 29){$('#categoria').val('Mariposa');};
			if($medidapeso >= 29.1 && $medidapeso <= 33){$('#categoria').val('Libelula');};
			if($medidapeso >= 33.1 && $medidapeso <= 37){$('#categoria').val('Golondrina');};
			if($medidapeso >= 37.1 && $medidapeso <= 41){$('#categoria').val('Paloma');};
			if($medidapeso >= 41.1 && $medidapeso <= 45){$('#categoria').val('Gaviota');};
			if($medidapeso > 45){$('#categoria').val('Aguila');};
		}else{
			if($sel1 == 'man' && $edad <= 16){
				if($medidapeso <= 17){$('#categoria').val('Buho');};
				if($medidapeso >= 17.1 && $medidapeso <= 19){$('#categoria').val('Gallo');};
				if($medidapeso >= 19.1 && $medidapeso <= 21){$('#categoria').val('Alcon');};
				if($medidapeso >= 21.1 && $medidapeso <= 24){$('#categoria').val('Condor');};
				if($medidapeso >= 24.1 && $medidapeso <= 27){$('#categoria').val('Gato Montesco');};
				if($medidapeso >= 27.1 && $medidapeso <= 30){$('#categoria').val('Ocelote');};
				if($medidapeso >= 30.1 && $medidapeso <= 33){$('#categoria').val('Lince');};
				if($medidapeso >= 33.1 && $medidapeso <= 36){$('#categoria').val('Leopardo');};
				if($medidapeso >= 36.1 && $medidapeso <= 39){$('#categoria').val('Puma');};
				if($medidapeso >= 39.1 && $medidapeso <= 42){$('#categoria').val('Pantera');};
				if($medidapeso >= 42.1 && $medidapeso <= 46){$('#categoria').val('Jaguar');};
				if($medidapeso >= 46.1 && $medidapeso <= 50){$('#categoria').val('Chita');};
				if($medidapeso >= 50.1 && $medidapeso <= 54){$('#categoria').val('Tigre');};
				if($medidapeso > 54){$('#categoria').val('Leon');};
			}
		};
		/*Controlar en base a la edad*/
		if($sel1 == 'won' && $edad > 16){
			if($medidapeso <= 46){$('#categoria').val('Finn');};
			if($medidapeso >= 46.1 && $medidapeso <= 50){$('#categoria').val('Fly');};
			if($medidapeso >= 50.1 && $medidapeso <= 53){$('#categoria').val('Bantham');};
			if($medidapeso >= 53.1 && $medidapeso <= 57){$('#categoria').val('Feather');};
			if($medidapeso >= 57.1 && $medidapeso <= 62){$('#categoria').val('Light');};
			if($medidapeso >= 62.1 && $medidapeso <= 67){$('#categoria').val('Welter');};
			if($medidapeso >= 67.1 && $medidapeso <= 73){$('#categoria').val('Middle');};
			if($medidapeso > 73){$('#categoria').val('Heavy');};
		}else{
			if($sel1 == 'man' && $edad > 16){
				if($medidapeso <= 54){$('#categoria').val('Finn');};
				if($medidapeso >= 54.1 && $medidapeso <= 58){$('#categoria').val('Fly');};
				if($medidapeso >= 58.1 && $medidapeso <= 63){$('#categoria').val('Bantham');};
				if($medidapeso >= 63.1 && $medidapeso <= 68){$('#categoria').val('Feather');};
				if($medidapeso >= 68.1 && $medidapeso <= 74){$('#categoria').val('Light');};
				if($medidapeso >= 74.1 && $medidapeso <= 80){$('#categoria').val('Welter');};
				if($medidapeso >= 80.1 && $medidapeso <= 87){$('#categoria').val('Middle');};
				if($medidapeso > 87){$('#categoria').val('Heavy');};
			}
		};
		
	});
	/*Categoria Con edad*/
	$('#edad').keyup(function(){
		$medidapeso = $('#peso').val();
		$sexo = $('#sex').val();
		$edad = $('#edad').val();
		if($sexo == 'Hombre'){
			$sel1= 'man';
		}else{
			$sel1 = 'won';
		};
		/*Control de edades*/
		if($edad >= 4 && $edad <= 6){$('#nivel').val('Prescolar');};
		if($edad >= 7 && $edad <= 13){$('#nivel').val('Niño');};
		if($edad >= 14 && $edad <= 16){$('#nivel').val('Cadete');};
		if($edad >= 17 && $edad <= 18){$('#nivel').val('Juvenil');};
		if($edad >= 19 && $edad <= 29){$('#nivel').val('Adulto');};
		if($edad >= 30 && $edad <= 39){$('#nivel').val('Master');};
		if($edad >= 40){$('#nivel').val('Submaster');};
		/*Controlar la lista de los valores de Categoria en base a edad*/
		if($sel1 == 'won' && $edad <= 16){
			if($medidapeso <= 17){$('#categoria').val('Catarina');};
			if($medidapeso >= 17.1 && $medidapeso <= 20){$('#categoria').val('Luciernaga'); };
			if($medidapeso >= 20.1 && $medidapeso <= 23){$('#categoria').val('Abeja');};
			if($medidapeso >= 23.1 && $medidapeso <= 26){$('#categoria').val('Avispa');};
			if($medidapeso >= 26.1 && $medidapeso <= 29){$('#categoria').val('Mariposa');};
			if($medidapeso >= 29.1 && $medidapeso <= 33){$('#categoria').val('Libelula');};
			if($medidapeso >= 33.1 && $medidapeso <= 37){$('#categoria').val('Golondrina');};
			if($medidapeso >= 37.1 && $medidapeso <= 41){$('#categoria').val('Paloma');};
			if($medidapeso >= 41.1 && $medidapeso <= 45){$('#categoria').val('Gaviota');};
			if($medidapeso > 45){$('#categoria').val('Aguila');};
		}else{
			if($sel1 == 'man' && $edad <= 16){
				if($medidapeso <= 17){$('#categoria').val('Buho');};
				if($medidapeso >= 17.1 && $medidapeso <= 19){$('#categoria').val('Gallo');};
				if($medidapeso >= 19.1 && $medidapeso <= 21){$('#categoria').val('Alcon');};
				if($medidapeso >= 21.1 && $medidapeso <= 24){$('#categoria').val('Condor');};
				if($medidapeso >= 24.1 && $medidapeso <= 27){$('#categoria').val('Gato Montesco');};
				if($medidapeso >= 27.1 && $medidapeso <= 30){$('#categoria').val('Ocelote');};
				if($medidapeso >= 30.1 && $medidapeso <= 33){$('#categoria').val('Lince');};
				if($medidapeso >= 33.1 && $medidapeso <= 36){$('#categoria').val('Leopardo');};
				if($medidapeso >= 36.1 && $medidapeso <= 39){$('#categoria').val('Puma');};
				if($medidapeso >= 39.1 && $medidapeso <= 42){$('#categoria').val('Pantera');};
				if($medidapeso >= 42.1 && $medidapeso <= 46){$('#categoria').val('Jaguar');};
				if($medidapeso >= 46.1 && $medidapeso <= 50){$('#categoria').val('Chita');};
				if($medidapeso >= 50.1 && $medidapeso <= 54){$('#categoria').val('Tigre');};
				if($medidapeso > 54){$('#categoria').val('Leon');};
			}
		};
		/*Controlar en base a la edad*/
		if($sel1 == 'won' && $edad > 16){
			if($medidapeso <= 46){$('#categoria').val('Finn');};
			if($medidapeso >= 46.1 && $medidapeso <= 50){$('#categoria').val('Fly');};
			if($medidapeso >= 50.1 && $medidapeso <= 53){$('#categoria').val('Bantham');};
			if($medidapeso >= 53.1 && $medidapeso <= 57){$('#categoria').val('Feather');};
			if($medidapeso >= 57.1 && $medidapeso <= 62){$('#categoria').val('Light');};
			if($medidapeso >= 62.1 && $medidapeso <= 67){$('#categoria').val('Welter');};
			if($medidapeso >= 67.1 && $medidapeso <= 73){$('#categoria').val('Middle');};
			if($medidapeso > 73){$('#categoria').val('Heavy');};
		}else{
			if($sel1 == 'man' && $edad > 16){
				if($medidapeso <= 54){$('#categoria').val('Finn');};
				if($medidapeso >= 54.1 && $medidapeso <= 58){$('#categoria').val('Fly');};
				if($medidapeso >= 58.1 && $medidapeso <= 63){$('#categoria').val('Bantham');};
				if($medidapeso >= 63.1 && $medidapeso <= 68){$('#categoria').val('Feather');};
				if($medidapeso >= 68.1 && $medidapeso <= 74){$('#categoria').val('Light');};
				if($medidapeso >= 74.1 && $medidapeso <= 80){$('#categoria').val('Welter');};
				if($medidapeso >= 80.1 && $medidapeso <= 87){$('#categoria').val('Middle');};
				if($medidapeso > 87){$('#categoria').val('Heavy');};
			}
		};
		
	});
	/*Categoria Con sexo*/
	$('#sex').click(function(){
		$medidapeso = $('#peso').val();
		$sexo = $('#sex').val();
		$edad = $('#edad').val();
		if($sexo == 'Hombre'){
			$sel1= 'man';
		}else{
			$sel1 = 'won';
		};
		/*Controlar la lista de los valores de Categoria en base a edad*/
		if($sel1 == 'won' && $edad <= 16){
			if($medidapeso <= 17){$('#categoria').val('Catarina');};
			if($medidapeso >= 17.1 && $medidapeso <= 20){$('#categoria').val('Luciernaga');};
			if($medidapeso >= 20.1 && $medidapeso <= 23){$('#categoria').val('Abeja');};
			if($medidapeso >= 23.1 && $medidapeso <= 26){$('#categoria').val('Avispa');};
			if($medidapeso >= 26.1 && $medidapeso <= 29){$('#categoria').val('Mariposa');};
			if($medidapeso >= 29.1 && $medidapeso <= 33){$('#categoria').val('Libelula');};
			if($medidapeso >= 33.1 && $medidapeso <= 37){$('#categoria').val('Golondrina');};
			if($medidapeso >= 37.1 && $medidapeso <= 41){$('#categoria').val('Paloma');};
			if($medidapeso >= 41.1 && $medidapeso <= 45){$('#categoria').val('Gaviota');};
			if($medidapeso > 45){$('#categoria').val('Aguila');};
		}else{
			if($sel1 == 'man' && $edad <= 16){
				if($medidapeso <= 17){$('#categoria').val('Buho');};
				if($medidapeso >= 17.1 && $medidapeso <= 19){$('#categoria').val('Gallo');};
				if($medidapeso >= 19.1 && $medidapeso <= 21){$('#categoria').val('Alcon');};
				if($medidapeso >= 21.1 && $medidapeso <= 24){$('#categoria').val('Condor');};
				if($medidapeso >= 24.1 && $medidapeso <= 27){$('#categoria').val('Gato Montesco');};
				if($medidapeso >= 27.1 && $medidapeso <= 30){$('#categoria').val('Ocelote');};
				if($medidapeso >= 30.1 && $medidapeso <= 33){$('#categoria').val('Lince');};
				if($medidapeso >= 33.1 && $medidapeso <= 36){$('#categoria').val('Leopardo');};
				if($medidapeso >= 36.1 && $medidapeso <= 39){$('#categoria').val('Puma');};
				if($medidapeso >= 39.1 && $medidapeso <= 42){$('#categoria').val('Pantera');};
				if($medidapeso >= 42.1 && $medidapeso <= 46){$('#categoria').val('Jaguar');};
				if($medidapeso >= 46.1 && $medidapeso <= 50){$('#categoria').val('Chita');};
				if($medidapeso >= 50.1 && $medidapeso <= 54){$('#categoria').val('Tigre');};
				if($medidapeso > 54){$('#categoria').val('Leon');};
			}
		};
		/*Controlar en base a la edad*/
		if($sel1 == 'won' && $edad > 16){
			if($medidapeso <= 46){$('#categoria').val('Finn');};
			if($medidapeso >= 46.1 && $medidapeso <= 50){$('#categoria').val('Fly');};
			if($medidapeso >= 50.1 && $medidapeso <= 53){$('#categoria').val('Bantham');};
			if($medidapeso >= 53.1 && $medidapeso <= 57){$('#categoria').val('Feather');};
			if($medidapeso >= 57.1 && $medidapeso <= 62){$('#categoria').val('Light');};
			if($medidapeso >= 62.1 && $medidapeso <= 67){$('#categoria').val('Welter');};
			if($medidapeso >= 67.1 && $medidapeso <= 73){$('#categoria').val('Middle');};
			if($medidapeso > 73){$('#categoria').val('Heavy');};
		}else{
			if($sel1 == 'man' && $edad > 16){
				if($medidapeso <= 54){$('#categoria').val('Finn');};
				if($medidapeso >= 54.1 && $medidapeso <= 58){$('#categoria').val('Fly');};
				if($medidapeso >= 58.1 && $medidapeso <= 63){$('#categoria').val('Bantham');};
				if($medidapeso >= 63.1 && $medidapeso <= 68){$('#categoria').val('Feather');};
				if($medidapeso >= 68.1 && $medidapeso <= 74){$('#categoria').val('Light');};
				if($medidapeso >= 74.1 && $medidapeso <= 80){$('#categoria').val('Welter');};
				if($medidapeso >= 80.1 && $medidapeso <= 87){$('#categoria').val('Middle');};
				if($medidapeso > 87){$('#categoria').val('Heavy');};
			}
		};
		
	});
	/*Graficas*/
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});