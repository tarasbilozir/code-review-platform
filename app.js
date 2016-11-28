'use strict';
import 'colors';
import Koa from 'koa';
import serve from 'koa-static';

const app = new Koa();
const port = 3000;

app.use(serve(`${__dirname}/public`)).listen(port, () => {
  console.log('Server Started:'.green, 'http://localhost:'.blue + port.toString().blue);
});

export default app;
