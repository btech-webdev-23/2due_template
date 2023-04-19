//* Select the todo input and add a focus event listener.
//* When the input is focused, add a box shadow to the input.

// add code here

//* Select the todo input and add a focusout event listener.
//* When the input is not focused, remove the box shadow. You can do that by adding a focusout event listener.

// add code here

//* Create a function called noMoreTodos. Inside the function, select the todo list (ul) and store it in a variable called todoList. Create a p element and store it in a variable called noTodos. Add the text "No todos!" to the noTodos element. Prepend the noTodos element to the todoList element.

// add code here

//* Create another function called removeNoTodos. Inside the function, select the p element with the text "No todos!" and remove it from the DOM, only if it exists. If it doesn't exist, do nothing.

// add code here

//* Outside all functions, select the add button and add a click event listener.

// add code here

//! Inside the callback function for the click event listener on the add button.

//* Within the click event listener callback function, create a variable called todoText and set it to the value of the todo input.

// add code here

//* Trim the todoText variable to remove any whitespace.

// add code here

//* If the todoText value is empty, alert an error message and return out of the function.

// add code here

//* If the todoText value is not empty, remove the "No todos!" message from the DOM by calling the removeNoTodos function.

// add code here

//* Select the item list (ul)

// add code here

//* Create a new li element and store it in a variable called newTodo.

// add code here

//* Create a new button element called todoButton.

// add code here

//* Add the class "todo-item-button" to the todoButton element.

// add code here

//* Add the text from the input into a new text node and append it to the todoButton element.

// add code here

//* Add a click event listener to the todoButton element. Add an anonymous callback function that
//* calls the toggleTodo function and passes in the newTodo element as an argument to the toggleTodo function.

// add code here

//* Create a new button element called todoDelete.

// add code here

//* Add the class "todo-item-button-delete" to the todoDelete element.

// add code here

//* Add a click event listener to the todoDelete element. Add an anonymous callback function that
//* calls the deleteTodo function and passes in the newTodo element as an argument to the deleteTodo function.

// add code here

//* Add the text "x" into a new text node and append it to the todoDelete element.

// add code here

//* Append the todoButton and todoDelete elements to the newTodo element.

// add code here

//* Prepend the newTodo element to the previously selected item list (ul).

// add code here

//* Clear the input value from the text box.

// add code here

//! End of callback function for the click event listener on the add button.

//* Create a function called toggleTodo that takes an element as a parameter.
//* Inside the function, toggle the class "strike" on the element.

// add code here

//* Create a function called deleteTodo that takes an element as a parameter.
//* Inside the function, remove the element from the DOM. Then, call the removeNoTodos function.

// add code here

//* Select all the todo item buttons and store them in a variable called todoButtons.

// add code here

//* Loop through the todoButtons array and add a click event listener to each button. Add an anonymous callback function that calls the toggleTodo function and passes in the button element as an argument to the toggleTodo function.

// add code here

//* Select all the todo item delete buttons and store them in a variable called todoDeleteButtons.

// add code here

//* Loop through the todoDeleteButtons array and add a click event listener to each button. Add an anonymous callback function that calls the deleteTodo function and passes in the button element as an argument to the deleteTodo function.

// add code here
