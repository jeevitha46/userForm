document.getElementById('userForm').addEventListener('submit', function(e){
    e.preventDefault();

    const firstName=document.getElementById('fname').value;
    const lastName=document.getElementById('lname').value;
    const phone=document.getElementById('phone').value;
    const email=document.getElementById('email').value;
    const address=document.getElementById('address').value;

    if (validateForm(firstName, lastName, phone, email, address)) {
        addUser(firstName, lastName, phone, email, address);
        clearForm();
        displayUsers();
    } else {
        alert('Please fill out all fields correctly.');
    }
});

function validateForm(firstName, lastName, phone, email, address) {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return firstName && lastName && phoneRegex.test(phone) && emailRegex.test(email) && address;
}

const users = [];

function addUser(firstName, lastName, phone, email, address) {
  const user = { firstName, lastName, phone, email, address };
  users.push(user);
}

function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    users.forEach((user, index) => {
      userList.innerHTML += `
        <div>
          <h3>User ${index + 1}</h3>
          <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address}</p>
          <button onclick="deleteUser(${index})">Delete</button>
        </div>
      `;
    });
}

function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}
  
function clearForm() {
    document.getElementById('userForm').reset();
}
