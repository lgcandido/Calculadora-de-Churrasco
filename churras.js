var valorBeef = 0;
var valorPork = 0;
var valorChicken = 0;
var valorChickenH = 0;
var valorSausage = 0;
var valorBread = 0;
var valorSoda = 0;
var valorBeer = 0;
var valorCup = 0;
var valorNipkin = 0;
var valorCharcoal = 0;

$("#button-run").click(function(){
	var visivel  = $('#steps').is(':visible');
	if (visivel) {
		$('#steps').hide();
		$('#step-1').hide();
		$('#step-2').hide();
		$('#step-2-1').hide();
		$('#step-3').hide();
		$('#step-3-1').hide();      
		$("#button-run").text("Calcular");
		$(".box").prop('checked', false);
		$(".box-step3").prop('checked', false);     
		$("#input-male").val(0);
		$("#input-female").val(0);
		$("#input-children").val(0);
		$(".mostrar-carnes").text(null);
		comprar = 0; 
		checkMeat = 0;
		qtySoda = 0;
		qtyBeer = 0;
		qtyCups = 0;
		qtyNapkin = 0 ;
		qtyCharcoal= 0;

	} 
	else {
		$("#button-run").text("Recalcular");
		$('#steps').show();
		$('#step-2-1').hide();
		$('#step-1').show();
		$('#step-2').hide();
		$('#step-3').hide();    
		$('#step-3-1').hide();
	}

});

$("#button-cal1").click(function(){
	var visivel  = $('#step-1').is(':visible');
	if (visivel) {
		$("#step-1").hide();
		$("#step-2").show();
		$("#step-2-1").hide();
		$("#step-3").hide();
		$('#step-3-1').hide();      
	}
});

$("#button-cal3").click(function(){
	var visivel  = $('#step-2').is(':visible');
	if (visivel) {
		$("#step-1").hide();
		$("#step-2").hide();
		$("step-3").hide();
		$('#step-3-1').hide();
		$("#step-2-1").show();
	}
});

var checkMeat = 0;

$('.box').change(function(){
	if (this.checked) {
		checkMeat += 1;
	} else {
		checkMeat -= 1;

	}
}); 

var comprar = 0;

