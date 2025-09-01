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