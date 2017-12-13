var data = [
	{
		"restorant":"Lugar 1",
		"img": "<img src='assets/images/4805028626_13325ea17b_o.jpg'>",
		"type-of-food": ["comida-china"],
		"prices": 1
	}, 
	{
		"restorant":"Lugar 2",
		"img": "",
		"type-of-food": ["comida-vegana","sushi"],
		"prices": 1
	},
	{
		"restorant":"Lugar 3",
		"img": "",
		"type-of-food": ["comida-naturista","comida-vegana","comida-casera"],
		"prices": 1
	},
	{
		"restorant":"Lugar 4",
		"img": "",
		"type-of-food": ["comida-rápida"],
		"prices": 1
	}, 
	{
		"restorant":"Lugar 5",
		"img": "",
		"type-of-food": ["pasteleria", "comida-nacional", "comida-casera"],
		"prices": 1
	}, 
	{
		"restorant":"Lugar 6",
		"img": "",
		"type-of-food": ["comida-nacional","comida-casera"],
		"prices": 1
	}, 
	{
		"restorant":"Lugar 7",
		"img": "",
		"type-of-food": ["comida-china"],
		"prices": 1
	}, 
	{
		"restorant":"Lugar 8",
		"img": "",
		"type-of-food": ["comida-vegana", "comida-casera"],
		"prices": 1
	}, 
	{
		"restorant":"Lugar 9",
		"img": "",
		"type-of-food": ["pasteleria", "comida-vegana", "comida-casera"],
		"prices": 1
	}, 
	{
		"restorant":"Lugar 10",
		"img": "<img src='assets/images/4805028626_13325ea17b_o.jpg'>",
		"type-of-food": ["comida-china", "comida-rapida"],
		"prices": 1
	}  
];


$(document).ready(function(){
// código here
$('select').material_select();
$(".principal-view").hide();

var hidingFirstView = function(){
	$(".first-view").fadeOut();
}
var showingSecondView = function(){
	$(".principal-view").fadeIn()
}
setTimeout(hidingFirstView, 3500);
setTimeout(showingSecondView, 4000);


// que aparezcan todas las imágenes
	for (i = 0 ; i < data.length ; i++){
		$(".images").append(data[i].img);
	}
// filtrando locales
	$("select").change(function(){
		var images = $(".images").children();
		$(images).remove();
		var optionSelected = $(this).val();
		console.log(optionSelected);
		//recorrer restaurantes
		for (i = 0 ; i < data.length ; i++){
			//recorrer filtros de comida
			for (j = 0 ; j < data[i]["type-of-food"].length ; j++){
				if (optionSelected == data[i]["type-of-food"][j]){
					$(".images").append(data[i].img);
				}
			}
		}
	});
});
