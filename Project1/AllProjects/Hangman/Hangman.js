	var myArray = [1,2,3,4,5];
	var mySecondArray = [6,7,8,9,10];
	var isDisplayed = 0;
function abc() {
	if(isDisplayed == 0)
	{
	document.getElementById("MyID").innerHTML = "You clicked me!";
	isDisplayed = 1;
	} 
	else 
	{
		document.getElementById("MyID").innerHTML = "";
		isDisplayed = 0;
}
}
var clickrate = 0;
$("#jqueryButton").click(function(){
	clickrate = clickrate + 1;
	if(clickrate <= 10){
	$("#jqueryButton").html(clickrate);
}
});

$("#jqueryP").ready(function()
{
	var total = 0;
	for(var i = 0; i < myArray.length; i++){
		total = total + myArray[i];
	}
	var average = total/myArray.length;
	$("#jqueryP").html(average);
});

$("#jqueryPP").ready(function()
{
	var totally = [];
	for(var j = 0; j < myArray.length; j++){
		totally[j] = myArray[j] - mySecondArray[j];
	}
	for(var k = 0; k < myArray.length; k++){
	$("#jqueryPP").append(totally[k]);
}
});




var Life = 5;//A variable that describes the number of lives the user has
function ButtonAction() //A function called ButtonAction is created, it reacts when the user presses a button indicated on the html document
{
		var letter = document.getElementById("Thebox").value;//A variable called letter is assigned to whatever the user inputs into the box on the html document
		var letters = letter.toUpperCase();//A new variable called letters is created that is the same thing as letter but makes anything the user uppercase
		
		if (letters == "D"){//an if statement is created that questions whether or not the variable letters is the letter d
			document.getElementById("DisplayZone1").innerHTML = "D";//Should the if statement be true, this action is exeuted that makes the first button a D, which would give the user the idea that they guessed correctly
		}
		else if (letters == "A"){//Should the if statement written above be false, the computer would be redirected to this, which then tests whether or not the input adheres to nthe letter A
			document.getElementById("DisplayZone2").innerHTML = "A";//If true, the second button is replaced with A
		}
		else if (letters == "B"){//Same thing goes for this as the one above, except with the third button
			document.getElementById("DisplayZone3").innerHTML = "B";//If true the third button is replaced with B
		}
		else //Should all the ifs above are false this would be executed
		{
			document.getElementById("Lives").innerHTML = Life - 1;//The first action is to lower the amount of lives physically on the screen
			Life = Life - 1;//The variable life is lowered
		}

		document.getElementById("Thebox").value = "";//This clears the box of the user's input
		
		if (Life == 0){//An if statement checking whether or not the user has run out of lives
			alert("You suck game's over!!!");//If the above is true, an alert appears and tells the user that they suck and that the game is over for them
			location.reload();//The page is reloaded
		}

		if (document.getElementById("DisplayZone1").innerHTML == "D" &&//An if statement checking whether or not the user has won
		 document.getElementById("DisplayZone2").innerHTML == "A" &&//They must check if all threee button boxes have been filled
		 document.getElementById("DisplayZone3").innerHTML == "B"){//If so it sends the user on
			alert("You're awesome!!!");//The user is told that they are awesome
			location.reload();//The page is reloaded
		}
}

var thisArray = [];
var threshold = 1000;
var maximumSize = 100;

$(document).ready(function() {

	var Elements = Math.floor(Math.random() * threshold);

	$("#Thislist").append("[");

	for(var i = 0; i < Elements; i = i + 1)
	{
		var num = (Math.floor(Math.random() * maximumSize));
		thisArray.push(num);

		if(i == Elements - 1){
			$("#Thislist").append(num);
		} else
		{
			$("#Thislist").append(num + ", ");

		}

	}

	$("#Thislist").append("]");

});

var thisArray = [];
var threshold = 1000;
var maximumSize = 100;

$(document).ready(function() {

	loop();

});

$("#BubbleSort").click(function(){

	$("#Timenow1").html(new Date());

	$("#BubbleSortResult").html(loop());

	$("#Timeend1").html(new Date());

});

$("#InsertionSort").click(function(){

	$("#Timenow2").html(new Date());

	$("#Timeend2").html(new Date());

});

$("#SelectionSort").click(function(){

	$("#Timenow3").html(new Date());

	$("#Timeend3").html(new Date());

});

