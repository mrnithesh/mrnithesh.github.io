import { getProfileData } from '@/utils/markdown';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Experience from '@/components/Experience';
import Project from '@/components/Project';

export default async function Home() {
  const data = getProfileData();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Hero
          name={data.name}
          title={data.title}
          tagline={data.tagline}
          location={data.location}
          email={data.email}
          phone={data.phone}
          links={{
            github: data.links.github,
            linkedin: data.links.linkedin,
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Experience & Projects */}
          <div className="lg:col-span-2">
            <Section title="Experience">
              {data.experience.map((exp, index) => (
                <Experience key={index} {...exp} />
              ))}
            </Section>

            <Section title="Projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.projects.map((project, index) => (
                  <Project key={index} {...project} />
                ))}
              </div>
            </Section>
          </div>

          {/* Sidebar - Skills & Achievements */}
          <div className="lg:col-span-1">
            <Section title="Education">
              {data.education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                  <div className="text-sm text-gray-500 mt-1">
                    <span>{edu.date}</span>
                    <span className="mx-2">•</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </Section>

            <Section title="Skills">
              <div className="space-y-4">
                <SkillCategory title="Languages" items={data.skills.languages} />
                <SkillCategory title="AI/ML" items={data.skills.aiml} />
                <SkillCategory title="Frameworks" items={data.skills.frameworks} />
                <SkillCategory title="Databases" items={data.skills.databases} />
                <SkillCategory title="Cloud" items={data.skills.cloud} />
                <SkillCategory title="Tools" items={data.skills.tools} />
              </div>
            </Section>

            <Section title="Achievements">
              {data.achievements.map((achievement, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">
                    {achievement.organization} • {achievement.date}
                  </p>
                </div>
              ))}
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}

const SkillCategory: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div>
    <h4 className="text-sm font-medium text-gray-700 mb-2">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);
