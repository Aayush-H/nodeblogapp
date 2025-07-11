# Node.js Blog Application

A simple blog web application built with Node.js, Express.js, and EJS. This application allows users to create, view, edit, and delete blog posts. Please note that posts are not persisted between sessions as no database is used in this version.

## Features

*   **Post Creation**: Users can create new blog posts with a title and content.
*   **Post Viewing**: All posts are displayed on the home page, with links to view the full content of each post.
*   **Post Update**: Existing posts can be edited.
*   **Post Deletion**: Posts can be deleted from the application.
*   **Basic Styling**: The application includes basic styling for a clean user interface.

## Technologies Used

*   **Node.js**: JavaScript runtime environment.
*   **Express.js**: Web application framework for Node.js.
*   **EJS**: Embedded JavaScript templating engine for dynamic HTML generation.
*   **CSS**: For styling the application.
*   **body-parser**: Middleware to parse incoming request bodies.

## Setup Instructions

To get this project up and running on your local machine:

1.  **Clone or Download**: Get the project files onto your system.
2.  **Navigate to Project Directory**: Open your terminal or command prompt and navigate to the root directory of the project.
    ```bash
    cd my-blog-app
    ```
3.  **Install Dependencies**: Install the required Node.js packages.
    ```bash
    npm install
    ```
4.  **Start the Application**: Run the main application file.
    ```bash
    node app.js
    ```

## Usage

Once the server is running, open your web browser and go to:

``m
http://localhost:3000
``

*   **Home Page**: View all existing blog posts.
*   **Compose**: Click on "Compose" in the navigation bar or the "Create New Post" button to add a new post.
*   **View Post**: Click on "Read More" on a post card to view its full content.
*   **Edit/Delete Post**: On the single post view, you will find options to "Edit Post" or "Delete Post".
```

