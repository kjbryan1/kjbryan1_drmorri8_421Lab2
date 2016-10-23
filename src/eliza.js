/**
 * Lab 2 - Kevin Bryant and David Morris
 */

//Member Variables 
var fileName = "Data.json";
var fileContent;
var jsonObj;
var fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Call Function
QandA();

function QandA(){
	
	openJson(fileName);
	 
	console.log("Last Name Used:", jsonObj.name);
	
	rl.question('Hello, what is your Name?\n', (answer) => {
		jsonObj.name = answer;
		saveJson(fs);

		console.log('Name Entered:', jsonObj.name);
		  
	});
	
//	rl.close();
}

function saveJson(fs){
	fs.writeFileSync(fileName, JSON.stringify(jsonObj));
}

function openJson(fileName){
	fileContent = fs.readFileSync(fileName);
	jsonObj = JSON.parse(fileContent);
}
