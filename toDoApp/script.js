let accessToken = null;

async function register() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5001/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });

  if (response.ok) {
    alert('Registration successful! Please log in.');
  } else {
    alert('Registration failed.');
  }
}

async function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const response = await fetch('http://localhost:5001/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    accessToken = data.token;
    document.getElementById('auth').style.display = 'none';
    document.getElementById('todoApp').style.display = 'block';
    fetchTodos();
  } else {
    alert('Login failed.');
  }
}

async function fetchTodos() {
  const response = await fetch('http://localhost:5001/todos/', {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const todos = await response.json();
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.title;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTodo(todo.id);

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

async function addTodo() {
  const title = document.getElementById('todoInput').value;

  const response = await fetch('http://localhost:5001/todos/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });

  if (response.ok) {
    fetchTodos();
  } else {
    alert('Failed to add to-do.');
  }
}

async function deleteTodo(id) {
  const response = await fetch(`http://localhost:5001/todos/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (response.ok) {
    fetchTodos();
  } else {
    alert('Failed to delete to-do.');
  }
}

function logout() {
  accessToken = null;
  document.getElementById('auth').style.display = 'block';
  document.getElementById('todoApp').style.display = 'none';
}
