import { Router } from "express";
import { ProjectRouter } from "./ProjectRouter";
export const router = new Router()

router.use(ProjectRouter)