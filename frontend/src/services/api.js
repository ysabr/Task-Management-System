export const fetchTasks = async () => {
    const response = await fetch('http://localhost:8000/api/tasks/');
    return await response.json();
  };
  