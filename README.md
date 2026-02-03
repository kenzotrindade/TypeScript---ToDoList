TaskMaster - TypeScript To-Do Application

A modern, clean, and fully typed Task Management application built with TypeScript. This project focuses on DOM manipulation, state management, and data persistence using the browser's LocalStorage.

🚀 Features

    CRUD Operations: Create, Read, Update, and Delete tasks.

    State Persistence: Tasks are saved in the browser's LocalStorage—your data won't disappear on refresh.

    Priority Labeling: Assign priority levels to tasks.

    Dynamic UI: Real-time task counter and visual feedback for completed tasks (line-through effect).

    Responsive Design: A sleek, dark-themed interface built with modern CSS.

🛠️ Technical Stack

    Language: TypeScript (Static Typing, Interfaces, Type Assertions)

    Frontend: HTML5, CSS3 (Flexbox, CSS Variables, Animations)

    Storage: Browser LocalStorage API

    Build Tool: TSC (TypeScript Compiler)

🧠 Concepts Mastered

This project allowed me to demonstrate and reinforce several key TypeScript and Frontend concepts:

    Interfaces: Used to enforce strict data structures for Task objects.

    DOM Manipulation: Selecting and creating elements using strict type casting (as HTMLFormElement, as HTMLInputElement).

    Event Handling: Managing user interactions through structured event listeners.

    Array Methods: Advanced usage of .filter() for deletions and .forEach() for UI rendering.

    JSON Handling: Serializing and deserializing complex objects for storage.

    Closure & Scope: Managing individual task states within dynamic loops.

📦 Installation & Setup

    Clone the repository
    Bash

    git clone https://github.com/your-username/taskmaster-ts.git

    Install TypeScript (if not already installed)
    Bash

    npm install -g typescript

    Compile the project
    Bash

    tsc index.ts --watch

    Launch Open index.html in your favorite browser.
