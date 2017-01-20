$(document).ready(function() {
	$('.credit-card').addClass("neutral");

});

// Copy text to CC Number
$('#cc-number').keyup(function(){
	var creditcard_number = $(this).val();
	// console.log(creditcard_number);
	cardStylist(creditcard_number);
	$('#credit-card-number').text(creditcard_number.replace(/(.{4})(.{4})(.{4})/,'$1 $2 $3 '));


});

// Copy Text to Name
$('#name-input').keyup(function(){
	var name = $(this).val();
	// console.log(name);
	$('#card-holder').text(name);
});

// Copy Text to CVC
$('#cvc-input').keyup(function(){
	var cvc = $(this).val();
	// console.log(cvc);
	$('#cvc').text(cvc);
});

// Copy Text to Month and Year
$('#month').change(function(){
	var month = $(this).val();
	// console.log(month);
	$('#month-card').text(month);
});

$('#year').change(function(){
	var year = $(this).val();
	// console.log(year);
	$('#year-card').text(year);
});

function cardStylist(ccnumber){
	if (ccnumber.length <= 1) {
		console.log("cardStylist is working:" + ccnumber);
		if (ccnumber.charAt(0)==4) {
			$(".credit-card").removeClass("neutral isMasterCard isAMEX").addClass("isVisa");
			$("#comercial-network-logo").attr("src", "./src/img/Visa_logo.png");

			console.log("cardStylist said it was: Visa");
		}
			else if (ccnumber.charAt(0)==3) {
				$(".credit-card").removeClass("neutral isMasterCard isVisa").addClass("isAMEX");
				$("#comercial-network-logo").attr("src", "./src/img/amex-logo.png");
				console.log("cardStylist said it was: AMEX");
			}
				else if (ccnumber.charAt(0)==2 || ccnumber.charAt(0)==5) {
					$(".credit-card").removeClass("neutral isAMEX isVisa").addClass("isMasterCard");
					console.log("cardStylist said it was: MasterCard");
					$("#comercial-network-logo").attr("src", "./src/img/MasterCard_Logo.png");
				}
					else{
						$(".credit-card").removeClass("isAMEX isMasterCard isVisa").addClass("neutral");
						console.log("cardStylist said it was not found pal!");
					};
	};
}
$('#submit').click(function(e){
	e.preventDefault();
	var name = $('#name-input').val();
	var ccnumber = $('#cc-number').val();
	console.log(name);

	if (name.length > 0 && ccnumber > 0) {
		swal(
		  '¡Todo Listo!',
		  'Tu tarjeta ha sido agregada.',
		  'success'
		)
	} else{
		swal(
		  '¡Algo no ha salido bien!',
		  'Revisa los datos de tu tarjeta.',
		  'error'
		)
	};
})
