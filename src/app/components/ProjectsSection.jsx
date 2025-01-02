"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Backup Automation Tool",
    description: "The backup_script.sh script is designed to perform backups of a specified directory with optional compression. It supports various compression methods including gzip, bzip2, zip, and xz. The script logs the status of the backup operation and optionally removes old backups.",
    image: "/images/projects/1.png",
    tag: ["All", "Script"],
    gitUrl: "https://github.com/PiyushN-24/BackupAutomationTool.git",
    previewUrl: "https://github.com/PiyushN-24/BackupAutomationTool/blob/master/README.md",
  },
  {
    id: 2,
    title: "AWS Resource Audit",
    description: "AWS Resource Audit is a shell script that automates the process of listing various AWS resources across multiple services in a specified region. This tool is ideal for auditing and keeping track of resources such as EC2 instances, S3 buckets, VPCs, and more.",
    image: "/images/projects/5.png",
    tag: ["All", "Script"],
    gitUrl: "https://github.com/PiyushN-24/AWS-Resourse-Audit.git",
    previewUrl: "https://github.com/PiyushN-24/AWS-Resourse-Audit/blob/master/README.md",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "DevOps"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-2 md:mb-6">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-4">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DevOps"
          isSelected={tag === "DevOps"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Script"
          isSelected={tag === "Script"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
