// variables to store input and generated numbers
let inputA;
let generatedNumbers = [];

// function to open tabs and update active class
function openTab(event, tabName) {
  // hide all tab contents
  const tabContents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // remove active class from all tablinks
  const tabLinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // show current tab content and add active class to current tablink
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}

// function to move to next tab and store input value
function nextTab(x = undefined) {
  inputA = document.getElementById("inputA").value;
  document.getElementsByClassName("tablink")[1].disabled = false;
  document.getElementsByClassName("tablink")[1].click();
  if (x == "tab1") document.querySelector(".btntab1").disabled = true;
  if (x == "tab2") {
    document.getElementsByClassName("tablink")[2].disabled = false;
    document.getElementsByClassName("tablink")[2].click();
  }
}

// function to generate random numbers and display in table
function generateNumbers() {
  // generate A random numbers between -1000000
  for (let i = 0; i < inputA; i++) {
    generatedNumbers.push(Math.floor(Math.random() * 2000001) - 1000000);
  }

  // create table rows and cells to display generated numbers
  let table = document.getElementById("numbersTable");
  let tableHTML = "<tr><th>No.</th><th>Number</th></tr>";
  for (let i = 0; i < generatedNumbers.length; i++) {
    tableHTML += "<tr><td>" + (i + 1) + "</td><td>" + generatedNumbers[i] + "</td></tr>";
  }
  table.innerHTML = tableHTML;

  document.querySelector(".btnnext2").hidden = false;
}

// function to find the smallest positive integer missing from the generated numbers
function findMissingNumber() {
  // create a Set to store the generated numbers
  let numberSet = new Set(generatedNumbers);

  // iterate from 1 until a missing positive integer is found
  let missingNumber = [...numberSet].sort((a, b) => a - b).filter((a) => a > 0)[0] - 1;

  // display the missing number
  document.getElementById("missingNumber").innerHTML = "The smallest missing positive integer is: " + missingNumber;
}
