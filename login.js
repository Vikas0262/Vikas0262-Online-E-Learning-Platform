// JavaScript for Signup and Login functionality

// Fetch form inputs
const signupForm = document.querySelector('.sign-up-form');
const signinForm = document.querySelector('.sign-in-form');

// Local storage key for users
const USERS_KEY = 'users';

// Utility function to fetch users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

// Utility function to save users to localStorage
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Signup function
signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const username = signupForm.querySelector('input[placeholder="Username"]').value;
  const email = signupForm.querySelector('input[placeholder="Email"]').value;
  const password = signupForm.querySelector('input[placeholder="Password"]').value;

  const users = getUsers();

  // Check if username already exists
  if (users.some(user => user.username === username)) {
    alert('Username already exists! Please choose another one.');
    return;
  }

  // Add new user to users array
  users.push({ username, email, password });
  saveUsers(users);

  alert('Registration successful! You can now login.');
  signupForm.reset();
});

// Login function
signinForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const username = signinForm.querySelector('input[placeholder="Username"]').value;
  const password = signinForm.querySelector('input[placeholder="Password"]').value;

  const users = getUsers();

  // Check if user exists and password matches
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
      // Redirect to index.html
      window.location.href = 'index.html';
      alert(`Welcome, ${username}! You are successfully logged in.`);
    signinForm.reset();
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
