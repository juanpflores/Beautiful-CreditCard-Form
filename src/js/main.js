$(document).ready(function() {
	$('.credit-card').addClass("neutral");

});

// Copy text to CC Number
$('#cc-number').keyup(function(){
	var creditcard_number = $(this).val();
	console.log(creditcard_number);
	$('#credit-card-number').text(creditcard_number.replace(/(.{4})(.{4})(.{4})/,'$1 $2 $3 '));
});

// Copy Text to Name
$('#name-input').keyup(function(){
	var name = $(this).val();
	console.log(name);
	$('#card-holder').text(name);
});

// Copy Text to CVC
$('#cvc-input').keyup(function(){
	var cvc = $(this).val();
	console.log(cvc);
	$('#cvc').text(cvc);
});

// Copy Text to Month and Year
$('#month').change(function(){
	var month = $(this).val();
	console.log(month);
	$('#month-card').text(month);
});

$('#year').change(function(){
	var year = $(this).val();
	console.log(year);
	$('#year-card').text(year);
});

