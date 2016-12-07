//Variables
//===============================================================================
//Characters
var charName = ["Natsu Dragneel", "Erza Scarlett", "Lucy Heartfilia", "Gray Fullbuster" ];
var charHealth = [3000, 3200, 2900, 3100];
var charPic =['../images/natsu.png','../images/erza.png', '../images/lucy.png','../images/gray.png'];
var charHit=[190,200,180,185];

//user and opponent variables
var userHealth;
var userAttack;
var opponentHealth;
var opponentAttack;

var character;


//Functions
//===============================================================================
function newGame(){
	for(var i=0; i<charName.length; i++){
		var character =$('<button>');
		var characterPic=$('<img>');
		characterPic.attr('src','../images' + charPic[i]).addClass('picStyle');
		character.addClass('startStyle').attr('id', characterName[i]);
		character.attr({'data-hp':charHealth[i]});
	}
}
//click on start
	//pictures of the characters show up to choose.

//click on character
//remaining characters are opponents and move to different part of the screen.
//




//Gameplay
//===============================================================================
$(".close").on("click", function(){
	$('.alert').remove();
});

$("#startButton").on("click", function(){
	$("#startButton").on("click", function(){
		$(this).off("click");
		newGame();
	});
});
  // create a div
  //   containing a p tag w/ name from charName
  //   containing an img tag w/ source from charPic
  //   containing a p tag w/ health from carHealth








