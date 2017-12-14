/**
* datos
*/
var data = [
	{
		"class":"0",
		"name":"Lugar 1",
		"img": "<img src='assets/images/chinese.jpg'>",
		"type-of-food": ["comida-china"],
		"adress": "Dirección #1",
		"delievery": true
	},
	{
		"class":"1",
		"name":"Lugar 2",
		"img": "<img src='assets/images/vegan-sushi-dos.jpg'>",
		"type-of-food": ["comida-vegana","sushi"],
		"adress": "Dirección #3",
		"delievery": true
	},
	{
		"class":"2",
		"name":"Lugar 3",
		"img": "<img src='assets/images/vegan-n-h.jpg'>",
		"type-of-food": ["comida-naturista","comida-vegana","comida-casera"],
		"adress": "Dirección #3",
		"delievery": false
	},
	{
		"class":"3",
		"name":"Lugar 4",
		"img": "<img src='assets/images/fast-food.jpg'>",
		"type-of-food": ["comida-rápida"],
		"adress": "Dirección #4",
		"delievery": true
	},
	{
		"class":"4",
		"name":"Lugar 5",
		"img": "<img src='assets/images/empanadas.jpg'>",
		"type-of-food": ["pasteleria", "comida-nacional", "comida-casera"],
		"adress": "Dirección #5",
		"delievery": false
	},
	{
		"class":"5",
		"name":"Lugar 6",
		"img": "<img src='assets/images/chilean-home.jpg'>",
		"type-of-food": ["comida-nacional","comida-casera"],
		"adress": "Dirección #6",
		"delievery": false
	},
	{
		"class":"6",
		"name":"Lugar 7",
		"img": "<img src='assets/images/chinese-fast.jpg'>",
		"type-of-food": ["comida-china", "comida-rápida"],
		"adress": "Dirección #7",
		"delievery": true
	},
	{
		"class":"7",
		"name":"Lugar 8",
		"img": "<img src='assets/images/natural.jpg'>",
		"type-of-food": ["comida-vegana", "comida-casera"],
		"adress": "Dirección #8",
		"delievery": false
	},
	{
		"class":"8",
		"name":"Lugar 9",
		"img": "<img src='assets/images/vegan-bakery.jpg'>",
		"type-of-food": ["pasteleria", "comida-vegana", "comida-casera"],
		"adress": "Dirección #9",
		"delievery": true
	},
	{
		"class":"9",
		"name":"Lugar 10",
		"img": "<img src='assets/images/chinese-two.jpg'>",
		"type-of-food": ["comida-china", "comida-rápida"],
		"adress": "Dirección #10",
		"delievery": false
	},
	{
		"class":"10",
		"name":"Lugar 11",
		"img": "<img src='assets/images/bakery.jpg'>",
		"type-of-food": ["pasteleria"],
		"adress": "Dirección #11",
		"delievery": true
	},
	{
		"class":"11",
		"name":"Lugar 12",
		"img": "<img src='assets/images/sushi.jpg'>",
		"type-of-food": ["sushi"],
		"adress": "Dirección #12",
		"delievery": true
	}
];
/**
* empezando funcionalidad
*/
$(document).ready(function(){
	/**
	* inicializando elementos materialize
	*/
	$("select").material_select();
	$(".modal").modal();
	/**
	* pasando de la vista splash a la principal
	*/
	$(".principal-view").hide();
	var hidingFirstView = function(){
		$(".first-view").fadeOut();
	}
	var showingSecondView = function(){
		$(".principal-view").fadeIn()
	}
setTimeout(hidingFirstView, 3500);
setTimeout(showingSecondView, 4000);
	/**
	* llamar a todas las imágenes
	*/
	var allImages = function(data){
		for (i = 0 ; i < data.length ; i++){
			var image = $(data[i].img);
			$(image).addClass(data[i].class);
			$(".images").append(image);
		}
		$(".images img").wrap("<div class='img-container'></div>");
		/**
		* mouseover effect
		*/
			$(".img-container").mouseover(function(){
				var img = $(this).children();
				$(img).css("transform","scale(1.5)");
			}).mouseout(function(){
				$(".img-container img").css("transform","none");
			});
			/**
			* modificando modal
			*/
			$(".img-container img").click(function(){
				$(this).addClass("modal-trigger");
				$(this).attr("data-target","modal");
				for(var i = 0; i < data.length; i++){
					if($(this).hasClass(data[i].class)){
						$(".place-title").text(data[i].name);
						$(".adress").text(data[i].adress);
						if(data[i].delievery == true){
							$(".delievery").text("Delievery: Sí");
						}else{
							$(".delievery").text("Delievery: No");
						}
					}
				}
			});
	}
	allImages(data);
	/**
	* filtrando locales
	*/
	$("select").change(function(){
		var images = $(".images").children();
		$(images).remove();
		var optionSelected = $(this).val();
		for (i = 0 ; i < data.length ; i++){
			for (j = 0 ; j < data[i]["type-of-food"].length ; j++){
				if (optionSelected == data[i]["type-of-food"][j]){
					var image = $(data[i].img);
					$(image).addClass(data[i].class);
					$(".images").append(image);
				}
			}
		}
		$(".images img").wrap("<div class='img-container'></div>");
		$(".img-container").mouseover(function(){
			var img = $(this).children();
			$(img).css("transform","scale(1.5)");
		}).mouseout(function(){
			$(".img-container img").css("transform","none");
		});
		$(".img-container img").click(function(){
			$(this).addClass("modal-trigger");
			$(this).attr("data-target","modal");
			for(var i = 0; i < data.length; i++){
				if($(this).hasClass(data[i].class)){
					$(".place-title").text(data[i].name);
					$(".adress").text(data[i].adress);
					if(data[i].delievery == true){
						$(".delievery").text("Delievery: Sí");
					}else{
						$(".delievery").text("Delievery: No");
					}
				}
			}
		});
		$(".modal-close").click(function(){
			$(".img-container").remove();
			$("input").val("");
			allImages(data);
		});
	});
	$(".order").click(function(){
		alert("Pronto será redirigido al formulario de pedido.");
	});
});
