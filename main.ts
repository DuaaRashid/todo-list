console.log("ToDo List");
import inquirer from "inquirer";
// Develop a simple command line todo list
// function,operation
let todos: string[] = [];
async function todoList(todos: string[]) {
  console.log("My Todos list");
  while (true) {
    let options = await inquirer.prompt({
      name: "options",
      type: "list",
      message: "Choose any option",
      choices: ["Add", "Update", "Delete", "View", "Exit"],
    });

    if (options.options == "Add") {
      let add = await inquirer.prompt({
        name: "add",
        type: "input",
        message: "Add your new list item",
      });
      todos.push(add.add);
      console.log(todos);
    }

    if (options.options == "Update") {
      let Update = await inquirer.prompt({
        name: "update",
        type: "list",
        message: "Update your new list item",
        choices: todos.map((item) => item),
      });

      let add = await inquirer.prompt({
        name: "add",
        type: "input",
        message: "Add your new list item",
      });
      let newTodos = todos.filter((items) => items !== Update.update);
      todos = [...newTodos, add.add];
      console.log(todos);
    }

    if (options.options == "Delete") {
      let Delete = await inquirer.prompt({
        name: "delete",
        type: "list",
        message: "Update your new list item",
        choices: todos.map((item) => item),
      });
      let newTodos = todos.filter((val) => val !== Delete.delete);
      todos = [...newTodos];
      console.log(todos);
    }

    if (options.options == "View") {
      console.log(todos);
    }
    if (options.options == "Exit") break;
  }
}
todoList(todos);
