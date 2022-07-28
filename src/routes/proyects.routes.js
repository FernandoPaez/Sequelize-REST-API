import { Router } from "express";
import {getProyects,createProyec, updateProyect, deleteProject,getProyect,getProjectTask,} from '../controllers/proyects.controllers.js';

const router= Router();


router.get("/",getProyects);
router.get("/:id",getProyect);
router.post("/",createProyec);
router.put("/:id", updateProyect);
router.delete("/:id",deleteProject);

router.get("/:id/tasks",getProjectTask);



export default router;