import React from 'react';
import '../assets/styles/MySkills.css';

const skills = {
  "Programming Languages": [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Next.js', icon: 'devicon-nextjs-original-wordmark colored' },
    { name: 'HTML', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', icon: 'devicon-css3-plain colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' }
  ],
  "Frameworks & Libraries": [
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express.js', icon: 'devicon-express-original colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'Material UI', icon: 'devicon-materialui-plain colored' },
    { name: 'Shopify', icon: 'fab fa-shopify' }
  ],
  "Databases": [
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' }
  ],
  "Tools & Platforms": [
    { name: 'Figma', icon: 'devicon-figma-plain colored' },
    { name: 'Postman', icon: 'fab fa-postman' },
    { name: 'MS Office', icon: 'fab fa-microsoft' },
    { name: 'Visual Studio Code', icon: 'devicon-vscode-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Microsoft Azure', icon: 'devicon-azure-plain colored' },
    { name: 'Terminal', icon: 'devicon-bash-plain colored' },
    { name: 'VMware', icon: 'fab fa-vmware' },
    { name: 'Android Studio', icon: 'devicon-android-plain colored' }
  ],
  "Operating Systems": [
    { name: 'Windows XP', icon: 'devicon-windows8-original colored' },
    { name: 'Windows 7', icon: 'devicon-windows8-original colored' },
    { name: 'Windows 10', icon: 'devicon-windows8-original colored' },
    { name: 'macOS', icon: 'devicon-apple-original colored' },
    { name: 'Kali Linux', icon: 'devicon-linux-plain colored' },
    { name: 'Ubuntu', icon: 'devicon-ubuntu-plain colored' }
  ]
};

const MySkills = () => {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      {Object.keys(skills).map((category) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-container">
            {skills[category].map((skill) => (
              <div key={skill.name} className="skill-item">
                <i className={`skill-icon ${skill.icon}`}></i>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MySkills;