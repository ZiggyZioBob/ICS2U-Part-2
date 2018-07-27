var arrayToSort = [];//Here the initial empty array is created
var threshold = 15;//We establish a threshold for the sorting process to limit the number of values
var maximumSize = 100;//We establish a maximum size for the numbers that are to be randomly generated
var numElements = Math.floor(Math.random() * threshold);//The number of numbers are randomly generated

$(document).ready(function() {//Jquery function telling the following to be preformed immediately upon page loading

	loop("Initialdisplay");//Here the original randomly generated array is created

});

function Bruteforce() {//The function Bruteforce is put into place that responds to a button that can be viewed on the html document
	var SearchNumber1 = parseInt(document.getElementById("Theinputbox").value);//The number is identified from the input text box
	document.getElementById("Theinputbox").value = "";//The text box is cleared
	var ACounter = 0//A counter is established that will allow for the breaking of the for function below
	for(var j = 0; j < arrayToSort.length; j++){//A for function that would run through as many parts of the array as necessary to discover or to not discover the input value given by the user in the array
		if(arrayToSort[j] == SearchNumber1){//An if function that asks whether or not the the user input value corresponds with the number at question of the array of which the loop is investigating
			$("#Bruteforceresult").html("True");//If the input value does correspond with the array value, the statement is deemed as true and printed on screen
			//j = arrayToSort.length;//J is set to a value that would allow for the breaking of the for function
			ACounter = ACounter + 1;//A counter is set to a value that would not trigger a false statement later on in the function
			break;
		}
	}
	if(ACounter == 0){//An if function tests whether or not a corresponding value has been found in the array
		$("#Bruteforceresult").html("False");//Should ACounter be 0, that would mean that none were found and the statement is deemed as false and printed on the screen
	}
}

function Binarysearch() {//The function Binarysearch is put into place that responds to a button that can be viewed on the html document
	var SearchNumber2 = parseInt(document.getElementById("Theinputbox").value);//The user input number is identified from the text box and is assigned to a variable
	document.getElementById("Theinputbox").value = "";//The text box is cleared
	BubbleSortit(arrayToSort);//A bubblesorting is implemented using my own function to sort the numbers so that a binary sort can actually happen
	var difference = arrayToSort.length;//The variable difference is set to the length of the array, which will be used to determine the number of numbers still in the array and as a exit variable for the while function below
	var TheMiddle = Math.ceil(arrayToSort.length/2);//The variable TheMiddle is created as the halfway point of the original array
	var TheOldArray = arrayToSort;//The original array is assigned to a variable that will be constantly changing in the while function below
	var TheNewArray = []//A new placeholder array is created
	if(SearchNumber2 == TheOldArray[0]){//A test is conducted to see if the first value is the user given value
		difference = 0;//If true, there would be no need for the while loop and the difference variable is set at zero to stop it from happening
		var Indicator = 1;//An indication that would allow for the true to be displayed later
	}
	if(SearchNumber2 == TheOldArray[TheOldArray.length-1]){//A test is conducted to see if the second value is the user given value
		difference = 0;//If true, there would be no need for the while loop and the difference variable is set at zero to stop it from happening
		var Indicator = 1;//An indication that would allow for the true to be displayed later
	}
	if(SearchNumber2 > arrayToSort[arrayToSort.length-1]){//A test to see if the value inputed by the user is larger than the largest value in the array
		difference = 0;//If true, there would be no need for the while loop and the difference variable is set at zero to stop it from happening
		var Indicator = 0;//An indication that would allow for the false to be displayed later
	}
	if(SearchNumber2 < arrayToSort[0]){
		difference = 0;//If true, there would be no need for the while loop and the difference variable is set at zero to stop it from happening
		var Indicator = 0;//An indication that would allow for the false to be displayed later
	}
	while(difference > 0){//A while function that uses the variable difference to determine whether or not it can break. Difference will only become zero once the user input value is found or it is determined that it does not exist
		if(SearchNumber2 > TheOldArray[TheMiddle]){//The if function that compares the middle value of the array from the previous loop to the user input value, if the user input value is greater, it moves on, if not, it goes to else
			TheNewArray = TheOldArray.slice(TheMiddle, TheOldArray.length);//The placeholder array TheNewArray is used to make a copy of the top sliced version of the previous array
			TheOldArray = TheNewArray;//The variable for the previous array is set to this new array so that this process can be done all over again in the very likely case that the middle will not equal the user input value
			TheMiddle = Math.ceil(TheOldArray.length/2)//A new middle value is set for the next repetition
			difference = Math.ceil(difference/2);//The difference is cut in half just like the size of the array itself
			if(TheOldArray[TheMiddle] == SearchNumber2){//A test to see if the new middle is equal to the user given input value
				difference = 0;//If so, the difference is set a 0 so that the while loop can break
				var Indicator = 1;//An indication that would allow for the true to be displayed later 
			}
		}
		else
		{
			TheNewArray = TheOldArray.slice(0, TheMiddle);//In the case that the middle is larger than the user given input value, the placeholder array is used to store the new array that is the bottom sliced version of the old array
			TheOldArray = TheNewArray;//The variable for the previous array is set to this new array so that this process can be done all over again in the very likely case that the middle will not equal the user input value
			TheMiddle = Math.ceil(TheOldArray.length/2)//A new middle value is set for the next repetition
			difference = Math.ceil(difference/2);//The difference is cut in half just like the size of the array itself
			if(TheOldArray[TheMiddle] == SearchNumber2){//A test to see if the new middle is equal to the user given input value
				difference = 0;//If so, the difference is set a 0 so that the while loop can break
				var Indicator = 1;//An indication that would allow for the true to be displayed later 
			}
		}
		
		if(difference == 1){//If there is one value that is left this if function will be activated to determine if that last value is the user input value or not
			if(SearchNumber2 != TheOldArray[0]){//If the last value does not equal the user input value, the following is triggered
				difference = 0;//This allows for the while function to be terminated
				var Indicator = 0;//This will allow for the statement to be false later on
			}
			else 
			{
				difference = 0;//In pretty likely case of the final number being equal to the user input value, the while function is terminated
				var Indicator = 1;//And an indicator will allow for the statement to be dispalyed as true later on
			}
		} 
	}
	if(Indicator == 1){//Should the indicator say that the user input value was found, this if will be true
		$("#Binarysearchresult").html("True");//And thus true will be displayed
	}
	else//In the other case...
	{
		$("#Binarysearchresult").html("False");//It will be displayed as false
	}
}

function NewSearch() {//This button is for the user to press at their leisure to refresh the page
	location.reload();
}
//This is a function that generates a random array with the given information
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