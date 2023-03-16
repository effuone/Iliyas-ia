import { Router } from "express";
import ProjectController from "../controllers/ProjectController";
import multer from "multer";
import express from 'express'
import path from 'path'
let upload = multer({dest: `${process.cwd()}/documents/projects`})

export const ProjectRouter = Router()
ProjectRouter.use('/projects/documents', express.static(path.join(process.cwd(), 'documents', 'projects')));
ProjectRouter.post('/projects/', upload.single('image'), ProjectController.createProject)
ProjectRouter.get('/projects/', ProjectController.getProjects)
ProjectRouter.get('/projects/:id', ProjectController.getProject)
ProjectRouter.put('/projects/:id', upload.single('image'), ProjectController.updateProject)
ProjectRouter.delete('/projects/:id', ProjectController.deleteProject)

// app.get('/api/art', (req, res) => {
//     //     const data = JSON.pa
//     app.post('/api/art', upload.single('image'), (req, res) => {
//     //
//     app.get('/api/art/:id', (req, res) => {
//     //     const data = JSO
//     app.put('/api/art/:id', upload.single('image'), (req, res) => {
//     app.delete('/api/art/:id', (req, res) => {
//     //     const data = 