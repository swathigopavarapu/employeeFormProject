let employees = [];
let employeeId = 1;

const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const message = document.getElementById("message");
const employeeList = document.getElementById("employeeList");

addEmployeeBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = ageInput.value.trim();
  // Validate
  if (!name || !profession || !age) {
    message.textContent = "Error: All fields are required!";
    message.className = "error";
    return;
  }
  // Add employee
  const employee = {
    id: employeeId++,
    name,
    profession,
    age: parseInt(age)
  };
  employees.push(employee);

  // Success message
  message.textContent = "Success: Employee added!";
  message.className = "success";
  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";
  renderEmployees();
});
function renderEmployees() {
  if (employees.length === 0) {
    employeeList.innerHTML = "<p>No employees have been added yet.</p>";
    return;
  }
  employeeList.innerHTML = "";
  employees.map((emp) => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <span><strong>${emp.id}</strong>. ${emp.name} - ${emp.profession}, Age: ${emp.age}</span>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    employeeList.appendChild(card);
  });
}
function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  renderEmployees();
}
