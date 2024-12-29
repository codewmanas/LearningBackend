# Web Server and Node.js

## Introduction

Welcome to the world of backend development! This guide will introduce you to the basics of web servers and Node.js, providing a solid foundation for beginners.

## What is a Web Server?

A web server is a software that serves web pages to users upon request. It handles HTTP requests from clients (usually web browsers) and responds with the requested resources, such as HTML pages, images, or data.

### Key Functions of a Web Server:
- **Handling Requests:** Receives and processes incoming HTTP requests.
- **Serving Content:** Delivers requested resources to the client.
- **Managing Connections:** Maintains and manages multiple client connections.
- **Security:** Implements security measures to protect data and resources.

## Introduction to Node.js

Node.js is a powerful, open-source, server-side runtime environment built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript to write server-side code, making it possible to create scalable and high-performance web applications.

### Key Features of Node.js:
- **Asynchronous and Event-Driven:** Non-blocking I/O operations for better performance.
- **Single-Threaded:** Uses a single-threaded model with event looping.
- **Fast Execution:** Built on the V8 engine, ensuring fast code execution.
- **NPM (Node Package Manager):** A vast ecosystem of libraries and modules.

## Setting Up Node.js

1. **Download and Install Node.js:**
     - Visit the [Node.js website](https://nodejs.org/) and download the installer for your operating system.
     - Follow the installation instructions.

2. **Verify Installation:**
     - Open your terminal or command prompt.
     - Run the following commands to check the installed versions:
       ```sh
       node -v
       npm -v
       ```

## Creating a Simple Web Server with Node.js

Let's create a basic web server using Node.js.

1. **Initialize a New Project:**
     ```sh
     mkdir my-web-server
     cd my-web-server
     npm init -y
     ```

2. **Install Required Packages:**
     ```sh
     npm install express
     ```

3. **Create `server.js` File:**
     ```js
     const express = require('express');
     const app = express();
     const port = 3000;

     app.get('/', (req, res) => {
       res.send('Hello, World!');
     });

     app.listen(port, () => {
       console.log(`Server is running at http://localhost:${port}`);
     });
     ```

4. **Run the Server:**
     ```sh
     node server.js
     ```

5. **Access the Server:**
     - Open your web browser and navigate to `http://localhost:3000`.
     - You should see "Hello, World!" displayed on the page.

## Conclusion

Congratulations! You've successfully set up a basic web server using Node.js. This is just the beginning of your journey into backend development. Continue exploring and building more complex applications as you advance.

## Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MDN Web Docs - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)

Happy coding!