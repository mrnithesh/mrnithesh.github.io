import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaMapMarkerAlt } from 'react-icons/fa';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  links: {
    linkedin: string;
    github: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  tagline,
  location,
  email,
  phone,
  links,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{name}</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-xl mb-6 text-blue-100">{tagline}</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-200" />
            <span>{location}</span>
          </div>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 hover:text-blue-200 transition-colors"
          >
            <FaEnvelope />
            <span>{email}</span>
          </a>
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 hover:text-blue-200 transition-colors"
          >
            <FaPhone />
            <span>{phone}</span>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero; 