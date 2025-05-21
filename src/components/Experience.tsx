import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  date: string;
  points?: string[];
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  location,
  date,
  points,
}) => {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-lg text-blue-600">{company}</div>
        </div>
        <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2 sm:mt-0">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendar />
            <span>{date}</span>
          </div>
        </div>
      </div>
      {points && points.length > 0 && (
        <ul className="mt-4 space-y-2 text-gray-600">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Experience; 