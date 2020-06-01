
slideIndexOne = 1;
var slidesOne = document.getElementsByClassName("mySlidesOne");
showSlidesOne(slideIndexOne);

function plusSlidesOne(n) {
  showSlidesOne(slideIndexOne += n,);
}
function showSlidesOne(n) {
  var i;
  if (n > slidesOne.length) {
    slideIndexOne = 1
}    
  if (n < 1) {
    slideIndexOne = slidesOne.length
}
  for (i = 0; i < slidesOne.length; i++) {
    slidesOne[i].style.display = "none";  
  }
  slidesOne[slideIndexOne-1].style.display = "block";  
}


slideIndexTwo = 1;
var slidesTwo = document.getElementsByClassName("mySlidesTwo");
showSlidesTwo(slideIndexTwo);

function plusSlidesTwo(n) {
  showSlidesTwo(slideIndexTwo += n,);
}
function showSlidesTwo(n) {
  var i;
  if (n > slidesTwo.length) {
    slideIndexTwo = 1
}    
  if (n < 1) {
    slideIndexTwo = slidesTwo.length
}
  for (i = 0; i < slidesTwo.length; i++) {
    slidesTwo[i].style.display = "none";  
  }
  slidesTwo[slideIndexTwo-1].style.display = "block";  
}

slideIndexThree = 1;
var slidesThree = document.getElementsByClassName("mySlidesthree");
showSlidesThree(slideIndexThree);

function plusSlidesThree(n) {
  showSlidesThree(slideIndexThree += n,);
}
function showSlidesThree(n) {
  var i;
  if (n > slidesThree.length) {
    slideIndexThree = 1
}    
  if (n < 1) {
    slideIndexThree = slidesThree.length
}
  for (i = 0; i < slidesThree.length; i++) {
    slidesThree[i].style.display = "none";  
  }
  slidesThree[slideIndexThree-1].style.display = "block";  
}

function popup() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ 
        x.className = x.className.replace("show", ""); }, 3000);
  }

