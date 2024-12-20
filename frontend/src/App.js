// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { fetchTasks } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title} - {t.completed ? 'Done' : 'Not Done'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
