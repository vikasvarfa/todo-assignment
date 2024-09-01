# To-Do List Application

## Video Preview
https://github.com/user-attachments/assets/e736b9ae-cdd5-48d0-b4d4-d87b965c887b

This is a full-stack To-Do list application built with **MongoDB**, **Express.js**, **React.js**, **Node.js**, and **Bootstrap**. The application allows users to create, edit, delete, and manage tasks effectively.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Tasks**: Users can add tasks with a title and description.
- **Edit Tasks**: Users can edit the task details and mark tasks as completed.
- **Delete Tasks**: Users can delete tasks.
- **Responsive UI**: The application has a responsive and user-friendly interface designed with Bootstrap.

## Tech Stack

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB

## Installation

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **MongoDB** instance running locally or a cloud MongoDB service (e.g., MongoDB Atlas).

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/vikasvarfa/todo-assignment.git
    cd todo-app/backend
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend/` directory with the following content:
    ```
    PORT=5000
    MONGO_URI=your_mongo_db_connection_string
    ```

4. Start the backend server:
    ```bash
    nodemon server.js
    ```

### Frontend Setup

1. Navigate to the `frontend/` directory:
    ```bash
    cd ../frontend
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

## Usage

- Open your browser and go to `http://localhost:3000`.
- You can now start adding, editing, and deleting tasks.

## Folder Structure

```plaintext
todo-app/
│
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.js
    │   │   ├── TaskList.js
    │   │   └── TaskItem.js
    │   ├── App.js
    │   ├── index.js
    │   └── App.css
    ├── .env
    └── package.json
