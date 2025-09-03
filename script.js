  // Array for adding student names
  let students = [];

  //Function to add a student - push()
  function addStudent() {
    const name = document.getElementById('studentName').value;
    // Check if the name is not empty
    if (name) {
      students.push(name); // Add the student name to the array
      document.getElementById('studentName').value = ''; // Clear the input field
      alert(`${name} added.`);

      displayStudents(); // Update the displayed list
    } else {
      alert('Please enter a student name.');
    }
  }

//Function to remove a student - pop()
function removeLastStudent() {
    // Check if there are any students to remove
    if (students.length > 0) {
      let removed = students.pop();
      document.getElementById("output").innerText = removed + " removed.";
      alert(`${removed} removed.`);
      
      displayStudents(); // Update the displayed list
    } else {
      alert("No students to remove.");
      document.getElementById("output").innerText = "No students to remove.";
    }
  }

//Function to display all students in the list
function displayStudents() {
      const list = document.getElementById("studentList");
      list.innerHTML = ""; // clear previous output

    // Check if there are any students to display
    if (students.length === 0) {
      list.innerHTML = "<div class='empty-state'>No students found. Add a student first!</div>";
      document.getElementById("output").innerText = "No students to display.";
    return;
  }

    // Display each student with their index
    students.forEach((student, index) => {
      // Create a list item for each student
      let li = document.createElement("li");
      li.textContent = `${index + 1}. ${student}`; // Display the index and name
      list.appendChild(li); // Append the list item to the list
  });
  document.getElementById("output").innerText = "Displayed all students.";
}

// Function to show student position - at()
function showStudentAt() {
    const position = parseInt(document.getElementById("studentIndex").value);

    // Check for valid input, if its not a number(isNaN) or out of range
    if (isNaN(position) || position < 1 || position > students.length) {
      alert("Invalid position. Please enter a valid number (1-based index).");
      return;
    }

    // Get student at the given position
    const student = students[position - 1];
    document.getElementById("output").innerText = `Student at position ${position}: ${student}`;
}

//Function to join a student - join()
function joinStudents() {
  const joinedNames = students.join(', ');
  document.getElementById('output').innerHTML = `Joined student names: ${joinedNames}`;
}

// Function to show total number of students - length()
function showTotalStudents() {
    const count = students.length;
    document.getElementById("output").innerText = `Total Students: ${count}`;
}