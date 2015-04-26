function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}
var people = 20
var groupNumber = 3
var tempArray =[];

	for (var i = 0; i < people; i++){
		tempArray.push(i);
			
}
// console.log(tempArray);
var peopleArray = [];
// var num = randomNumber();



Array.prototype.pullRandom = function(){
	while (true) {
		var num = randomNumber(0, this.length);
		if (this[num] != undefined) {
			peopleArray.push(this[num]);
			this.splice(num, 1);
			break;
		}
	}
	
}
for (var i = 0; i < people; i++){
	
	tempArray.pullRandom();
		console.log(peopleArray);
}

console.log(tempArray);
//

for (var i = 0; i < people; i++){
	console.log( peopleArray.shift() 

	);
}




$(document).ready(function(){
 
$("#btn").on("click", function(){

	$("#print").append("<div>" + peopleArray + "</div>");
	

	});
});




