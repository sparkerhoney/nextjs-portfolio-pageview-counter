import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { Timeline } from './Timeline';
import { AwardGallery } from './AwardGallery';
import { ProjectShowcase } from './ProjectShowcase';
import { SkillChart } from './SkillChart';
import PersonalInformation from './PersonalInformation';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface ResumeSectionProps {
  children: ReactNode;
  delay?: number;
}

const ResumeSection = ({ children, delay = 0 }: ResumeSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-200 hover:bg-white/20"
    >
      {children}
    </motion.div>
  );
};

const Resume: React.FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      date: "2018.02-2019.08",
      title: "Dong-Ah Institute of Media and Arts",
      description: "Enrolled and withdrew from Acting major"
    },
    {
      date: "2020.03-2021.10",
      title: "Seoul Metropolitan Police Agency",
      description: "Enlisted and discharged from 3rd Mobile Unit"
    },
    {
      date: "2022.02-2024.06",
      title: "Myongji University",
      description: "Transferred to Industrial and Management Engineering (Expected graduation)"
    },
    {
      date: "2022.09-2023.08",
      title: "Computational Data Science Lab",
      description: "Undergraduate researcher at Myongji University"
    },
    {
      date: "2023.02-2024.02",
      title: "Data Science Club 'FoM'",
      description: "Founder and President at Myongji University"
    },
    {
      date: "2023.09-2024.02",
      title: "Market Designers - Tutoring",
      description: "AI Researcher and Prompt Engineer"
    },
    {
      date: "2024.03-",
      title: "Lingora AI Innovation Team",
      description: "AI Researcher and MLOps Engineer"
    }
  ];

  const awards = [
    { 
      title: "Summa Cum Laude in Industrial Management Engineering", 
      date: "2024.08", 
      description: "Awarded within Myongji University" 
    },
    {
      title: "National Assembly Public Data Competition - Commendation Award", 
      date: "2024.07", 
      description: "Awarded by the National Assembly of the Republic of Korea" 
    },
    { 
      title: "Myongji University On-site Training Review Competition Grand Prize", 
      date: "2024.01", 
      description: "Awarded within Myongji University" 
    },
    { 
      title: "Myongji University Data Science Club 'FoM' Step 2 Completion", 
      date: "2023.08", 
      description: "Awarded within Myongji University" 
    },
    { 
      title: "Myongji University Capstone Design Graduation Project Grand Prize", 
      date: "2023.06", 
      description: "Awarded within Myongji University" 
    },
    { 
      title: "Myongji University Data Analytics TA Social Advancement Scholarship", 
      date: "2022.12", 
      description: "Awarded within Myongji University" 
    },
    { 
      title: "Myongji University Data Analytics Competition Excellence Award", 
      date: "2022.12", 
      description: "Awarded within Myongji University" 
    },
    { 
      title: "Myongji University Learning Community Scholarship", 
      date: "2022.06", 
      description: "Awarded within Myongji University" 
    }
    
  ];

  const skills = [
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Deep Learning", level: 80 },
    { name: "Data Analysis", level: 85 },
    { name: "Web Development", level: 75 },
    { name: "Database Management", level: 70 }
  ];

  const projects = [
    {
      title: "AI Tutor Development",
      description: "Developing an AI-powered tutoring application",
      technologies: ["Python", "Machine Learning", "NLP"],
      link: "#"
    },
    {
      title: "Data Science Club Projects",
      description: "Various projects completed as part of the FoM Data Science club",
      technologies: ["Python", "Data Analysis", "Visualization"],
      link: "#"
    }
  ];


  
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto grid gap-6 sm:gap-8">

          <h2 className="py-2 sm:py-3 px-0.5 z-10 text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 font-bold duration-100 cursor-default animate-title font-display md:text-4xl lg:text-5xl whitespace-normal sm:whitespace-nowrap">
            Personal Information
          </h2>
          <PersonalInformation />

          <h2 className="py-2 sm:py-3 px-0.5 z-10 text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 font-bold duration-100 cursor-default animate-title font-display md:text-4xl lg:text-5xl whitespace-normal sm:whitespace-nowrap">
            Stacks
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg w-full max-w-4xl mx-auto">
            <img 
              src="https://skillicons.dev/icons?i=py,pytorch,tensorflow,aws,figma,gcp,git,github,html,css,supabase,mysql,postgresql,js,ts" 
              alt="skills logos" 
              className="max-w-full"
            />
          </div>

          <h2 className="py-2 sm:py-3 px-0.5 z-10 text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 font-bold duration-100 cursor-default animate-title font-display md:text-4xl lg:text-5xl whitespace-normal sm:whitespace-nowrap">
          Projects
          </h2>
          <ProjectShowcase projects={projects} />

          <h2 className="py-2 sm:py-3 px-0.5 z-10 text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 font-bold duration-100 cursor-default animate-title font-display md:text-4xl lg:text-5xl whitespace-normal sm:whitespace-nowrap">
            Awards
          </h2>
          <AwardGallery awards={awards} />

          <h2 className="py-2 sm:py-3 px-0.5 z-10 text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 font-bold duration-100 cursor-default animate-title font-display md:text-4xl lg:text-5xl whitespace-normal sm:whitespace-nowrap">
            Time Line
          </h2>
          <Timeline events={timelineEvents} />
        
          {/* <h2 className="py-2 sm:py-3 px-0.5 z-10 text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 font-bold duration-100 cursor-default animate-title font-display md:text-4xl lg:text-5xl whitespace-normal sm:whitespace-nowrap">
            Skills
          </h2>
          <SkillChart skills={skills} /> */}
      </div>
    </div>
  );
};

export default Resume;