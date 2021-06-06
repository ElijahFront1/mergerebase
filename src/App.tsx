import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import './App.scss';
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from './hooks/useTypedSelector';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsItem from './components/NewsItem';
import { NewsPost } from './types/todo';

function App() {
  const { fetchTodos } = useActions()
  const { todos, loading } = useTypedSelector(state => state.todo)
  console.log(todos);

  useEffect(() => {
    fetchTodos()
  }, [])



  return (
    <div className="App">
      {loading && <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />}
      {todos.map((todo) =>
        <NewsItem
          key={todo.id}
          {...todo}
        />
      )
      }
    </div >
  );
}

export default App;