$("#button-cal3").click(function(){
//*Calculos

var qtyMale = parseInt($('#input-male').val(), 10);
var qtyFemale = parseInt($('#input-female').val(), 10);
var qtyChildren = parseInt($('#input-children').val(), 10);


var qtyTotal =([qtyMale * 350 + qtyFemale * 250 + qtyChildren * 100]/1000) 

comprar = (qtyTotal / checkMeat)*1000;

qtyTotalP = qtyFemale + qtyMale + qtyChildren;

qtySoda = parseInt($('#input-children').val(), 10)

qtyBeer = qtyMale * 5 + qtyFemale * 3;
	qtyCups = (qtyTotalP * 0.05).toFixed(); // 1 pacote de 100 copos para 20 pessoas.
	if (qtyCups < 1) {
		qtyCups = 1
	}

	qtyNapkin = (qtyTotalP * 0.1).toFixed(); // 1 pacote de 50 guardanapos para 10 pessoas
	if (qtyNapkin < 1) {
		qtyNapkin = 1
	}

	qtyCharcoal = (qtyTotalP * 0.1).toFixed(); // 1 pacote de 3kg de carvão para 10 pessoas
	if (qtyCharcoal < 1) {
		qtyCharcoal = 1
	}

// *Calculos

var visivel  = $('#step-2').is(':visible');
if (visivel) {
	$("#step-2").hide();
	$("#step-2").hide();
	$("#step-2.1").show();
}

$("#qty-carne").text("Quantidade de carne: " + qtyTotal +"kg");

function calculo() {


	if ($('#check1').is(':checked')) {

		$('.check1-step3').prop('checked', true);

		if (comprar < 1000) {
			$("#mostrar-carnes1").text("Carne Bovina: " + comprar.toFixed(0) + " gramas");
		} else {
			$("#mostrar-carnes1").text("Carne Bovina: " + (comprar.toFixed(0)/1000) + " kg");
		}
	}

	if ($('#check2').is(':checked')) {

		if (comprar < 1000) {
			$("#mostrar-carnes2").text("Carne Suína: " + comprar.toFixed(0) + " gramas");
		} else {
			$("#mostrar-carnes2").text("Carne Suína: " + (comprar.toFixed(0)/1000) + " kg");
		}
	}

	if ($('#check3').is(':checked')) {

		if (comprar < 1000) {
			$("#mostrar-carnes3").text("Asa e Coxa de Frango: " + comprar.toFixed(0) + " gramas");
		} else {
			$("#mostrar-carnes3").text("Asa e Coxa de Frango: " + (comprar.toFixed(0)/1000) + " kg");
		}
	}   

	if ($('#check4').is(':checked')) {

		if (comprar < 1000) {
			$("#mostrar-carnes4").text("Coração: " + comprar.toFixed(0) + " gramas");
		} else {
			$("#mostrar-carnes4").text("Coração: " + (comprar.toFixed(0)/1000) + " kg");
		}
	}   

	if ($('#check5').is(':checked')) {

		if (comprar < 1000) {
			$("#mostrar-carnes5").text("Linguiça: " + comprar.toFixed(0) + " gramas");
		} else {
			$("#mostrar-carnes5").text("Linguiça: " + (comprar.toFixed(0)/1000) + " kg");
		}
	}

	if ($('#check6').is(':checked')) {

		if (comprar < 1000) {
			$("#mostrar-carnes6").text("Pão de Alho: " + comprar.toFixed(0) + " gramas");
		} else {
			$("#mostrar-carnes6").text("Pão de Alho: " + (comprar.toFixed(0)/1000) + " kg");
		}
	}
}

if (qtyMale < 2 && qtyFemale < 2 && qtyChildren < 2 ) {
	$("#result").text("Churrasco para " + qtyMale + " homem, " + qtyFemale + " mulher e " + qtyChildren + " criança:");
}

if (qtyMale > 1 && qtyFemale < 2 && qtyChildren < 2 ) {
	$("#result").text("Churrasco para " + qtyMale + " homens, " + qtyFemale + " mulher e " + qtyChildren + " criança:");
}

if (qtyMale > 1 && qtyFemale > 1 && qtyChildren < 2 ) {
	$("#result").text("Churrasco para " + qtyMale + " homens, " + qtyFemale + " mulheres e " + qtyChildren + " criança:");
}

if (qtyMale > 1 && qtyFemale > 1 && qtyChildren > 1 ) {
	$("#result").text("Churrasco para " + qtyMale + " homens, " + qtyFemale + " mulheres e " + qtyChildren + " crianças:");
}

if (qtyMale < 2 && qtyFemale > 1 && qtyChildren < 1 ) {
	$("#result").text("Churrasco para " + qtyMale + " homem, " + qtyFemale + " mulheres e " + qtyChildren + " criança:");
}

if (qtyMale < 2 && qtyFemale > 1 && qtyChildren > 1 ) {
	$("#result").text("Churrasco para " + qtyMale + " homem, " + qtyFemale + " mulheres e " + qtyChildren + " crianças:");
}

if (qtyMale < 2 && qtyFemale < 2 && qtyChildren > 1 ) {
	$("#result").text("Churrasco para " + qtyMale + " homem, " + qtyFemale + " mulher e " + qtyChildren + " crianças:");
}

if (qtyMale > 1 && qtyFemale < 2 && qtyChildren > 1 ) {
	$("#result").text("Churrasco para " + qtyMale + " homens, " + qtyFemale + " mulher e " + qtyChildren + " crianças:");
}

$("#qty-carne").text("Quantidade de carne: " + qtyTotal +"kg");

calculo()
});


$("#button-cal2").click(function() {
	
	var visivel  = $('#step-1').is(':visible');
	if (visivel) {
		$("#step-1").hide();
		$("#step-3").show();
	}

});

