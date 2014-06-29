todo.view = function(ctrl) {
  return m("html", [
    m("body", [
      m("input"),
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

m.render(document, todo.view(ctrl));

m("input", {value: ctrl.description})