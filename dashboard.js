//list of objects
	//app.getObject('QV11','R');
	//app.getObject('QV10','sjjGu'); button
	//app.getObject('QV09','sHbKzaJ');
	//app.getObject('QV08','hKrxWa'); kpi
	//app.getObject('QV07','PzLXTW'); kpi
	//app.getObject('QV06','vmjEe');
	//app.getObject('QV05','GDaKyD');
	//app.getObject('QV03','GDaKyD');
	//app.getObject('QV04','pkAupnv');
	//app.getObject('QV02','UeVHJvD');
	//app.getObject('QV01','SZMFY'); map

// JavaScript
//create peace of codes in html
var charging = '<div id="charging" class="col-sm-12">'+
		'<img style="width:25%; margin: 30vh auto; display: block;" src="https://www.intersoftware.org.co/sites/default/files/logos_marcas_internas/logos-21.png">'+
		'<div id="contenedor">'+
            '<div class="loader" id="loader">Loading...</div>'+
 		'</div>'+
	'</div>';

var dashboard0 = '<div style="padding:15%; height: 100vh;" id="dash1">'+
				'</div>'+
				'<div class="centerTextPanel">'+
				'<h2 style="width:80%; padding-left:10%; font:30px bold Segoe UI;">PROTOCOLOS Y REGULACIÓN DE INVIMA</h2>'+
				'<h6 style="font:25px normal Segoe UI; padding-left:10%">Las normas científicas, técnicas y administrativas para la investigación en salud están reguladas por la resolución 8430 de 1993, el siguiente programa espera ser una ayuda en las elecciones que como empresa lleven a la mejor eficiencia en el desarrollo de sus protocolos.</h6>'+
				'</div>';
				
var dashboard1 = ' <h1 style="position: absolute; top: 50px; z-index: 1; text-align: center; width: 100%;">TIEMPO EMPLEADO POR CIUDAD</h1>'+
'<div style="position: absolute;top: 90px;z-index: 1; text-align: center; width: 100%;">Tiempo promedio en el que una institución se demora en completar el protocolo</div>'+
'<div style="position: absolute;top: 25vh;z-index: 1;margin: 0px 60px;font-weight: 780;color: grey;">Promedio duración total de protocolos en días</div>'+
'<div style="position: absolute; top: 25vh; z-index: 1; right: 50px; margin: 0px 130px 0px 0px;font-weight: 780;color: grey;">Numero de instituciones</div>';

var dashboard2 ='<h1 style="position: absolute; top: 50px; z-index: 1; text-align: center; width: 100%;">TIEMPO EMPLEADO POR INSTITUCIÓN</h1>';
		
var dashboard3 ='<h1 style="position: absolute; top: 50px; z-index: 1; text-align: center; width: 100%;">INSTITUCIONES CON MEJOR PUNTUACIÓN</h1>';

document.getElementById("charging").innerHTML = charging;
setTimeout(() => {  
	document.getElementById("charging").style.display = "none";
	document.getElementById("controlPanel").style.display = "block";
	document.getElementById("panel").className = "col-sm-3 collapse1 show";
	var selectElement = document.getElementById('sel1');
	document.getElementById("dashboard").innerHTML = dashboard0;

	selectElement.addEventListener('change', (event) => {
	if(selectElement.selectedIndex==0){
		document.getElementById("dashboard").innerHTML = dashboard0;
		document.getElementById("qlik").style.display="none";
		document.getElementById("qlik1").style.display="none";
		document.getElementById("qlik2").style.display="none";
		document.getElementById("qlik3").style.display="none";
		document.getElementById("qlik4").style.display="none";
		document.getElementById("qlik5").style.display="none";
	}
	if(selectElement.selectedIndex==1){
		document.getElementById("dashboard").innerHTML = dashboard1;
		document.getElementById("qlik").style.display="block";
		document.getElementById("qlik1").style.display="none";
		document.getElementById("qlik2").style.display="none";
		document.getElementById("qlik3").style.display="none";
		document.getElementById("qlik4").style.display="none";
		document.getElementById("qlik5").style.display="none";
	}
	if(selectElement.selectedIndex==2){
		document.getElementById("dashboard").innerHTML = dashboard2;
		document.getElementById("qlik").style.display="none";
		document.getElementById("qlik1").style.display="block";
		document.getElementById("qlik2").style.display="none";
		document.getElementById("qlik3").style.display="none";
		document.getElementById("qlik4").style.display="none";
		document.getElementById("qlik5").style.display="none";
	}
	if(selectElement.selectedIndex==3){
		document.getElementById("dashboard").innerHTML = dashboard3;
		document.getElementById("qlik").style.display="none";
		document.getElementById("qlik1").style.display="none";
		document.getElementById("qlik2").style.display="block";
		document.getElementById("qlik3").style.display="none";
		document.getElementById("qlik4").style.display="none";
		document.getElementById("qlik5").style.display="none";
	}
	if(selectElement.selectedIndex==4){
		document.getElementById("dashboard").innerHTML = dashboard3;
		document.getElementById("qlik").style.display="none";
		document.getElementById("qlik1").style.display="none";
		document.getElementById("qlik2").style.display="none";
		document.getElementById("qlik3").style.display="block";
		document.getElementById("qlik4").style.display="none";
		document.getElementById("qlik5").style.display="none";
	}
	if(selectElement.selectedIndex==5){
		document.getElementById("dashboard").innerHTML = dashboard3;
		document.getElementById("qlik").style.display="none";
		document.getElementById("qlik1").style.display="none";
		document.getElementById("qlik2").style.display="none";
		document.getElementById("qlik3").style.display="none";
		document.getElementById("qlik4").style.display="block";
		document.getElementById("qlik5").style.display="none";
	}
	if(selectElement.selectedIndex==6){
		document.getElementById("dashboard").innerHTML = "";
		document.getElementById("qlik").style.display="none";
		document.getElementById("qlik1").style.display="none";
		document.getElementById("qlik2").style.display="none";
		document.getElementById("qlik3").style.display="none";
		document.getElementById("qlik4").style.display="none";
		document.getElementById("qlik5").style.display="block";
	}
});
}, 1000);
var inicio = 0;
document.getElementById("btnCollapse").addEventListener('click', (event) => {

	
	if(inicio==0){
		document.getElementById("arrow").className = "left";
		document.getElementById("panel").className = "collapsing";
		setTimeout(() => { 
			document.getElementById("panel").className = "col-sm-3 collapse1";
			document.getElementById("dashboard").className = "col-sm-12";
			document.getElementById("btnCollapse").style.right = "2vw";
			for(var i=0; i < document.getElementsByTagName("iframe").length; i++){
				document.getElementsByTagName("iframe")[i].style.width = "97%"
		}
		}, 0.45);
		inicio = 1;
	}
	else{
		document.getElementById("arrow").className = "right";
		inicio = 0;
		document.getElementById("panel").className = "collapsing";
		setTimeout(() => { 
			document.getElementById("panel").className = "col-sm-3 collapse1 show";
			document.getElementById("dashboard").className = "col-sm-9";
			document.getElementById("btnCollapse").style = "";
			for(var i=0; i < document.getElementsByTagName("iframe").length; i++){
				document.getElementsByTagName("iframe")[i].style.width = "70%"
		}
		}, 0.45);
	}
});
