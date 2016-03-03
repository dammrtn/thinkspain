$(document).ready(function(){
	
	/* Header */

  $('#header-icon').click(function(e){
    e.preventDefault();
    $('body').toggleClass('with-sidebar');
  });

  $('#close-icon').click(function(e){
    $('body').removeClass('with-sidebar');
  });

  $("#menu-arrow").on('click', function (){
  	$(this).toggleClass('arrow-rotate arrow-transition');
  });


	/* Carousels */

	var totalItems = $('#carousel-property .item').length;
	var totalItems2 = $('#carousel-property2 .item').length;
	var currentIndex = $('#carousel-property .item.active').index() + 1;
	var currentIndex2 = $('#carousel-property2 .item.active').index() + 1;

	$('#counter').html(''+currentIndex+'/'+totalItems+'');
	$('#counter2').html(''+currentIndex2+'/'+totalItems2+'');

	$('#carousel-property').on('slid.bs.carousel', function() {
	    currentIndex = $('#carousel-property .item.active').index() + 1;
	   $('#counter').html(''+currentIndex+'/'+totalItems+'');
	});

	$('#carousel-property2').on('slid.bs.carousel', function() {
	    currentIndex2 = $('#carousel-property2 .item.active').index() + 1;
	   $('#counter2').html(''+currentIndex2+'/'+totalItems2+'');
	});

	$('#owl-carousel').owlCarousel({
		nav:true,
		loop:true,
		dots:true,
		navText:[ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
		items:1
	});

});