import express from "express";
import morgan from "morgan";


const app = express();



import proyectsRoutes from './routes/proyects.routes.js';
import taskRoutes from '../src/routes/task.routes.js';

//midleware
app.use(express.json());
app.use(morgan("dev"));


//Routes
app.use('/api/projects',proyectsRoutes);
app.use('/api/tasks',taskRoutes);

export default app;
