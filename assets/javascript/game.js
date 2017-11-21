
$(document).ready(function(){


	//defaults for game

	var newNumber;  
	var yourTotal = 0;
	var winCount = 0;
	var lossCount = 0;
	var message = {
		win: "YOU WIN!",
		lose: "You collected too many crystals! Try again!",
		reset:""
	}
	var redNumber= Math.floor(Math.random() * 11) + 1;
	var blueNumber;
	var purpleNumber;
	var greenNumber;
	var newWinner = true;



	//start a new game

	newGame();

	function newGame(){

		newNumber = Math.floor(Math.random() * 101) + 19;
		console.log(newNumber);
		$('#randomNumber').text(newNumber);

		//set random numbers for crystals
		redNumber= Math.floor(Math.random() * 11) + 1;
		console.log('Red Number: ' + redNumber);

		blueNumber= Math.floor(Math.random() * 11) + 1;
		console.log('Blue Number: ' + blueNumber);

		purpleNumber= Math.floor(Math.random() * 11) + 1;
		console.log('Purple Number: ' + purpleNumber);

		greenNumber= Math.floor(Math.random() * 11) + 1;
		console.log('Green Number: ' + greenNumber);

		yourTotal = 0;
		$('#yourTotal').text(yourTotal);
		console.log("score: " + yourTotal);

		// $('#message').html(message.reset);

	
		$('#winCount').text(winCount);
		$('#lossCount').text(lossCount);

	}

	//click crystals
	//check for winner

		$('#red').on('click', function() {
		yourTotal = yourTotal + redNumber;
		console.log("new score: " + yourTotal);
		$('#yourTotal').text(yourTotal);
		

		if (yourTotal == newNumber) {
			winner();

		}		
		else if (yourTotal > newNumber) {
			loser();
		}
	});

		$('#blue').on('click', function() {
		yourTotal = yourTotal + blueNumber;
		console.log("new score: " + yourTotal);
		$('#yourTotal').text(yourTotal);
		

		if (yourTotal == newNumber) {
			winner();

		}		
		else if (yourTotal > newNumber) {
			loser();
		}
	});

		$('#purple').on('click', function() {
		yourTotal = yourTotal + purpleNumber;
		console.log("new score: " + yourTotal);
		$('#yourTotal').text(yourTotal);
		

		if (yourTotal == newNumber) {
			winner();

		}		
		else if (yourTotal > newNumber) {
			loser();
		}
	});

		$('#green').on('click', function() {
		yourTotal = yourTotal + greenNumber;
		console.log("new score: " + yourTotal);
		$('#yourTotal').text(yourTotal);
		

		if (yourTotal == newNumber) {
			winner();

		}		
		else if (yourTotal > newNumber) {
			loser();
		}
	});




	//if win, add to win count

		function winner() {
		winCount++;
		$('#winCount').text(winCount);
		$('#message').html(message.win);

		newGame();	
		
	}


	//if loss, add to loss count

		function loser() {
		lossCount++;
		$('#lossCount').text(lossCount);
		$('#message').html(message.lose);

		newGame();
		
		
	}

});








