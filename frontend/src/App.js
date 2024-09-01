import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const addTask = (task) => {
        axios.post('http://localhost:5000/api/tasks', task)
            .then(response => {
                setTasks([...tasks, response.data]);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const updateTask = (id, updatedTask) => {
        axios.patch(`http://localhost:5000/api/tasks/${id}`, updatedTask)
            .then(response => {
                setTasks(tasks.map(task => task._id === id ? response.data : task));
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/api/tasks/${id}`)
            .then(() => {
                setTasks(tasks.filter(task => task._id !== id));
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">To-Do List</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    );
};

export default App;
