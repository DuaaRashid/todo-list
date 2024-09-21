# Command Line To-Do List

This project is a **Command Line To-Do List** application built using Node.js and TypeScript. It allows users to manage a simple to-do list directly from the command line. Users can add, update, delete, and view their tasks interactively.

## Features
- **Add**: Add a new task to the to-do list.
- **Update**: Update an existing task from the to-do list.
- **Delete**: Remove a task from the list.
- **View**: Display all current tasks.
- **Exit**: Exit the application.

## How It Works
1. When you run the application, it prompts you to choose an action (Add, Update, Delete, View, Exit).
2. You can add tasks, update or delete existing tasks, or view the full list of tasks at any time.
3. The application will keep running in a loop until you select the "Exit" option.

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/todo-cli.git
    cd todo-cli
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npx ts-node index.ts
    ```

## Usage

Once the application is running, you will be prompted to select one of the following options:

- **Add**: Type in the task you want to add.
- **Update**: Select the task you want to update, then input the new task.
- **Delete**: Select the task you want to delete from the list.
- **View**: View the current list of tasks.
- **Exit**: Terminate the program.

Example:
```
Choose any option:
> Add
> Update
> Delete
> View
> Exit
```

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): A collection of common interactive command line user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

## License

This project is licensed under the MIT License.
