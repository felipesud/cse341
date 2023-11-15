# Contacts Project: Part 2

## Overview
This project focuses on creating an API for storing and retrieving information about contacts. These contacts are stored in a MongoDB database, and all interaction occurs through the API. This README covers the progress made during Week 01 and Week 02.

## Technologies Used
I am utilizing **Node.js**, **MongoDB**, and **Express** for task implementation.

## Installation
To test the code, you need to install the following dependencies:

1. Node.js
2. MongoDB
3. Express

You can install them using npm (Node Package Manager):

\`\`\`bash
npm install express mongodb
\`\`\`

## Progress in Week 01
In the first week, I successfully completed the following tasks:

1. Project setup and database initialization.
2. Data import into the database.
3. Implementation of GET API routes for retrieving individual contacts and all contacts.
4. Deployment of the application to [Render](https://render.com/).

## Progress in Week 02
In the second week, I completed the project by adding the following functionality:

1. POST endpoint for creating new contacts.
2. PUT endpoint for updating existing contacts.
3. DELETE endpoint for removing contacts.
4. API Documentation for detailed usage instructions.

## API Routes
Here's a summary of the API routes that were implemented:

- **Get All Contacts**: Retrieve a list of all contacts.
- **Get a Single Contact by ID**: Retrieve a specific contact by providing the contact's ID.
- **Create New Contact**: Add a new contact to the database.
- **Update Existing Contact**: Modify the details of an existing contact.
- **Delete Contact**: Remove a contact from the database.

## Using the `api.rest` File
To utilize the `api.rest` file, follow these steps:

1. Open the `api.rest` file in Visual Studio Code.
2. Ensure your local server is running.
3. Click on the "Send Request" button for the desired route to test it against your local server.

This file simplifies the process of testing your routes and verifying their functionality.

## Demo
For a demonstration of the API in action, please watch the video on [YouTube](https://youtu.be/RVxKx7QOCsg).

## Access the API
You can access the API deployed on [Render](https://project1-xuop.onrender.com/api-docs/).

Stay tuned for further updates and enhancements to the Contacts Project.
