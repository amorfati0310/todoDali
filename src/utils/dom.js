const qs = (selector, $dom = document) => $dom.querySelector(selector);

const showEl = $el => $el.classList.remove('hide');
const hideEl = $el => $el.classList.add('hide');

const disableEl = ($el) => {
  $el.disabled = true;
};
const ableEl = ($el) => {
  $el.disabled = false;
};

const updateText = ($el, updateText) => {
  $el.innerText = updateText;
};

const handleProcessingEl = ($el, message = '...ing') => {
  updateText($el, message);
  disableEl($el);
};

export {
  qs,
  showEl,
  hideEl,
  handleProcessingEl,
};
