import HttpErrorHandler from './src/utils/HttpErrorHandler.js';
import UsersTab from './src/components/UsersTab.js';
import TodoList from './src/components/TodoList.js';
import TodoForm from './src/components/TodoForm.js';
import TodoApp from './src/components/TodoApp.js';
import Spinner from './src/components/Spinner.js';
import App from './src/components/App.js';
import { qs } from './src/utils/dom.js';


(async function () {
  try {
    // FIXME userName 초기에 어떻게 해줄지
    const username = 'dali';
    new App({
      usersTab: new UsersTab({
        $target: qs('#users-tab'),
        $tabSelector: '.users-tab-cells',
      }),
      todoApp: new TodoApp({
        $target: qs('#todo-app'),
        username,
        todoList: new TodoList({
          $target: qs('#todo-list'),
        }),
        todoForm: new TodoForm({
          $target: qs('#todo-form'),
        }),
        spinner: new Spinner({
          $target: qs('#spinner'),
        }),
      }),
    });
  } catch (e) {
    HttpErrorHandler(e);
  }
}());
