xport;
var TodoModel = (function () {
    function TodoModel(title) {
        if (title === void 0) { title = ""; }
        this.title = title;
        this.status = "started";
    }
    TodoModel.prototype.toggle = function () {
        this.status = this.status == "started" ? "completed" : "star";
    };
    return TodoModel;
}());
//# sourceMappingURL=todo-model.js.map