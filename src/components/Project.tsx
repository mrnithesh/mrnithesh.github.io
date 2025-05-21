import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
  name: string;
  description: string;
  tech: string[];
  link: string;
}

const Project: React.FC<ProjectProps> = ({ name, description, tech, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaGithub className="text-2xl" />
        </a>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project; 