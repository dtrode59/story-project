var veryHungry = false;

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Little Red Rideing Hood "; // title

  document.getElementById('author').innerHTML="David Rodes"; // author


  // All of your code goes under here
  var story = 'Little Red Rideing Hood has been in the woods for ' + many() + ' hours. '+ path() + 'Eventually she finds her grandmas house. ' + delicious(); // Create the text

  var story2 = "While traveling through the woods with her basket filled with food, Red Riding Hood goes to a three-way path. " + path()


  printToPage(story2); // Print the text to the webpage
}
// Put your functions below here:
function many() {
  let hours = Math.floor(random(1, 6)); // Random number rounded down
  if(hours > 3) {
    veryHungry = true;
  }
  return hours
}
function delicious() {
  if(veryHungry == true) {
    return "Little Red Rideing Hood is very hungry, so she eats some of the food in the basket."
  } else {
    let inspection = inspects();
    return inspection;
  }
}
function inspects() {
  let insp = random(1, 6);
  if(insp > 5) {
    return "Little Red Rideing Hood sees fresh wolf tracks leaving the house!"
  } else {
    return "Little Red Rideing Hood inspects the house and finds her grandma. She goes inside."
  }
}


function path() {
  let dice = Math.floor(random(1,7));
  if(dice == 5 || dice == 6) {
    // goes left
    return "Little Red Riding Hood sees a three-way path. Which way should she go?" + left()
  } else if(dice == 3 || dice == 4) {
    // goes right
    return "Little Red Riding Hood sees a three-way path. Which way should she go?" + right()
  } else if(forward) { //fix this!
    // goes forward
    return "Little Red Riding Hood sees a three-way path. Which way should she go?" + forward()
  }
  
}

function wolf() {
  let dice = random(1, 6);
  if(dice > 3) {
    return "She runs back to her house."
  }
  if(dice<3) {
    return "She waits, and the wolf comes up to her. The wolf comes up and asks,what’s in your basket?" + basket();

  }
}

function basket() {
  return" The wolf is super hungry and eats the girl immediately."+ left();
  

  return" The wolf isn't hungry and is uninterested in the girl so he leaves."+ right();

  

  return" The wolf follows her secretly to her grandmas house."+ forward();

}
function left() {
  return "She goes left"
}
function right() {
  return "She goes right"
}
function forward() {
  return "She goes forward. On the way little red riding hood feels something watching her and spots a wolf. " + wolf(); 
}

//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}