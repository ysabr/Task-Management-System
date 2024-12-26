// src/services/api.js

export const fetchTasks = async (page = 1, completed = null) => {
  let url = `http://localhost:8000/api/tasks/?page=${page}`;
  if (completed !== null) {
    url += `&completed=${completed}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
