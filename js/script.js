// //Arrays
// var array = new Array();
// array[0] = "Dannie"
// array[3]={course:"HTML"}

// // console.log(array);
// console.log(array[3].course);

//Short had array creation
// var names =[
// 	"dannie",
// 	"fu"];
// console.log(names);

// for (var i =0; i < names.length;i++) {
// 	console.log("Hello " + names[i]);
// }

// names[100]="James";
// for (var i =0; i < names.length;i++) {
// 	console.log("Hello " + names[i]);
// }

// var names2 = ["Dannie","James"];

// var myObj = {
// 	name: "Dannie",
// 	course: "HTML",
// 	platform: "Coursera"
// };

// for (var prop in myObj) {
// 	console.log(prop + ": " + myObj[prop]);
// };

// names2.greeting = "Hi!";

// console.log(names2);

// for (var name in names2) {
// 	console.log("Hello " + names2[name]);
// }

function makeMultiplier (multiplier) {

	function b () {
		console.log("Multiplier is: " + multiplier);

	}

	b();

	return (
		function (x) {
			return multiplier * x;
		}
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));



