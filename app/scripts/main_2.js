$(document).ready(function() {

	$('.slider').slick({
		arrows: false,
		dots: true
	});

	$('#server-menu, #placement-select, #division-select, #duoq-top-select, #duoq-bottom-select, #contact-selectmenu').selectmenu({
		width: 222
	});

	$('#placement-select').selectmenu({
		change: function( event, data ) {
			//$('.tier').val(data.item.value );
			$('.tier').text(($('#placement-select-button .ui-selectmenu-text').text()));
		}
	});

	$('#division-select').selectmenu({
		change: function( event, data ) {
			//$('.tier').val(data.item.value );
			$('.division').text(($('#division-select-button .ui-selectmenu-text').text()));
		}
	});

	//$('#division-select').selectmenu();

	$( "#questions, #placement-questions" ).accordion();
	
	/* slider  UI*/
	$( "#placement-slider, #draft-slider" ).slider({
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
	$( "#total-games" ).val("3"); 
	$( "#total-dollars" ).val("36$"); 
		
	/* checkbox */
	$('input#placement-checkbox').click(function() {
		if (this.checked) {
			$('.no').css('display', 'none');
			$('.yes').css('display', 'inline-block');
			//alert($( "#total-dollars" ).val());
			//$( "#total-dollars" ).val("$$$$$");
		} else {
			$('.no').css('display', 'inline-block');
			$('.yes').css('display', 'none');
		}
	});

	/* end slider  UI*/

	/* textarea counter */
	var text_max = 500;
	$('.textarea_feedback').html(text_max + ' ' + 'labels left');

	$('#contact-text').keyup(function(){
		var text_length = $('#contact-text').val().length;
        var text_remaining = text_max - text_length;

        $('.textarea_feedback').html(text_remaining + ' labels left');
	});
	/* end textarea counter */

});