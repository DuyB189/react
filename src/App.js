import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import TodoList from './components/TodoList';

function App() {
  // state, props 



  return (
    <>
      <h3>Danh sách việc cần làm !!!</h3>
      <Textfield
        name="add-todo"
        placeholder='Nhập công việc cần làm...'
        elemAfterInput={
          <Button isDisabled={false} appearance='primary'>Thêm</Button>
        }
        css={{ padding: '2px 4px 2px' }}
      ></Textfield>
      <TodoList />
    </>
  );
}

export default App;
