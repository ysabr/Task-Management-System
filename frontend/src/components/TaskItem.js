// src/components/TaskItem.js

import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
    </li>
  );
};

export default TaskItem;
