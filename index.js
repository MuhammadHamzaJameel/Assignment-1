window.onload = function() {
document.getElementById('btnAddData').addEventListener("click", insertData);
}

function insertData(event) {
  event.preventDefault();
  const form = document.getElementById("form");
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("password2");
  const age = document.getElementById("age");

  const row = .insertRow((0));

  cell1 = row.insertcell(0);
  cell2 = row.insertcell(1);
  cell3 = row.insertcell(2);
  cell4 = row.insertcell(3);
  cell5 = row.insertcell(4);
  cell6 = row.insertcell(5);

  cell1.innerHTML = firstname;
  cell2.innerHTML = lastname;
  cell3.innerHTML = email;
  cell4.innerHTML = password;
  cell5.innerHTML= confirmPassword;
  cell6.innerHTML= age;

}