$("#run-step2").click(function() {

	if ($('#check1').is(':checked')) {
		$('#check1-step3').prop('checked', true);
	}
	
	if ($('#check2').is(':checked')) {
		$('#check2-step3').prop('checked', true);
	}

	if ($('#check3').is(':checked')) {
		$('#check3-step3').prop('checked', true);
	}

	if ($('#check4').is(':checked')) {
		$('#check4-step3').prop('checked', true);
	}

	if ($('#check5').is(':checked')) {
		$('#check5-step3').prop('checked', true);
	}

	if ($('#check6').is(':checked')) {
		$('#check6-step3').prop('checked', true);
	}

	var visivel  = $('#step-2-1').is(':visible');
	if (visivel) {
		$("#step-2-1").hide();
		$("#step-3").show();
	}

	if ($('#check1-step3').is(':checked')) {
		$("#qty-item1").val(comprar/1000);
		$("#qty-item1").show();
		$("#price-item1").show();
		$(".real1").show();
		valorBeef = $('#qty-item1').val() * $('#price-item1').val();
	} else {
		$("#qty-item1").hide();
		$("#price-item1").hide();
		$(".real1").hide();
	}

	if ($('#check2-step3').is(':checked')) {
		$("#qty-item2").val(comprar/1000);
		$("#qty-item2").show();
		$("#price-item2").show();
		$(".real2").show();
		valorPork = $('#qty-item2').val() * $('#price-item2').val();
	} else {
		$("#qty-item2").hide();
		$("#price-item2").hide();
		$(".real2").hide();
	}

	if ($('#check3-step3').is(':checked')) {
		$("#qty-item3").val(comprar/1000);
		$("#price-item3").show();
		$(".real3").show();
		valorChicken = $('#qty-item3').val() * $('#price-item3').val();
	} else {
		$("#qty-item3").hide();
		$("#price-item3").hide();
		$(".real3").hide();
	}

	if ($('#check4-step3').is(':checked')) {
		$("#qty-item4").val(comprar/1000);
		$("#price-item4").show();
		$(".real4").show();
		valorChickenH = $('#qty-item4').val() * $('#price-item4').val();
	} else {
		$("#qty-item4").hide();
		$("#price-item4").hide();
		$(".real4").hide();
	}

	if ($('#check5-step3').is(':checked')) {
		$("#qty-item5").val(comprar/1000);
		$("#price-item5").show();
		$(".real5").show();
		valorSausage = $('#qty-item5').val() * $('#price-item5').val();
	} else {
		$("#qty-item5").hide();
		$("#price-item5").hide();
		$(".real5").hide();
	}

	if ($('#check6-step3').is(':checked')) {
		$("#qty-item6").val(comprar/1000);
		$("#price-item6").show();
		$(".real6").show();
		valorBread = $('#qty-item6').val() * $('#price-item6').val();
	} else {
		$("#qty-item6").hide();
		$("#price-item6").hide();
		$(".real6").hide();
	}   

	if ($('#check7-step3').is(':checked')) {
		$("#qty-item7").show();
		$("#price-item7").show();
		$(".real7").show();
		valorSoda = $('#qty-item7').val() * $('#price-item7').val();
	} else {
		$("#qty-item7").hide();
		$("#price-item7").hide();
		$(".real7").hide();
	}

	if ($('#check8-step3').is(':checked')) {
		$("#qty-item8").show();
		$("#price-item8").show();
		$(".real8").show();
		valorBeer = $('#qty-item8').val() * $('#price-item8').val();
	} else {
		$("#qty-item8").hide();
		$("#price-item8").hide();
		$(".real8").hide();
	}

	if ($('#check9-step3').is(':checked')) {
		$("#qty-item9").show();
		$("#price-item9").show();
		$(".real7").show();
		valorCup = $('#qty-item9').val() * $('#price-item9').val();
	} else {
		$("#qty-item9").hide();
		$("#price-item9").hide();
		$(".real9").hide();
	}

	if ($('#check10-step3').is(':checked')) {
		$("#qty-item10").show();
		$("#price-item10").show();
		$(".real10").show();
	} else {
		$("#qty-item10").hide();
		$("#price-item10").hide();
		$(".real10").hide();
	}

	if ($('#check11-step3').is(':checked')) {
		$("#qty-item11").show();
		$("#price-item11").show();
		$(".real11").show();
	} else {
		$("#qty-item11").hide();
		$("#price-item11").hide();
		$(".real11").hide();
	}   


});


