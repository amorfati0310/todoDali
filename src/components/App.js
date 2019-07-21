const App = class {
  constructor({ usersTab, todoApp }) {
    this.usersTab = usersTab;
    this.todoApp = todoApp;
    this.init();
  }

  init() {
    this.usersTab.bindSetActiveUser = this.setActiveUser.bind(this);
  }

  setActiveUser(user) {
    console.log('setUSer', user);
    this.todoApp.setUser(user);
  }
};
export default App;
