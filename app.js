

$(function() {
	var boardNumber = 1;
	newBoards();
	testBoard();
	// reset values
	function newGame() {
		console.log('NEW GAME');
		$('#board').remove();
		boardNumber = 1;
		appendBoard();
		testBoard();
	};

	function appendBoard () {
		$('.content').append('<div id="board"></div>');
		$('#board').addClass('board' + boardNumber).append('<div class="content"><h3> Board #' + boardNumber+ '</h3><table class="board '+ boardNumber + '"><tr id="row1"><td class="square topLeft"><td class="square v topCenter"><td class="square topRight"><tr id=row2><td class="square h midLeft"><td class="square h midCenter v"><td class="square h midRight"><tr id=row3><td class="square botLeft"><td class="square v botCenter"><td class="square botRight"></table>');
		testBoard();
	};
	
	function newBoards() {
		// append board and board # to html
		$('#board').addClass('board' + boardNumber).append('<div class="content"><h3> Board #' + boardNumber+ '</h3><table class="board'+boardNumber+'"><tr id="row1"><td class="square topLeft"><td class="square v topCenter"><td class="square topRight"><tr id=row2><td class="square h midLeft"><td class="square h midCenter v"><td class="square h midRight"><tr id=row3><td class="square botLeft"><td class="square v botCenter"><td class="square botRight"></table></div>');
		// New game button
		$('button#newGame').click( function () {
			$('#board').remove();
			boardNumber = 1;
			appendBoard();
			testBoard();
		});
	};

	function testBoard() {
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

		// TOP ROW ACROSS
		if ($('tr td.topLeft').html() === 'X' && ($('tr td.topCenter').html() === 'X' &&($('tr td.topRight').html() === 'X'))){
			winner();
		}
		if ($('tr td.topLeft').html() === 'O' && ($('tr td.topCenter').html() === 'O' &&($('tr td.topRight').html() === 'O'))){
			winner();
		}

		// LEFT COLUMN DOWN
		if ($('tr td.topLeft').html() === 'X' && ($('tr td.midLeft').html() === 'X' &&($('tr td.botLeft').html() === 'X'))){
			winner();
		}
		if ($('tr td.topLeft').html() === 'O' && ($('tr td.midLeft').html() === 'O' &&($('tr td.botLeft').html() === 'O'))){
			winner();
		}
		// DIAGONAL TOPLEFT-BOTRIGHT
		if ($('tr td.topLeft').html() === 'X' && ($('tr td.midCenter').html() === 'X' &&($('tr td.botRight').html() === 'X'))){
			winner();
		}
		if ($('tr td.topCenter').html() === 'O' && ($('tr td.midCenter').html() === 'O' &&($('tr td.botRight').html() === 'O'))){
			winner();
		}

		//DIAGONAL TOPRIGHT-BOTLEFT	
		if ($('tr td.topRight').html() === 'X' && ($('tr td.midCenter').html() === 'X' &&($('tr td.botLeft').html() === 'X'))){
			winner();
		}

		if ($('tr td.topRight').html() === 'O' && ($('tr td.midCenter').html() === 'O' &&($('tr td.botLeft').html() === 'O'))){
			winner();
		}	
		// MID ROW ACROSS
		if ($('tr td.midLeft').html() === 'X' && ($('tr td.midCenter').html() === 'X' &&($('tr td.midRight').html() === 'X'))){
			winner();
		}
		if ($('tr td.midLeft').html() === 'O' && ($('tr td.midCenter').html() === 'O' &&($('tr td.midRight').html() === 'O'))){
			winner();
		}

		//RIGHT COLUMN DOWN
		if ($('tr td.topRight').html() === 'X' && ($('tr td.midRight').html() === 'X' &&($('tr td.botRight').html() === 'X'))){
			winner();
		}
		if ($('tr td.topRight').html() === 'O' && ($('tr td.midRight').html() === 'O' &&($('tr td.botRight').html() === 'O'))){
			winner();
		}

		//BOTTOM ROW ACROSS
		if ($('tr td.botLeft').html() === 'X' && ($('tr td.botCenter').html() === 'X' &&($('tr td.botRight').html() === 'X'))){
			alert('winerr');
		}
		if ($('tr td.botLeft').html() === 'O' && ($('tr td.botCenter').html() === 'O' &&($('tr td.botRight').html() === 'O'))){
			alert('winerr');
		}

		//MID COLUMN DOWN
		if ($('tr td.topCenter').html() === 'X' && ($('tr td.midCenter').html() === 'X' &&($('tr td.botCenter').html() === 'X'))){
			alert('winerr');
		}
		if ($('tr td.topCenter').html() === 'O' && ($('tr td.midCenter').html() === 'O' &&($('tr td.botCenter').html() === 'O'))){
			alert('winerr');
		}
		});

	};

	function winner(){
		$('#winner').fadeIn(2000).fadeOut(2000);
		$('tr td.square').click( function () {

			alert('Game is over');
		});
	}

	
	$('.newBoard').click( function () {
		boardNumber++;
		newBoards();
		$('#board .content:first-child').remove();
		testBoard();


	});

	$('#newGame').click(function () {

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
