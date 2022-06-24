import environment from './config/environment';
import app from './config/express';

const server = app.listen( environment.PORT, () => {
  console.log(`HCM started!\nPort: ${environment.PORT}\n`);
});

export default server;