// - ANALIZAR SE OS CHECKBOX FOREM :CHECK E :UNCHECK, APARECER E DESAPAREÇE PREÇO E QUANTIDADE DOS ITENS //

$("#check1-step3").click(function() {
	if ($('#check1-step3').is(':checked')) {
		$("#qty-item1").show();
		$("#price-item1").show();
		$(".real1").show();
	} else {
		$("#qty-item1").hide();
		$("#price-item1").hide();
		$(".real1").hide();
	}
});

$("#check2-step3").click(function() {
	if ($('#check2-step3').is(':checked')) {
		$("#qty-item2").show();
		$("#price-item2").show();
		$(".real2").show();
	} else {
		$("#qty-item2").hide();
		$("#price-item2").hide();
		$(".real2").hide();
	}
});

$("#check3-step3").click(function() {
	if ($('#check3-step3').is(':checked')) {
		$("#qty-item3").show();
		$("#price-item3").show();
		$(".real3").show();
	} else {
		$("#qty-item3").hide();
		$("#price-item3").hide();
		$(".real3").hide();
	}
});

$("#check4-step3").click(function() {
	if ($('#check4-step3').is(':checked')) {
		$("#qty-item4").show();
		$("#price-item4").show();
		$(".real4").show();
	} else {
		$("#qty-item4").hide();
		$("#price-item4").hide();
		$(".real4").hide();
	}
});

$("#check5-step3").click(function() {
	if ($('#check5-step3').is(':checked')) {
		$("#qty-item5").show();
		$("#price-item5").show();
		$(".real5").show();
	} else {
		$("#qty-item5").hide();
		$("#price-item5").hide();
		$(".real5").hide();
	}
});

$("#check6-step3").click(function() {
	if ($('#check6-step3').is(':checked')) {
		$("#qty-item6").show();
		$("#price-item6").show();
		$(".real6").show();
	} else {
		$("#qty-item6").hide();
		$("#price-item6").hide();
		$(".real6").hide();
	}
});

$("#check7-step3").click(function() {
	if ($('#check7-step3').is(':checked')) {
		$("#qty-item7").show();
		$("#price-item7").show();
		$(".real7").show();
	} else {
		$("#qty-item7").hide();
		$("#price-item7").hide();
		$(".real7").hide();
	}
});

$("#check8-step3").click(function() {
	if ($('#check8-step3').is(':checked')) {
		$("#qty-item8").show();
		$("#price-item8").show();
		$(".real8").show();
	} else {
		$("#qty-item8").hide();
		$("#price-item8").hide();
		$(".real8").hide();
	}
});

$("#check9-step3").click(function() {
	if ($('#check9-step3').is(':checked')) {
		$("#qty-item9").show();
		$("#price-item9").show();
		$(".real9").show();
	} else {
		$("#qty-item9").hide();
		$("#price-item9").hide();
		$(".real9").hide();
	}
});

$("#check10-step3").click(function() {
	if ($('#check10-step3').is(':checked')) {
		$("#qty-item10").show();
		$("#price-item10").show();
		$(".real10").show();
	} else {
		$("#qty-item10").hide();
		$("#price-item10").hide();
		$(".real10").hide();
	}
});

$("#check11-step3").click(function() {
	if ($('#check11-step3').is(':checked')) {
		$("#qty-item11").show();
		$("#price-item11").show();
		$(".real11").show();
	} else {
		$("#qty-item11").hide();
		$("#price-item11").hide();
		$(".real11").hide();
	}
});

// Botão de calcular os demais itens, de acordo com a quantidade de pessoas. //

