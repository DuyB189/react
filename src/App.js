import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import TodoList from './components/TodoList';
import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';

const TODO_APP_STORAGE_KEY = 'TODO_APP';

function App() {
  // state, props 

  //react hook - useState

  const [todoList, setTodoList] = useState([]); // array - 2 element 
  const [textInput, setTextInput] = useState(""); // string -  luu tru gia tri nguoi dung nhap vao input

  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value); //e.target.value - noi dung nguoi dung da nhap vo the INput
  }, []);

  const onAddBtnClick = useCallback((e) => {
    //viet code de them text input vao todo list

    setTodoList([
      { id: v4(), name: textInput, isComplete: false },//doi vi tri 22-23
      ...todoList,
    ])

    setTextInput("");
  },
    [textInput, todoList]
  );

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);
  const onDelBtnData = useCallback((e) => {
    localStorage.removeItem(TODO_APP_STORAGE_KEY);
  }, []);
  return (
    <>
      <Button
        classID='del-btn'
        onClick={onDelBtnData}
      >
        x
      </Button>
      <h3>Danh sách việc cần làm !!!</h3>
      <Textfield
        name='add-todo'
        placeholder='Thêm việc cần làm...'
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance='primary'
            onClick={onAddBtnClick}
          >
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
}

export default App;
