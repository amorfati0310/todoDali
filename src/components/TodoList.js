import { qs, handleProcessingEl } from '../utils/dom.js';

function TodoList(params) {
  const { $target } = params;

  $target.addEventListener('click', (e) => {
    const { id } = e.target.closest('li').dataset;

    if (e.target.className === 'remove-button') {
      e.stopPropagation();
      handleProcessingEl(e.target);
      this.onRemove(id);
    } else {
      handleProcessingEl(e.target.closest('li'));
      this.onToggleTodoUpdate(id);
    }
  });
  this.setProps = function (props) {
    Object.assign(this, { ...props });
    console.log(this);
  };
  this.render = function (data) {
    const htmlString = data.map((todo) => {
      const contentHTML = todo.isCompleted
        ? `<strike>${todo.content}</strike>`
        : `${todo.content}`;

      return `<li data-id="${
        todo._id
      }">${contentHTML} <button class="remove-button">Remove</button></li>`;
    });

    $target.innerHTML = `<ul>${htmlString.join('')}</ul>`;
  };
}
export default TodoList;
