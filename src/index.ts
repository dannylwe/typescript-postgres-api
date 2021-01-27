import express from 'express';
import healthCheck from './routes/index';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 9000;

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(helmet());

app.use(healthCheck)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})