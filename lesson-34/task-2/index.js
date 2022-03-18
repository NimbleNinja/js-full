const url = 'https://6230a0d6f113bfceed572660.mockapi.io/todolist/users';

export function getUsersList() {
  return fetch(url).then(users => users.json());
}

export function getUserById(userId) {
  return fetch(`${url}/${userId}`).then(user => user.json());
}

export function createUser(userData) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
}

export function deleteUser(userId) {
  return fetch(`${url}/${userId}`, {
    method: 'DELETE',
  });
}

export function updateUser(userId, userData) {
  return fetch(`${url}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
}
