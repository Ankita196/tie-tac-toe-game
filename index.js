//

	var move = 1;
	var play = true;

	$("table tr td").click(function () {
		if ($(this).text() == "" && play) {
			if ((move % 2) == 1) {
				$(this).append("X");
				$(this).css('color', "#ffffff");
				
			} else {
				$(this).append("O");
				$(this).css('color', "#5f97eb");
			}
			move++;
            if (checkForWinner() != -1 && checkForWinner() != "") {
				if (checkForWinner() == "X") {
					$('body').append('<div class="winner"><span>Winner</span>player1</div>');
                    $('body').append('<button onclick="location.reload()">Play Again</button>');
					$('.winner').css('background-color', '#5f97eb');
			        $('button').css('color','#5f97eb');
                }else{
					$('body').append('<div class="winner"><span> Winner</span>player2</div>');
                    $('body').append('<button onclick="location.reload()">Play Again</button>');
					$('.winner').css('background-color', '#f398e4');
					$('button').css('color','#f398e4');
                   
                }
				play = false;
			}
         
        }
    });
			
	function rules(){
		alert("1. The game is played on a grid that's 3 squares by 3 squares. 2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares. 3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.");
	}
    

	function checkForWinner() {
		var space1 = $("table tr:nth-child(1) td:nth-child(1)").text();
		var space2 = $("table tr:nth-child(1) td:nth-child(2)").text();
		var space3 = $("table tr:nth-child(1) td:nth-child(3)").text();
		var space4 = $("table tr:nth-child(2) td:nth-child(1)").text();
		var space5 = $("table tr:nth-child(2) td:nth-child(2)").text();
		var space6 = $("table tr:nth-child(2) td:nth-child(3)").text();
		var space7 = $("table tr:nth-child(3) td:nth-child(1)").text();
		var space8 = $("table tr:nth-child(3) td:nth-child(2)").text();
		var space9 = $("table tr:nth-child(3) td:nth-child(3)").text();
		// check rows
		if ((space1 == space2) && (space2 == space3)) {
			return space3;
		} else if ((space4 == space5) && (space5 == space6)) {
			return space6;
		} else if ((space7 == space8) && (space8 == space9)) {
			return space9;
		}
		// check columns
		else if ((space1 == space4) && (space4 == space7)) {
			return space7;
		} else if ((space2 == space5) && (space5 == space8)) {
			return space8;
		} else if ((space3 == space6) && (space6 == space9)) {
			return space9;
		}
		// check diagonals
		else if ((space1 == space5) && (space5 == space9)) {
			return space9;
		} else if ((space3 == space5) && (space5 == space7)) {
			return space7;
		}else {
		// no winner
		           
		return -1;
		
		}
	}

	