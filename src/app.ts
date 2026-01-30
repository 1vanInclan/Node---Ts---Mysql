import express, {Request, Response} from 'express';
import routes from './routes/routes';



const App = express()
const PORT = process.env.PORT || 3000;

App.use(express.json());

App.get('/', async (req: Request, res: Response) => {
  res.send('Hi from express');
})

App.use('/', routes);

App.listen(PORT, () => {
  console.log(`Express API is running on port: ${PORT}`);
})

