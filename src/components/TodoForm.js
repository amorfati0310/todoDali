const TODO_INPUT = 'todo-input';

function TodoForm({ $target }) {
  $target.addEventListener('submit', (e) => {
    e.preventDefault();
    this.onSubmit($target[TODO_INPUT].value);
    $target.reset();
  });
  this.setProps = function (props) {
    Object.assign(this, { ...props });
    console.log(this);
  };
}


export default TodoForm;
