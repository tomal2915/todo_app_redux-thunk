import { toggled } from "../actions";

const updateTodoStatus = (todoId, currentStatus) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: !currentStatus,
             }),
             headers: {
                "Content-Type": "application/json; charset=utf-8",
             },
        });
        const todo = await response.json();
    
        dispatch(toggled(todo.id));
      };
};

export default updateTodoStatus;
