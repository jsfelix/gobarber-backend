import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({
    message: 'Hello, World! This is a Node.js backend template.',
  });
});

export default routes;
