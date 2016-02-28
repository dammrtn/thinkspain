$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		nav:true,
		loop:true,
		dots:true,
		navText:[ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
		responsive:{
			0:{
				items:1,
				autoplay:true
			}
		}
	})
});