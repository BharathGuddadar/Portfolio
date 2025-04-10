import React from "react";
import "../styles/WorkExperience.css";

const experiences = [
  {
    role: "Member of CodeShack",
    company: "Tech-Hub | Glug",
    duration: "Dec 2023 – Present",
    details: [
      "Mentored in CSOC (Codeshack Summer Of Code) in Web Development",
      "Completed community project (Event Management) with my team",
      "Organized 10+ events and a Hackathon (Hack-Nocturne) of 300+ participants",
      "Supported the AR ecosystem on campuses with Snapchat India."
    ]
  },
  {
    role: "Projects",
    
    duration: "Jan 2023 – Present",
    details: [
      "Event Management(Community Project): Efficient event scheduling, manage participant registrations, including attendance tracking and notifications, Task Assignment, Budget Management, Communication Platform and Feedback Collection.",
      "Placement web app: Secure authentication system for students and staff, Real-time updates on placement opportunities, company visits, and important deadlines, Preparation Resources, Personalized User Profiles, interaction between students, placement coordinators, and recruiters.",
      "MediApace(A fast Medicine delivery App)",
    ]
  },
  {
    role: "UI/UX Developer",
    
    duration: "Jan 2023 – Present",
    details: [
      "Designed a useful and elegant digital experience for a website from start to finish.",
      "Proficient in HTML, CSS, JavaScript, and graphic design tools like Canva and Figma."
    ]
  }
];

const WorkExperience = () => {
  return (
    <section className="work-experience" id="work">
      <h2 className="main-heading">Work Experience</h2>
      <div className="timeline" >
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p><strong>{exp.duration}</strong></p>
              <ul>
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default WorkExperience;