function loop(){
	var Elements = Math.floor(Math.random() * threshold);

	$("#MyId").append("[");

	for(var i = 0; i < Elements; i = i + 1)
	{
		var num = (Math.floor(Math.random() * maximumSize));
		thisArray.push(num);

		if(i == Elements - 1)
			$("#MyId").append(num);
		 else
		
			$("#MyId").append(num + ", ");

	}

	$("#MyId").append("]");

}


var arrayToSort = [];
var threshold = 45000;
var maximumSize = 100;

//the number of elements to place in the array
var numElements = Math.floor(Math.random() * threshold);


//display the array when the document loads
$(document).ready(function() {

	loop("myList");

});


//execute the bubble sort algorithm
$("#bubbleSort").click(function() {

	//current time on start
	$("#currentTime1").html(new Date());

	//Starting here are comments by me

	//(loop());//The loop function is being executed so that there exists hard values in the variable arraySort

	BubbleSortit(arrayToSort);//Here we have the function BubbleSortit being executed therefore allowing for the values to be sorted

	$("#bubbleSortResult").html(loop("bubbleSortResult"));//The now sorted array is displayed on the screen 

	//My comments end here

	//current time once complete
	$("#endTime1").html(new Date());


});

//execute the insertion sort algorithm
$("#insertionSort").click(function() {

	//current time on start
	$("#currentTime2").html(new Date());

	$("#insertionSortResult").html(loop("insertionSortResult"));
	//write insertion sort here

	//current time once complete
	$("#endTime2").html(new Date());

});

//execute the selection sort algorithm
$("#selectionSort").click(function() {

	//current time on start
	$("#currentTime3").html(new Date());

	$("#selectionSortResult").html(loop("selectionSortResult"));
	
	//write selection sort here

	//current time once complete
	$("#endTime3").html(new Date());

});

function loop(myId) {
	$("#" + myId).append("[");

	if(arrayToSort.length == 0)
	{
		//populate the array with random numbers
		for(var i = 0; i < numElements; i = i + 1)
		{
			var num = Math.floor(Math.random() * maximumSize);
			arrayToSort.push(num);

			if(i == numElements - 1)
				$("#" + myId).append(num);
			else
				$("#" + myId).append(num + ", ");
		}
	}
	else
	{
		for(var i = 0; i < numElements; i = i + 1)
		{
			if(i == numElements - 1)
				$("#" + myId).append(arrayToSort[i]);
			else
				$("#" + myId).append(arrayToSort[i] + ", ");
		}
	}
	$("#" + myId).append("]");
	
}

//Here is my function 

function BubbleSortit(arrayToSort){//The function is introduced and defined
	var Thisvariable = 0;//A variable is defined, this variable will become a placeholder for values later on in the function
	var Thosevariable = 0;//Another variable is defined, this variable will also become a placeholder
	var ThatCounter = 0;//A third variable is defined, this variable will be used to keep track of whether or not there has been a switch in values
	do//The do function begins to get executed
	{
		ThatCounter = 0;//This is used to reset the Counter function after each loop so that there is the possiblity of the function exiting the loop should they be in order and there is no switch
		for(var j = 0; j < arrayToSort.length-1; j++){//A for function is put into place to loop the function over as many times as the array is long 
			if(arrayToSort[j] > arrayToSort[j+1]){//This if function compares two values side by side and determines if the value to the right is smaller than that of the left, if so, the for loop is executed, and if not, the for loop will move on to the next pair of numbers
				Thisvariable = arrayToSort[j];//This is used to assign the first number to a variable
				Thosevariable = arrayToSort[j+1];//This is used to assign the second number to another variable
				arrayToSort[j] = Thosevariable;//The first number is then changed to the second variable
				arrayToSort[j+1] = Thisvariable;//The second number is changed to the first variable, therefore completing the switch
				ThatCounter = ThatCounter + 1;//The Counter function increases to indicate that there has been a switch made that will later ensure that the loop will run again
			}
		}
			if(ThatCounter == 0){//This if function determines whether or not there has been a switch to any values in the array
			ThatCounter = -1;//If not, the Counter is set to a state that will allow for the while loop function to terminate
		}
	} while (ThatCounter+1 > 0);//This is the while function of the do while that makes the function repeat should there have been any switches
}