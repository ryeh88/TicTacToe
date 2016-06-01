

$(function() {
	var boardNumber = 1;
	newBoards();
	markBoard();
	// reset values
	function newGame() {
		console.log('NEW GAME');
		$('#board').remove();
		boardNumber = 1;
		appendBoard();

	};

	function appendBoard () {
		
		$('.content').html('<div id="board" class="board' + boardNumber +'"><h3> Board #' + boardNumber+ '</h3><table class="board '+ boardNumber + '"><tr id="row1"><td class="square topLeft"><td class="square v topCenter"><td class="square topRight"><tr id=row2><td class="square h midLeft"><td class="square h midCenter v"><td class="square h midRight"><tr id=row3><td class="square botLeft"><td class="square v botCenter"><td class="square botRight"></table>');
		// $('#board').addClass('board' + boardNumber).append('<div class="content"><h3> Board #' + boardNumber+ '</h3><table class="board '+ boardNumber + '"><tr id="row1"><td class="square topLeft"><td class="square v topCenter"><td class="square topRight"><tr id=row2><td class="square h midLeft"><td class="square h midCenter v"><td class="square h midRight"><tr id=row3><td class="square botLeft"><td class="square v botCenter"><td class="square botRight"></table>');
		markBoard();
		$('#winner').html("");
	};
	
	function newBoards() {
		// append board and board # to html
		$('#board').addClass('board' + boardNumber).html('<h3> Board #' + boardNumber+ '</h3><table class="board'+boardNumber+'"><tr id="row1"><td class="square topLeft"><td class="square v topCenter"><td class="square topRight"><tr id=row2><td class="square h midLeft"><td class="square h midCenter v"><td class="square h midRight"><tr id=row3><td class="square botLeft"><td class="square v botCenter"><td class="square botRight"></table>');
		// New game button
		markBoard();
		
	};

	function markBoard() {
		
		var lastClicked = 'O';
		$('td.square').on('click', function() {
			if ($(this).html() == 'X' || $(this).html() == 'O') {
				// alert user that box has been clicked
				alert('space has been taken');
			} else {
				if (lastClicked == 'X') {
		        $(this).html('O');
	        	lastClicked = 'O';
			} else if (lastClicked == 'O') {
		   		$(this).html('X');
				lastClicked = 'X';
	   		}
		}

	function winner(value){
		
		$('#winner').html('Winner is ' + value + '! Please click below for a new board or game.').fadeIn(2000);
				
		$('tr td.square').click( function () {

			alert('Game is over');
		});
	}

		// TOP ROW ACROSS
		var topLeft = $('tr td.topLeft').html();
		var topCenter = $('tr td.topCenter').html();
		var topRight = $('tr td.topRight').html();
		var midLeft = $('tr td.midLeft').html();
		var midCenter = $('tr td.midCenter').html();
		var midRight = $('tr td.midRight').html();
		var botLeft = $('tr td.botLeft').html();
		var botRight = $('tr td.botRight').html();
		var botCenter = $('tr td.botCenter').html();

		$.each([ 'X','O' ], function( index, value ) { 
			if (topLeft === value && topCenter === value && topRight === value)  {
				winner(value);
		};
			if (midCenter === value && midRight === value && midRight === value)  {
				winner(value);
		};
					if (botLeft === value && botCenter === value && botRight === value)  {
				winner(value);
		};
					if (topLeft === value && midLeft === value && botLeft === value)  {
				winner(value);
		};
					if (midCenter === value && topCenter === value && botCenter === value)  {
				winner(value);
		};
					if (botRight === value && midCenter === value && topRight === value)  {
				winner(value);
		};

					if (topLeft === value && midCenter === value && botRight === value)  {
				winner(value);
		};
					if (topLeft === value && topCenter === value && topRight === value)  {
				winner(value);
		};

		});
		

		
	

		// 	if ($('tr td.topLeft').html() === 'X' && ($('tr td.topCenter').html() === 'X' &&($('tr td.topRight').html() === 'X'))){
		// 	winner();
		// }
		// if ($('tr td.topLeft').html() === 'O' && ($('tr td.topCenter').html() === 'O' &&($('tr td.topRight').html() === 'O'))){
		// 	winner();
		// }


		// // LEFT COLUMN DOWN
		// if ($('tr td.topLeft').html() === 'X' && ($('tr td.midLeft').html() === 'X' &&($('tr td.botLeft').html() === 'X'))){
		// 	winner();
		// }
		// if ($('tr td.topLeft').html() === 'O' && ($('tr td.midLeft').html() === 'O' &&($('tr td.botLeft').html() === 'O'))){
		// 	winner();
		// }
		// // DIAGONAL TOPLEFT-BOTRIGHT
		// if ($('tr td.topLeft').html() === 'X' && ($('tr td.midCenter').html() === 'X' &&($('tr td.botRight').html() === 'X'))){
		// 	winner();
		// }
		// if ($('tr td.topCenter').html() === 'O' && ($('tr td.midCenter').html() === 'O' &&($('tr td.botRight').html() === 'O'))){
		// 	winner();
		// }

		// //DIAGONAL TOPRIGHT-BOTLEFT	
		// if ($('tr td.topRight').html() === 'X' && ($('tr td.midCenter').html() === 'X' &&($('tr td.botLeft').html() === 'X'))){
		// 	winner();
		// }

		// if ($('tr td.topRight').html() === 'O' && ($('tr td.midCenter').html() === 'O' &&($('tr td.botLeft').html() === 'O'))){
		// 	winner();
		// }	
		// // MID ROW ACROSS
		// if ($('tr td.midLeft').html() === 'X' && ($('tr td.midCenter').html() === 'X' &&($('tr td.midRight').html() === 'X'))){
		// 	winner();
		// }
		// if ($('tr td.midLeft').html() === 'O' && ($('tr td.midCenter').html() === 'O' &&($('tr td.midRight').html() === 'O'))){
		// 	winner();
		// }

		// //RIGHT COLUMN DOWN
		// if ($('tr td.topRight').html() === 'X' && ($('tr td.midRight').html() === 'X' &&($('tr td.botRight').html() === 'X'))){
		// 	winner();
		// }
		// if ($('tr td.topRight').html() === 'O' && ($('tr td.midRight').html() === 'O' &&($('tr td.botRight').html() === 'O'))){
		// 	winner();
		// }

		// //BOTTOM ROW ACROSS
		// if ($('tr td.botLeft').html() === 'X' && ($('tr td.botCenter').html() === 'X' &&($('tr td.botRight').html() === 'X'))){
		// 	alert('winerr');
		// }
		// if ($('tr td.botLeft').html() === 'O' && ($('tr td.botCenter').html() === 'O' &&($('tr td.botRight').html() === 'O'))){
		// 	alert('winerr');
		// }

		// //MID COLUMN DOWN
		// if ($('tr td.topCenter').html() === 'X' && ($('tr td.midCenter').html() === 'X' &&($('tr td.botCenter').html() === 'X'))){
		// 	alert('winerr');
		// }
		// if ($('tr td.topCenter').html() === 'O' && ($('tr td.midCenter').html() === 'O' &&($('tr td.botCenter').html() === 'O'))){
		// 	alert('winerr');
		// }
		});

	};

	

	
	$('.newBoard').click( function () {
		boardNumber++;
		newBoards();
		$('#board .content:first-child').hide();
		testBoard();


	});

	$('#newGame').click(function () {
		$('#board').hide();
			boardNumber = 1;
			appendBoard();
			$('#winner').html("");
		newGame();

	});


});





		// if ($(this).html() == '') {
		// 	console.log(this);
		// 	$(this).html('X');
		// } else if ($(this).html() == 'X') {
		// 	console.log(this);
		// 	$(this).html('O');
		// }  else if ($(this).html() == 'O' ) {
		// 	console.log(this);
		// 	$(this).html('X');
		// };

		// if ($('tr td.topLeft').html() === 'X' && ($('tr td.topCenter').html() === 'X' &&($('tr td.topRight').html() === 'X'))) {
		// 	alert('top row all x');
		// 	newGame();
		// };
