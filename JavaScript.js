<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" /><!-- defines the character set and is capable of displaying 1,112,064 different>
<meta name="viewport" content="width=device-width, initial-scale=1" /> <!-- helps properly display the of monitor size -->
<title> JavaScript.js  </title>
</head>
<body>
let Fname = prompt("Please enter your first name:");

<p> Hello " + Fname + "! Welcome to our webpage.</p>

const myPi = 3.1415926;

let myFavNum = Number(prompt("Enter your favorite number:"))

let myArea = myPi * (myFavNum * 2)

document.write("<p>Your first name is: " + Fname + "</p>")
document.write("<p>Your favorite number (radius) is: " + myFavNum + "</p>")
document.write("<p>The value of Pi is: " + myPi + "</p>")
document.write("<p>The area of the circle is: " + myArea + "</p>")
</body
</html>
document.write(
  "<p>Hello " + Fname +
  ", you entered " + myFavNum +
  " as your favorite number. If that was the radius of a circle, the circle’s area would be " +
  myArea + ".</p>")
  