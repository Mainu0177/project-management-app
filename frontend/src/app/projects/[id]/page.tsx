"use client"

import { useState } from "react";
import ProjectHeader from "@/app/projects/projectHeader";

type Props = {
    params: {id: string}
}

const Project = ({ params }: Props) =>{
    const { id } = params; 
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)

    return (
        <div>
        {/* MODAL NEW TASKS */}
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        activeTab
    </div>
    )
}

export default Project;

