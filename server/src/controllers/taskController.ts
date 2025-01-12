import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const getTasks = async (
    req: Request,
    res: Response
): Promise<void> =>{
    const { projectId } = req.query;
    try {
        const tasks = await prisma.task.findMany({
            where: {
                projectId: Number(projectId),
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true
            },
        })
        res.json(tasks)
    } catch (error: any) {
        res.status(500).json({ message: `Error retrieving tasks: ${error.message}`})
    }
}

// {
//     "title": ,
//     "description": ,
//     "status": ,
//     "priority": ,
//     "tags": ,
//     "startDate": ,
//     "dueDate": ,
//     "points": ,
//     "projectId": ,
//     "authorUserId": ,
//     "assignedUserId": ,
// }

export const createTask = async (
    req: Request,
    res: Response
): Promise<void> =>{
    const {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
        assignedUserId,

    } = req.body;
    try {
        console.log("where is name", req.body)
        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                status,
                priority,
                tags,
                startDate,
                dueDate,
                points,
                projectId,
                authorUserId,
                assignedUserId,
            },
        });
        res.status(201).json(newTask)
    } catch (error: any) {
        // console.log("error", error)
        res.status(500).json({ message: `Error creating a task: ${error.message}`})
    }
}

export const updateTaskStatus = async (
    req: Request,
    res: Response
): Promise<void> =>{
    const { taskId } = req.params;
    const { status } = req.body;
    try {
        const updateTask = await prisma.task.update({
            where: {
                id: Number(taskId)
            },
            data: {
                status: status,
            }
        });
        res.json(updateTask)
    } catch (error: any) {
        // console.log("error", error)
        res.status(500).json({ message: `Error updating task: ${error.message}`})
    }
}

