import express, {Request, Response} from 'express';
import routes from './routes/routes';



const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  res.send('Hi from express');
})

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Express API is running on port: ${PORT}`);
})

