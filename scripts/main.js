$("#restart-button").hide();

function UserInfo(username,password){
	this.username = username;
	this.password = password;
}

var boardSet = {

	boardP1:[24],
	boardTurnP1: [24]
}

var GameManager = function(){

	this.init = function(){

		this.newGame();

		$("#info-submit1").on('click', function(e){
			e.preventDefault();
			var useName1 = $("#username1").val();
			var usePass1 = $("#password1").val();

			gameManager.gameSetup1(useName1,usePass1);
			$('#userModal1').modal('hide')
			$('#userModal2').modal('show')

			$("#info-submit2").on('click', function(e){
				e.preventDefault();
				var useName2 = $("#username2").val();
				var usePass2 = $("#password2").val();

				gameManager.gameSetup2(useName2,usePass2);
				$('#userModal2').modal('hide')

				$('#userModal2').on('hidden.bs.modal', function(){
			    $(this).find('form')[0].reset();
				});
			})

			//This prevents the previous user inputs from showing up when New Game is pressed again.
			$('#userModal1').on('hidden.bs.modal', function(){
			    $(this).find('form')[0].reset();
			});

			$("#newgame-button").hide();
			$("#restart-button").show();

			// for (var i = 0; i < boardSet.boardP1.length; i++){
			// 	$("#cell"+i).onClick = console.log("I'm potato " + i);
			// }
			
		});
	}

	this.newGame = function(){

		$("#newgame").click(function(){
			
			boardSet.boardP1 = new Array();
			boardSet.boardTurnP1 = new Array();

		});

		this.userInfo1 = new UserInfo();
		this.userInfo2 = new UserInfo();
	}

	this.gameSetup1 = function(username, password){
		this.userInfo1.username = username;
		this.userInfo1.password = password;

	}

	this.gameSetup2 = function(username,password){
		this.userInfo2.username = username;
		this.userInfo2.password = password;
	}

	// this.shipDrop = function(e){
		
	// }

};

var gameManager = new GameManager();
gameManager.init();
