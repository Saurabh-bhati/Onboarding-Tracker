let students = JSON.parse(localStorage.getItem('students')) || [];

function saveAndRender() {
  localStorage.setItem('students', JSON.stringify(students));
  renderStudents();
}

function addStudent() {
  const nameInput = document.getElementById('studentName');
  const name = nameInput.value.trim();
  if (name !== "") {
    students.push({ name: name, status: 'Not Marked' });
    nameInput.value = '';
    saveAndRender();
  }
}

function markAttendance(index, status) {
  students[index].status = status;
  saveAndRender();
}

function renderStudents() {
  const tbody = document.getElementById('attendanceTable');
  tbody.innerHTML = '';
  
  students.forEach((student, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${student.name}</td>
      <td><strong>${student.status}</strong></td>
      <td>
        <button class="btn-present" onclick="markAttendance(${index}, 'Present')">Present</button>
        <button class="btn-absent" onclick="markAttendance(${index}, 'Absent')">Absent</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Initial load
renderStudents();