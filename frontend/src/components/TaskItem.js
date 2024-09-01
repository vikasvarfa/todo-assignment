import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask}) => { 
    const [isEditing, setIsEditing] = useState(false); 
    const [title, setTitle] = useState(task.title); 
    const [description, setDescription] = useState(task.description); 
    const [completed, setCompleted] = useState(task.completed);

    const handleSave = () => {
        updateTask(task._id, { title, description, completed });
        setIsEditing(false);
    };
    
    return (
        <div className="card mb-3">
            <div className="card-body">
                {isEditing ? (
                    <>
                        <input 
                            type="text" 
                            className="form-control mb-2" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                        <textarea 
                            className="form-control mb-2" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                        <div className="form-check">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                checked={completed} 
                                onChange={(e) => setCompleted(e.target.checked)} 
                            />
                            <label className="form-check-label">Completed</label>
                        </div>
                        <button className="btn btn-success mr-2 mx-2" onClick={handleSave}>Save</button>
                        <button className="btn btn-secondary  " onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <h5 className={`card-title ${completed ? 'text-muted' : ''}`}>{task.title}</h5>
                        <p className="card-text">{task.description}</p>
                        <button className="btn btn-warning mr-2 mx-2" onClick={() => setIsEditing(true)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteTask(task._id)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TaskItem;