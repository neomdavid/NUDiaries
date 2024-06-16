document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted');

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log('Email:', email);
  console.log('Password:', password);

  const predefinedEmail = 'kator@gmail.com';
  const predefinedPassword = 'sex';

  if (email === predefinedEmail && password === predefinedPassword) {
      window.location.href = 'admin-wall.html';
  } else {
      alert('Invalid email or password. Please try again.');
  }
});
