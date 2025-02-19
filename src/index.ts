import express, { Application, Request, Response } from 'express';
import userService from '@/services/user';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

app.get('/user/:name', (req: Request, res: Response) => {

  const name = req.params.name;
  const user = userService.getUser(name);

  res.send({
    success: true,
    data: {
      user
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});