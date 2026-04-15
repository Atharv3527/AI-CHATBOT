# AI Chatbot

This is a full-stack chat application that uses Google's Gemini AI to power the conversation. The application is built with a React frontend and a Node.js backend.

## Project Structure

- `frontend/`: Contains the React application built with Vite.
- `backend/`: Contains the Node.js server using Express and Socket.IO.

## Features

- Real-time chat with an AI assistant.
- Simple and intuitive user interface.
- Easy to set up and run.

## Environment Setup

To run this project, you need to set up both the frontend and backend environments.

### Backend Setup

1.  Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the `backend` directory and add your Gemini API key:

    ```
    GEMINI_API_KEY=your_api_key
    ```

4.  Start the backend server:
    ```bash
    npx nodemon server.js
    ```
    The server will be running on `http://localhost:3000`.

### Frontend Setup

1.  Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.

## How to Use

1.  Make sure both the backend and frontend servers are running.
2.  Open your browser and go to `http://localhost:5173`.
3.  Start typing your messages in the chatbox and get responses from the AI.
