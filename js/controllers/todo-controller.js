

todo.controller = function() {

  this.list = new todo.TodoList();
  this.description = m.prop("");
  this.add = function(description) {

    if (description()) {

      this.list.push(new todo.Todo({description: description()}));
      this.description("");

    }

  };
}


// You can use the controller like this:
var ctrl = new todo.controller();
ctrl.description(); //[emty string]

//try adding a to-do
ctrl.add(ctrl.description);
ctrl.list.length; //0 .. you can't add a to-do with an empty description

// add it properly
ctrl.description("Write code");
ctrl.add(ctrl.description);
ctrl.list.length; //1