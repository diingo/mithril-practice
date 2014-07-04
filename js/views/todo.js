todo.view = function(ctrl) {
  return m("html", [
    m("body", [
      m("input", {onchange: m.withAttr("value", ctrl.description), value: ctrl.description()}),
      m("button", "Add"),
      m("table", [
        m("tr", [
          m("td", [
            m("input[type=checkbox]")
            ]), 
          m("td", "task description"),
        ])
      ])
    ])
  ]);
}

// m.render(document, todo.view(ctrl));


//////////////
// Bindings //

var ctrl = new todo.controller();


ctrl.description(); // empty string
m.render(document, todo.view(ctrl)); // input is empty
ctrl.description("Write code"); //set the description in the controller
m.render(document, todo.view(ctrl)); // input now says "Write code"



