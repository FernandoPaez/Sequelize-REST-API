import {Router} from 'express';
import{getTasks,createTask,deleteTask,updateTask, getTask,} from '../controllers/tasks.controllers.js';


const router= Router();



router.get('/',getTasks);
router.post('/',createTask);
router.put('/:id',updateTask);
router.delete('/:id',deleteTask);
router.get('/:id',getTask);


export default router;
