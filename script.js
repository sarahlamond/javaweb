var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var catImage = document.getElementById("catImage");
var inputElement = document.getElementById("myInput");

var catBreeds = ['British Shorthair','Persian', 'Ragdoll', 'Sphynx','Burmese', 'Scottish Fold', 'Siamese'];

executeButton.addEventListener("click", function(){
  var currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

function generate(incUserInput) {
  var randomIndex = Math.floor(Math.random() * catBreeds.length);
  var selectedRandomCatBreed = catBreeds[randomIndex];
  outputParagraph.innerText = `${incUserInput}, your ideal cat soulmate is the ${selectedRandomCatBreed} cat yaaay!!!`;
  
  catImage.src = `images/${selectedRandomCatBreed}.jpeg`; 
  catImage.alt = `${selectedRandomCatBreed} image`;
}

function restyle() {

  var styles = [
    { property: 'color', value: getRandomColor() }, 
    { property: 'font-size', value: getRandomSize() }, 
    { property: 'text-decoration', value: getRandomDecoration() }
  ];

  styles.forEach(function(style) {
    outputParagraph.style[style.property] = style.value;
  });
}

function getRandomColor() {
  return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
}

function getRandomSize() {
  return Math.floor(Math.random() * 26 + 20) + 'px';
}

function getRandomDecoration() {
  var decorations = ['none', 'underline', 'overline'];
  return decorations[Math.floor(Math.random() * decorations.length)];
}