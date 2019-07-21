class HTTPError extends Error {
  constructor({ message, statusText }) {
    super(message);
    this.tag = '[HTTP_ERROR]';
    this.statusText = statusText;
  }
}
export default HTTPError;