$("#cal-itens-dif").click(function() {

	if ($('#check7-step3').is(':checked')) {
		$('#qty-item7').val(qtySoda);
		valorSoda = $('#qty-item7').val() * $('#price-item7').val();    
	}

	if ($('#check8-step3').is(':checked')) {
		$('#qty-item8').val(qtyBeer);
		valorBeer = $('#qty-item8').val() * $('#price-item8').val();
	}

	if ($('#check9-step3').is(':checked')) {
		$('#qty-item9').val(qtyCups);
		valorCup = $('#qty-item9').val() * $('#price-item9').val();
	}

	if ($('#check10-step3').is(':checked')) {
		$('#qty-item10').val(qtyNapkin);
		valorNipkin= $('#qty-item10').val() * $('#price-item10').val();
	}

	if ($('#check11-step3').is(':checked')) {
		$('#qty-item11').val(qtyCharcoal);
		valorCharcoal= $('#qty-item11').val() * $('#price-item11').val();
	}

});

// Calculo: Quantidade x preço

$("#run-step3").click(function() {
	console.log("Boi: " + valorBeef);
	console.log("Porco: " + valorPork);
	console.log("Frango: " + valorChicken);
	console.log("Coração: " + valorChickenH);
	console.log("Linguiça: " + valorSausage);
	console.log("Pão: " + valorBread);
	console.log("Refri: " + valorSoda);
	console.log("Cerveja: " + valorBeer);
	console.log("Copo: " + valorCup);
	console.log("Guardanapo: " + valorNipkin);
	console.log("Carvão: " + valorCharcoal);

	var priceTotal = (valorBeef + valorPork + valorChicken + valorChickenH + valorSausage + valorBread + valorSoda + valorBeer + valorCup + valorNipkin + valorCharcoal)

	$('#steps').show();
	$('#step-2-1').hide();
	$('#step-1').hide();
	$('#step-2').hide();
	$('#step-3').hide();    
	$('#step-3-1').show();

	$("#result-price").text("Valores:");

	if (valorBeef > 0){
		$("#item-step3-1").text("Carne Bovina:")
		$("#price-total1").text(valorBeef.toFixed(2).toString().replace(".", ","));
	}

	if (valorPork > 0){
		$("#item-step3-2").text("Carne Suína:")
		$("#price-total2").text(valorPork.toFixed(2).toString().replace(".", ","));
	}

	if (valorChicken > 0){
		$("#item-step3-3").text("Coxa e Asa:")
		$("#price-total3").text(valorChicken.toFixed(2).toString().replace(".", ","));
	}

	if (valorChickenH > 0){
		$("#item-step3-4").text("Coração:")
		$("#price-total4").text(valorChickenH.toFixed(2).toString().replace(".", ","));
	}

	if (valorSausage > 0){
		$("#item-step3-5").text("Linguiça:")
		$("#price-total5").text(valorSausage.toFixed(2).toString().replace(".", ","));
	}

	if (valorBread > 0){
		$("#item-step3-6").text("Pão de Alho:")
		$("#price-total6").text(valorBread.toFixed(2).toString().replace(".", ","));
	}

	if (valorSoda > 0){
		$("#item-step3-7").text("Refrigerante:")
		$("#price-total7").text(valorSoda.toFixed(2).toString().replace(".", ","));
	}

	if (valorBeer > 0){
		$("#item-step3-8").text("Cerveja:")
		$("#price-total8").text(valorBeer.toFixed(2).toString().replace(".", ","));
	}

	if (valorCup > 0){
		$("#item-step3-9").text("Copos Desc.:")
		$("#price-total9").text(valorCup.toFixed(2).toString().replace(".", ","));
	}

	if (valorNipkin > 0){
		$("#item-step3-10").text("Guaradanapo:")
		$("#price-total10").text(valorNipkin.toFixed(2).toString().replace(".", ","));
	}

	if (valorCharcoal > 0){
		$("#item-step3-11").text("Carvão:")
		$("#price-total11").text(valorCharcoal.toFixed(2).toString().replace(".", ","));
	}

$("#total-text").text("Valor total:")
$("#total").text(priceTotal.toFixed(2).toString().replace(".", ","));

});

