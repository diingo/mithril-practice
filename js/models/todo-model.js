var todo = {};

todo.Todo = function(data) {
  this.description = m.prop(data.description);
  this.done = m.prop(false);
};

todo.TodoList = Array;


// m.prop is a factory for a getter-setter function. Getter-setters work like this:

// define a getter-setter with initial value `John`
var firstName = m.prop("John")

// read the value
var a = firstName(); //a == "John"

//set the value to `Mary`
firstName("Mary"); //Mary

//read the value
var b = firstName(); //b == "Mary"


// Todo and TodoList classes defined above are plain Javascript contructors. They can be initialized and used like this:

var myTask = new todo.Todo({description: "Write code"});


//read the description
myTask.description(); //Write code

//is it dones?
var isDone = myTask.done(); //isDone == false

//mark as done
myTask.done(true); //true

//now it's done
isDone = myTask.done(); //isDone == true

//TodoList class is simply an aluas of the native Aeear class
var list = new todo.TodoList();
list.length; //0
