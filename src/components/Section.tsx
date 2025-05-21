interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section; 