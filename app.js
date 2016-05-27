$(function() {
	// reset values
	function newGame() {

		

	}

	


	$('td.square').click( function () {

		if ($(this).html() == '') {
			console.log(this);
			$(this).html('X');
		} else if ($(this).html() == 'X') {
			console.log(this);
			$(this).html('O');
		}  else if ($(this).html() == 'O' ) {
			console.log(this);
			$(this).html('X');
		};

		if ($('tr td.topLeft').html() === 'X' && ($('tr td.topCenter').html() === 'X' &&($('tr td.topRight').html() === 'X'))) {
			alert('top row all x');
			newGame();
		};


	});

	$('#new-game').click(function () {

		newGame();

	});


});

