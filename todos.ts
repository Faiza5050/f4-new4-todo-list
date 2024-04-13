#! /usr/bin/env node

import inquirer from "inquirer"

let todoList: string[] = [];
let conditions = true;

    while(conditions) {
        let option = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task" , "Update Task" , "Delete Task" , "View Todo-List" , "Exit"],
            }
        ]);
    
        if(option.select === "Add Task"){
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "What do you want to Add in your Todo-List",
                validate: function (input) {
                    if(input.trim() == "") {
                        return "Please Enter a Task you want to Add in your Todo-List."
                    }
                    return true;
                }
 })
 if (addTodo.todo.trim() !== ""){
    todoList.push(addTodo.todo);
    todoList.forEach(todo => console.log(todo)
)
 }
        }
        if (option.select === "Update Task"){
            let updateTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Update Task you want from your Todo-List",
                choices: todoList.map(item => item)
            })
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "What do you want to Add in your Todo-List",
 })
 let newTodo = todoList.filter(val => val !== updateTodo.todo);
 todoList = [...newTodo,addTodo.todo];
 todoList.forEach(todo => console.log(todo)
)
        }
        if (option.select === "Delete Task"){
            let deleteTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Delete Task you want from your Todo-List",
                choices: todoList.map(item => item)
            })
            let newTodo = todoList.filter(val => val !== deleteTodo.todo);
            todoList = [...newTodo];
            todoList.forEach(todo => console.log(todo)
)
        }
        if (option.select === "View Todo-List"){
            console.log("/*/*/== To-Do LIST ==/*/*/");
            todoList.forEach(todo => console.log(todo)
)
        }
        if (option.select === "Exit"){
            console.log(" ***=== THE END ===*** ");
            conditions = false;
        }
    }
