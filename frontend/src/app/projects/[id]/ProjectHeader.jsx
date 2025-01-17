import React, { useState } from 'react'

type Props = {
    activeTab: String;
    setActiveTab: (tabName: string) => void
};

const ProjectHeader = ({activeTab, setActiveTab}: Props) => {
    const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);

  return <div className='px-4 xl:px-5'>
    {/* MODAL NEW TASK */}

  </div>
}

export default ProjectHeader