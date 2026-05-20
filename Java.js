const form = document.getElementById("form");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;

  if(name === "") {
    alert("Please enter a name");
  } else {
    alert("Form Submitted");
  }

});