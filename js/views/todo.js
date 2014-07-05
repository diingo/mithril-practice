todo.view = function(ctrl) {
    return m("html", [
        m("body", [
            m("input", {onchange: m.withAttr("value", ctrl.description), value: ctrl.description()}),
            m("button", {onclick: ctrl.add}, "Add"),
            m("table", [
                ctrl.list.map(function(task, index) {
                    return m("tr", [
                        m("td", [
                            m("input[type=checkbox]", {onclick: m.withAttr("checked", task.done), checked: task.done()})
                        ]),
                        m("td", {style: {textDecoration: task.done() ? "line-through" : "none"}}, task.description()),
                    ])
                })
            ])
        ])
    ]);
};

m.module(document, todo);
