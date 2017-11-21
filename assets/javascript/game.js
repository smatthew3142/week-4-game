
$(document).ready(function(){


	//defaults for game

	var newNumber;  
	var yourTotal = 0;
	var winCount = 0;
	var lossCount = 0;
	var message = {
		win: "YOU WIN!",
		lose: "You collected too many crystals! GAME OVER!",
	}
	var redNumber;
	var blueNumber;
	var purpleNumber;
	var greenNumber;



	//start a new game

	function newGame(){

		newNumber = Math.floor(Math.random() * 101) + 19;
		console.log(newNumber);
		$('#randomNumber').text(newNumber);

		//set random numbers for crystals
		var redNumber= Math.floor(Math.random() * 11) + 1;
		console.log('Red Number: ' + redNumber);

		var blueNumber= Math.floor(Math.random() * 11) + 1;
		console.log('Blue Number: ' + blueNumber);

		var purpleNumber= Math.floor(Math.random() * 11) + 1;
		console.log('Purple Number: ' + purpleNumber);

		var greenNumber= Math.floor(Math.random() * 11) + 1;
		console.log('Green Number: ' + greenNumber);

		$('#yourTotal').text(yourTotal);
		
		$('#winCount').text(winCount);
		$('#lossCount').text(lossCount);

	}

	newGame();


	//click crystals


	//check for winner


	//if win, add to win count


	//if loss, add to loss count







})