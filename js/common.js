
var main = function(){

	// toggle menu
	$('.menu-button').click(function(){
		$('.main-menu ul').slideToggle();
	});


  //smooth scroll function
   $('a[href^="#"]').click(function () {
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     $('html,body').animate( { scrollTop: destination }, 1000 );
     return false;
   });


	$(".carousel").owlCarousel({
		responsive : {
			0 : {
				loop : true,
				items : 1,
				nav : true,
				rewindNav : true
			}
		},
		navText : ""
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
			}, 1000);
		});
	});

};


$(document).ready(main);
