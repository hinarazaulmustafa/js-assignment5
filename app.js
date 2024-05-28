// 1. Declare an empty array using JS literal notation to store
// student names in future?

// var studentName =[]


// 2. Declare an empty array using JS object notation to store
// student names in future?

// var studentName ={names:[]}

// we can use .push method to add the name, e.g : studentName.names.push("hina")

// 3. Declare and initialize a strings array?



// var namesArray=["hina","fatima","hasan","hussain"]

// 4. Declare and initialize a numbers array?

// var numArray =[12,13,14,15];

// 5. Declare and initialize a boolean array?

// var booleanArray =[true,false,true,false]

// 6. Declare and initialize a mixed array?

// var mixedArray =["hina", "fatima",78,true,null,"hasan"];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


// var pak_edu_qualification =[ "ssc",
// "HSc",
// "Bcs",
// "BS",
// "BCOM",
// "MS",
// "M.PHILL",
// "PHD",]






// console.log(pak_edu_qualification)

// document.write("<b> QUALIFICATIONS:");
// document.write(pak_edu_qualification);



// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:



// var studentName=["Hussain","Hasan","Fatima"]
// var studentScore=[450,480,400]
// var totalscore= 500;
// var percentage = [(studentScore[0]/totalscore)*100,(studentScore[1]/totalscore)*100,(studentScore[2]/totalscore)*100,]

// console.log(studentName[0] + ': ' + studentScore[0] + ': ' + percentage[0] + '%');
// console.log(studentName[1] + ': ' + studentScore[1] + ': ' + percentage[1] + '%');
// console.log(studentName[2] + ': ' + studentScore[2] + ': ' + percentage[2] + '%');


// document.write(studentName[0] + ': ' + studentScore[0] + ': ' + percentage[0] + '%'+"</br>");
// document.write(studentName[1] + ': ' + studentScore[1] + ': ' + percentage[1] + '%'+"</br>");
// document.write(studentName[2] + ': ' + studentScore[2] + ': ' + percentage[2] + '%'+"</br>");


// 9. Initialize an array with color names. Display the array
// elements in your browser.

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.


// var colorArray=["red","blue","green"]

// console.log(colorArray)
//  var newcolor = prompt("what color u want to add in the begning")
// colorArray.unshift(newcolor)

// console.log(colorArray)


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var colorArray=["red","blue","green"]

// console.log(colorArray)
//  var newcolor = prompt("what color u want to add in the end")

//  colorArray.push(newcolor)

//  console.log(colorArray)


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// var colorArray=["red","blue","green"]
// console.log(colorArray)


// colorArray.unshift("Orange", "Purple");

// console.log(colorArray)


// d. Delete the first color in the array. Display the updated
// array in your browser.



// var colorArray=["red","blue","green"]

// console.log(colorArray)

// colorArray.shift(0)

// console.log(colorArray)




// e. Delete the last color in the array. Display the updated
// array in your browser.


// var colorArray=["red","blue","green"]

// console.log(colorArray)

// colorArray.pop()

// console.log(colorArray)







// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser

// var colorArray=["red","blue","green"]

// console.log(colorArray)


// var index= +prompt("at which index u want to put a new color")

// var addNewColor = prompt("what color u want to add")


// colorArray.splice(index,0,addNewColor)


// console.log(colorArray)



// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colorArray=["red","blue","green","yellow","black","purple","orange"]

// console.log(colorArray)


// var index= +prompt("at which index u want to delete a color")
// var colorDelete = +prompt("how many colors u want to delete?")

// colorArray.splice(index,colorDelete)


// console.log(colorArray)



// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.




// var studentScore =[320,230,480,120]

// console.log(studentScore)


// studentScore.sort((a, b) => a-b);

// console.log(studentScore)




// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.


// var cities =["karachi","lahore","islamabad","peshawar","Quetta","faislabad","quetta","gawadar","murre","naran","kaghan","hunza"]

// console.log(cities);


// var selectedCities =[]
// selectedCities= cities.slice(0,3);

// console.log(selectedCities)


//  12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method




// var arr=["this","is","my","cat"]
// console.log(arr);
// var str= arr.join("");



// console.log(str)






// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)



// var newCities =["karachi","lahore","islamabad","peshawar","Quetta","faislabad","quetta","gawadar","murre","naran","kaghan","hunza"]

// // To create a new array and store values in a FIFO (First In First Out) order, you can use the push method to add elements to the end of the array, and the shift method to remove elements from the beginning of the array.                                                

// console.log(newCities)

// newCities.push("larkana");

// console.log(newCities);

// console.log((newCities.shift()))

// console.log(newCities)


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var newCities =["karachi","lahore","islamabad","peshawar","Quetta","faislabad","quetta","gawadar","murre","naran","kaghan","hunza"]


// console.log(newCities)
// // to make this happen we will use pop n push method, .pop will delete the last value or array n .push will add the value at the end of the array

// // last in from .push


// newCities.push("kohat");
// console.log(newCities)

// console.log(newCities.pop())

// console.log(newCities)

// // to delete last value or to use it---which means last out
// console.log(newCities.pop())




// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:



// var phoneManufacturers =["APPLe","Samsung","Motorola","Nokia","Sony","Haier"]

//     document.write("<select>");
//     document.write("<option >" + "list of companies" + "</option>");

// 	document.write("<option>" + phoneManufacturers[0] + "</option>");
// 	document.write("<option>" + phoneManufacturers[1] + "</option>");
// 	document.write("<option>" + phoneManufacturers[2] + "</option>");
// 	document.write("<option>" + phoneManufacturers[3] + "</option>");
// 	document.write("<option>" + phoneManufacturers[4] + "</option>");
// 	document.write("<option>" + phoneManufacturers[5] + "</option>");
// 	document.write("</select>");