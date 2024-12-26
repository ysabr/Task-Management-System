// src/components/TaskList.js

import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../services/api';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [filterCompleted, setFilterCompleted] = useState(null);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks(page, filterCompleted);
      setTasks(data.results);
      setHasNext(data.next !== null);
      setHasPrevious(data.previous !== null);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [page, filterCompleted]);

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        <label>
          Show Completed:
          <input
            type="checkbox"
            checked={filterCompleted === true}
            onChange={(e) => setFilterCompleted(e.target.checked ? true : null)}
          />
        </label>
      </div>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={!hasPrevious}>
          Previous
        </button>
        <span> Page {page} </span>
        <button onClick={() => setPage(page + 1)} disabled={!hasNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TaskList;
