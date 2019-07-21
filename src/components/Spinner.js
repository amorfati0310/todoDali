const spinnerTemplate = () => `
    <div class="spinner-child"></div>
    <div class="spinner-child"></div>
    <div class="spinner-child"></div>
  `;

function Spinner({ $target, isLoading = false }) {
  this.render = function (isLoading) {
    $target.innerHTML = isLoading
      ? spinnerTemplate()
      :      '';
  };
  this.render();
}

export default Spinner;
