  // Array for adding student names
  let students = [];

  //Function to add a student - push()
  function addStudent() {
    const name = document.getElementById('studentName').value;
    if (name) {
      students.push(name);
      document.getElementById('studentName').value = '';
      alert(`${name} added.`);
    } else {
      alert('Please enter a student name.');
    }
  }

  //Function to join a student - join()
  function joinStudents() {
    const joinedNames = students.join(', ');
    alert(`Joined student names: ${joinedNames}`);
    document.getElementById('output').innerHTML = `Joined student names: ${joinedNames}`;
    students.join();
  }

  //Function to remove a student - pop()
  function removeLastStudent() {
    if (students.length > 0) {
      let removed = students.pop();
      document.getElementById("output").innerText = removed + " removed.";
    } else {
      document.getElementById("output").innerText = "No students to remove.";
    }
  }

  //Function to display all students in the list
  function displayStudents() {
      const list = document.getElementById("studentList");
      list.innerHTML = ""; // clear previous output

    if (students.length === 0) {
      list.innerHTML = "<div class='empty-state'>No students found. Add a student first!</div>";
      document.getElementById("output").innerText = "No students to display.";
    return;
  }

    students.forEach((student, index) => {
      let li = document.createElement("li");
      li.textContent = `${index + 1}. ${student}`;
      list.appendChild(li);
  });
  document.getElementById("output").innerText = "Displayed all students.";
}

  //Function to show all total of the students
  function showTotalStudents() {
      const count = students.length;
      document.getElementById("output").innerText = `Total Students: ${count}`;
}