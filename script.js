var teamList = [
				"Cody",
				"Mary",
				"Brian",
				"Alicia",
				"Erik",
				"Michael",
				"Kelly",
				"Chelsea",
				"Luke",
				"Clare",
				"KC",
				"Kaitlin",
				"Michelle",
				"Tracy",
				"Aaron",
				"Terry",
				"Vince",
				"Rom",
				"Steve",
				"Jeanne"
				];

var groupSize = 0;


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function (){
	$(".teamSizeButton").on("click", function(){
		groupSize = $(this).data("teamsize");
		console.log(groupSize);

	});

	$(".refreshButton").on("click", function(){
		var count = 1;

		teamList = shuffle(teamList);

		$(".teamContainer").empty();

		for(var i = 0; i < groupSize; i++){
			$(".teamContainer").append("<div class='nameList' id='group" + (i+1) + "'>Group " + (i+1) + "</div>");
			console.log($(".teamContainer"));
		}

		var animationArray = [];

		for(i = 0; i < teamList.length; i++){
			var targetParent = $('#group' + count);
			var el = "<p>" + teamList[i] + "</p>";
			
			targetParent.append(el);
			el = targetParent.children().last();

			el.hide().delay(i * 100).slideDown();
			

			count++;
			if(count > groupSize){
				count = 1;
			}
		}

	});
});	
















































// function randomNumber(min, max){
// 	return Math.floor(Math.random() * (1 + max - min) + min);
// }
// var people = 20
// var groupNumber = 3
// var tempArray =[];

// 	for (var i = 0; i < people; i++){
// 		tempArray.push(i);
			
// }
// // console.log(tempArray);
// var peopleArray = [];
// // var num = randomNumber();



// Array.prototype.pullRandom = function(){
// 	while (true) {
// 		var num = randomNumber(0, this.length);
// 		if (this[num] != undefined) {
// 			peopleArray.push(this[num]);
// 			this.splice(num, 1);
// 			break;
// 		}
// 	}
	
// }
// for (var i = 0; i < people; i++){
	
// 	tempArray.pullRandom();
// 		console.log(peopleArray);
// }

// console.log(tempArray);
// //

// for (var i = 0; i < people; i++){
// 	console.log( peopleArray.shift() 

// 	);
// }




// $(document).ready(function(){
 
// $("#btn").on("click", function(){

// 	$("#print").append("<div>" + peopleArray + "</div>");
	

// 	});
// });




