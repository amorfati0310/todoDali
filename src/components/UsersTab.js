import TodoAPI from '../api/index.js';
import { tabCellTemplate } from '../template/tabCellTemplate.js';
import { qs, showEl, hideEl } from '../utils/dom.js';


const FakeUserDB = new Set(['rotoa', 'cckn', 'dali', 'gyoon', 'kangho', 'fseller']);

const UsersTab = class {
  constructor({ $target, $tabSelector }) {
    this.$target = $target;
    this.$tabSelector = $tabSelector;
    this.init();
    this.users = [];
    this.bindSetActiveUser = null;
  }

  async init() {
    const users = await this.fetchUsers();
    const validatedUser = await this.validateUsers(users);
    this.setState(validatedUser);
    qs(this.$tabSelector, this.$target).addEventListener('click', e => this.handleClick(e));
  }

  setState(newData) {
    this.data = newData;
    this.render(newData);
  }

  render(data) {
    this.$target.innerHTML = tabCellTemplate(data);
  }

  async fetchUsers() {
    const users = await TodoAPI.getUsersTodo();
    return users;
  }

  async validateUsers(users) {
    return users.filter(user => FakeUserDB.has(user));
  }

  handleClick({ target }) {
    console.log(target);
    const { user } = target.closest('li').dataset;
    this.bindSetActiveUser(user);
  }
};

export default UsersTab;
