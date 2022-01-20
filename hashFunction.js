//Kevin Njokom
//1-20-2022
// References
//https://www.geeksforgeeks.org/generate-a-random-binary-string-of-length-n/
//https://stackoverflow.com/questions/21354235/converting-binary-to-text-using-javascript/21354328

var joined;
var output = '';
var secondData = '';
var thirdData = '';
var seed = '';

function convert(input){
for (var i = 0; i < input.length; i++){
    output += input[i].charCodeAt(0).toString(2)+ " ";
  }
}


function hash(data){
  data = data.toString();

  for (var i = 1; i < data.length + 1; i++) {

  	if(i>1 && i%7 == 0){

  		 x+= ' ';
  	}
  	else{
 
    var x = (1 + parseInt((Math.random() * 100))) % 2;;
     }
             seed += x.toString();
    }
  
  for(var i = 0; i < data.length; i++){
  	 if(data[i] == ' '){
  	 	secondData+=' ';
  	 }
  	 else{
  	 secondData += (seed[i] ^ data[i]);
  	
  	   }
  	}
  	 

  for(var i = 0; i < data.length; i++){
  	if(data[i] == ' '){
  	 	thirdData+=' ';
  	 }
  	 else{
  	 thirdData += (seed[i] ^ secondData[i]);
  	 } 
   }
  console.log(seed);
  console.log(data);
  console.log(secondData);
  console.log(thirdData);
}


function forward(input){
	convert(input);
	hash(output);

}


function backward(str) {

  console.log( str.split(" ").map(function(elem) {
    return String.fromCharCode(parseInt(elem, 2));
  }).join("") )

}

forward('hello this is a test ');
backward(thirdData);
