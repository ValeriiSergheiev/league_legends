$(document).ready(function() {

	$('.slider').slick({
		arrows: false,
		dots: true
	});

	$('#server-menu, #placement-select').selectmenu({
		width: 222
	});

	$('#placement-select').selectmenu({
		change: function( event, data ) {
			//$('.tier').val(data.item.value );
			$('.tier').text(($('.ui-selectmenu-text').text()));
		}
	});

	$( "#questions, #placement-questions" ).accordion();
	
	/* slider  UI*/
	$( "#placement-slider" ).slider({
		range: "min",
		value: 3,
		min: 1,
		max: 20,
		slide: function( event, ui ) {
			$( "#total-games" ).val( "" + ui.value );
			$( "#total-dollars" ).val( "" + (ui.value * 12) + "$");
		}
	});
	$( "#total-games" ).val( "" + $( "#placement-slider" ).slider( "value" ) );
	//$( "#total-dollars" ).val( "" + $( "#placement-slider" ).slider( "value" ) + "$" );
	$( "#total-dollars" ).val("36$"); 
	
	$('input#placement-checkbox').click(function() {
		if (this.checked) {
			$('.no').css('display', 'none');
			$('.yes').css('display', 'inline-block');
		} else {
			$('.no').css('display', 'inline-block');
			$('.yes').css('display', 'none');
		}
	});

	/* end slider  UI*/
});