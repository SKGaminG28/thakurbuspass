// Load the date value from an external file
fetch('date.txt')
  .then(response => response.text())
  .then(dateValue => {
    // Update the HTML element with the date value
    document.getElementById('start-date').innerHTML = "10/04/2023";
    document.getElementById('end-date').innerHTML = "09/08/2023";

    // bus pass no 
    document.getElementById('pass-no').innerHTML = "7504042396";           // 10 digits only
  })
  .catch(error => console.error(error));
