import randomColorBox from '../utils/randomColorBox.js';

const tabCellTemplate = users => `<ul class="users-tab-cells">${users.map(
  user => `<li
    data-user="${user}" 
    class="users-cell" style="background: ${randomColorBox()}">${user}</li>`,
).join('')}</ul>`;

export {
  tabCellTemplate,
};
