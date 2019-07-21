import validateHandler from './validateHandler.js';

const handleRequest = async ({ beforeRequest, finishRequest, request }) => {
  if (validateHandler(beforeRequest)) {
    await beforeRequest();
  }
  await request();
  if (validateHandler(finishRequest)) {
    await finishRequest();
  }
};

export {
  handleRequest,
};
