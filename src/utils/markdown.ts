import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownContent() {
  const fullPath = path.join(process.cwd(), 'profile.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the metadata section
  const { content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content);
  
  const contentHtml = processedContent.toString();

  return {
    contentHtml
  };
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  points?: string[];
}

interface Education {
  school: string;
  degree: string;
  location: string;
  date: string;
  gpa: string;
}

interface Achievement {
  title: string;
  organization: string;
  date: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    leetcode: string;
    website: string;
  };
  objective: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: {
    languages: string[];
    databases: string[];
    aiml: string[];
    frameworks: string[];
    cloud: string[];
    tools: string[];
    soft: string[];
  };
  achievements: Achievement[];
  certifications: Certification[];
}

export function getProfileData(): ProfileData {
  const fullPath = path.join(process.cwd(), 'profile.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  matter(fileContents); // Just to parse the file, we don't need the content

  const profileData: ProfileData = {
    name: 'Nithesh K',
    title: 'AI-Driven Software Developer',
    tagline: 'GenAI & Web3 Enthusiast | Python | GCP | Blockchain',
    location: 'Coimbatore, Tamil Nadu, India',
    phone: '+91-8610361091',
    email: 'mr.nithesh.k@gmail.com',
    links: {
      linkedin: 'https://www.linkedin.com/in/mrnithesh',
      github: 'https://github.com/mrnithesh',
      leetcode: 'https://leetcode.com/u/mrnithesh',
      website: 'https://www.nithesh.codes'
    },
    objective: '',
    education: [{
      school: 'SNS College of Engineering',
      degree: 'B.E. in Computer Science and Engineering (IoT & Cyber Security including Blockchain Technology)',
      location: 'Coimbatore',
      date: 'Nov 2022 – May 2026',
      gpa: '8.92 / 10.0'
    }],
    experience: [
      {
        title: 'Generative AI Engineer Intern',
        company: 'SNS iNNovationHub',
        location: 'Coimbatore, India',
        date: 'Aug 2024 – Jan 2025',
        points: [
          'Developed AI-driven document processing pipelines using LLMs, OCR, and NLP',
          'Built intelligent scoring/feedback systems with RAG, vector DBs, and FastAPI',
          'Engineered recommendation & matching algorithms using embeddings and fine-tuned models'
        ]
      },
      {
        title: 'Generative AI Intern',
        company: 'Skillible',
        location: 'Remote',
        date: 'Jul 2024 – Aug 2024',
        points: [
          'Covered fundamentals, prompt engineering, task-based generation, and model limitations',
          'Focus on Generative AI, bias, and prompt design'
        ]
      },
      {
        title: 'Frontend Developer Intern',
        company: 'i2 Software Tech Solutions',
        location: 'Coimbatore, India',
        date: 'Jul 2024',
        points: [
          'Built responsive UIs using HTML, CSS, JS, and React.js',
          'Integrated REST APIs and used Git/GitHub for version control'
        ]
      }
    ],
    projects: [
      {
        name: 'Mercurious.ai',
        description: 'An AI-Powered YouTube Learning Platform',
        tech: ['Python', 'Streamlit', 'Google GenAI API', 'Firebase', 'NLP'],
        link: 'https://github.com/mrnithesh/Mercurious.ai'
      },
      {
        name: 'DiagramBot.ai',
        description: 'Open-source Diagram Generation Tool',
        tech: ['Python', 'Streamlit', 'Mermaid.js', 'Google GenAI API'],
        link: 'https://github.com/mrnithesh/DiagramBot-ai'
      },
      {
        name: 'Nila-AI Therapist',
        description: 'Personal AI Counselor',
        tech: ['Python', 'Streamlit', 'pyttsx3', 'MongoDB', 'Google GenAI'],
        link: 'https://github.com/mrnithesh/Nila-AI-Therapist'
      }
    ],
    skills: {
      languages: ['Python', 'Java', 'SQL', 'C', 'C++'],
      databases: ['MongoDB', 'MySQL', 'Vector Databases'],
      aiml: ['Generative AI', 'RAG', 'LangChain', 'Prompt Engineering', 'Embeddings'],
      frameworks: ['FastAPI', 'Flask', 'Streamlit', 'Pandas', 'NumPy'],
      cloud: ['Google Cloud Platform (GCP)'],
      tools: ['Docker', 'Git', 'Postman', 'Microsoft Office'],
      soft: ['Critical Thinking', 'Empathy', 'Team Collaboration', 'Quick Learning', 'Adaptability']
    },
    achievements: [
      {
        title: 'Top 98 – Google AI for Impact Hackathon',
        organization: 'Google',
        date: 'Dec 2024'
      },
      {
        title: 'Winner – AI Devs India Hackathon (36th Place)',
        organization: 'AI Devs India',
        date: 'Oct 2024'
      },
      {
        title: 'All Round Performer Award',
        organization: 'SNS College of Engineering',
        date: 'Apr 2024'
      }
    ],
    certifications: [
      {
        name: 'Build Real World AI Applications with Gemini & Imagen',
        issuer: 'Google',
        date: 'May 2025'
      },
      {
        name: 'Prompt Design in Vertex AI',
        issuer: 'Google',
        date: 'May 2025'
      },
      {
        name: 'Postman API Fundamentals Student Expert',
        issuer: 'Postman',
        date: 'Apr 2025'
      }
    ]
  };

  return profileData;
} 