# Task Manager App (React + TypeScript + Auth0)

A simple task management application built with React, TypeScript, and Auth0 authentication.  
Users can create, view, edit, and delete tasks with type-safe code and global state management using Context API.

---

## Features

- User authentication via **Auth0** 
- Create, view, edit, and delete tasks 
- Form validation for creating and editing tasks 
- Protected routes using **React Router DOM** 
- Global state management using **React Context API** 
- Responsive UI styled with **Bootstrap 5** 
- Authentication guard that redirects unauthenticated users

---

## Tech Stack

- **React 18**
- **TypeScript**
- **React Router DOM**
- **Auth0 React SDK**
- **Context API**
- **Bootstrap 5**
- **uuid** for unique task IDs

---

## Project Structure

- src/
- src/components/          # Reusable UI components
- src/context/             # React Context API provider for tasks
- src/pages/               # Route-based pages (Dashboard, CreateTask, EditTask, TaskDetails)
- src/types/               # TypeScript type definitions
- src/App.tsx              # Main app with routing and Auth0 provider
- src/main.tsx             # Entry point, renders App

---

## Usage

- Register or log in with Auth0 on the app.
- Create new tasks via the "Create Task" page.
- Edit or delete existing tasks.
- View existing tasks on the dashboard.
- View task details on the details page.

---

## Authentication

This project uses Auth0 for authentication. Users must be logged in to access the dashboard and task pages. Public routes redirect to the login page if the user is not authenticated.

---

## Author

Zari Justine Magnaye
Built as part of a TypeScript + React learning module.
