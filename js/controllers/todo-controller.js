

todo.controller = function() {

  this.list = new todo.TodoList();
  this.description = m.prop("");
  this.add = function() {
      if (this.description()) {
          this.list.push(new todo.Todo({description: this.description()}));
          this.description(" ");
      }
  }.bind(this);
};

