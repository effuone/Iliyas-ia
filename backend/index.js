import express from 'express';
import 'dotenv/config'
import { router } from './router';
import cors from 'cors'
import { allowCrossDomain } from './middlewares';
const app = express();
const PORT = process.env.PORT

app.use('/api', router)
app.use(cors)
app.use(express.json())
app.use(allowCrossDomain)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));