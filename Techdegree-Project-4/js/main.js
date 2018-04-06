// Lightbox options
lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
});

// Change text to lower case
var searchBar = document.getElementById('search-bar');

searchBar.addEventListener('keyup', function userInputToLowerCase() {
  console.log(searchBar.value.toLowerCase());
  var userInput = searchBar.value.toLowerCase();

  // Display photos if user types words that match caption
  for (i = 0; i <= 11; i += 1) {
    var photoCaption = document.getElementsByTagName('a')[i].getAttribute('data-title').toLowerCase();
    var photoElement = document.getElementsByTagName('a')[i];
    console.log(photoCaption);
    if (photoCaption.includes(userInput)) {
      photoElement.style.display = "";
      } else {
      photoElement.style.display = "none";
    }
  }
});
