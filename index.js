var selectedRow = null;
window.onload = function() {
document.getElementById('btnAddData').addEventListener("click", insertData);
}

function onSubmit(e){
  e.preventDefault();
}

function insertData(event) {
  event.preventDefault();
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const display = document.getElementById("table");

  const row = display.insertRow(0);

  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 =row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);

  cell1.innerHTML = firstname;
  cell2.innerHTML = lastname;
  cell3.innerHTML = email;
  cell4.innerHTML = password;
  cell5.innerHTML= age;
  cell6.innerHTML = "<button type='button' id='btnEditData' onclick='editData(this)'>Edit Data</button>"
  document.getElementById("form").reset();
}

function editData(td){
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("password").value = selectedRow.cells[3].innerHTML;
  document.getElementById("age").value = selectedRow.cells[4].innerHTML;
}
function updateData(formData){
  selectedRow.cells[0].innerHTML = formData.firstname;
  selectedRow.cells[1].innerHTML = formData.lastname;
  selectedRow.cells[2].innerHTML = formData.email;
  selectedRow.cells[3].innerHTML = formData.password;
  selectedRow.cells[4].innerHTML = formData.age;
}

