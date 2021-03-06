import { Dispatch } from "redux";
import axios from "axios";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODOS })
            const response = await axios.get('https://test-api-app-for-react.herokuapp.com/api/v1/news')
            dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data.data.articles })
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}
export function setTodoPage(page: number): TodoAction {
    return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}