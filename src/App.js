import { useState } from 'react';
import './App.css';
import TaskCard from './components/taskCard';
import AddTaskModal from './components/addTaskModal';

function App() {

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container App">
      <div className='page-wrapper'>
        <div className='top-title'>
          <h2>Task List</h2>
          <button className='button' onClick={() => setShowModal(true)}>
            <span className='icon'>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.99327 0.883379C7.93551 0.38604 7.51284 0 7 0C6.44772 0 6 0.447715 6 1V6H1L0.883379 6.00673C0.38604 6.06449 0 6.48716 0 7C0 7.55228 0.447715 8 1 8H6V13L6.00673 13.1166C6.06449 13.614 6.48716 14 7 14C7.55228 14 8 13.5523 8 13V8H13L13.1166 7.99327C13.614 7.93551 14 7.51284 14 7C14 6.44772 13.5523 6 13 6H8V1L7.99327 0.883379Z" fill="white">
                </path>
              </svg>
            </span>
            Add Task
          </button>
        </div>
        <div className='task-container'>
          <TaskCard />
        </div>
        {showModal && <AddTaskModal closeModal={handleModalClose} />}
      </div>
    </div>

  );
}

export default App;