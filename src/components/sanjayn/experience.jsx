import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Experience = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    
    {
      title: 'Software Developer',
      company: 'Outliers United (Freelance)',
      url: 'https://www.outliersunited.com',
      period: 'Mar 2025 - Present',
      description: 'Developed real-world web and e-commerce applications and incubation organizations. Delivered production-ready solutions by understanding client requirements and implementing reliable systems.',
      highlights: ['Developed web and e-commerce apps and incubation orgs', 'Delivered production-ready solutions'],
    },
    {
      title: 'Software Developer & Machine Learning Engineer',
      company: 'Neovate (Freelance)',
      url: 'https://www.neovateai.tech',
      period: 'May 2025 - Present',
      description: 'Developing a multipurpose application for medical portfolio management, integrating software development and machine learning to build practical, user-focused solutions.',
      highlights: ['Architected multipurpose medical app', 'Delivered end-to-end freelance project'],
    },
    {
      title: 'AI Agentic Intern',
      company: 'Cubeaisolutions Tech Pvt Ltd',
      url: 'https://www.cubeaisolutions.com',
      period: 'Jul 2025 - Oct 2025',
      description: 'Built AI models for medical symptom analysis and sentiment classification, Gained hands-on experience in building practical, user-focused AI solutions.',
      highlights: ['Addressed real-world problem statements', 'Gained hands-on experience in practical AI solutions'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Professional Experience | Sanjay N</title>
        <meta
          name="description"
          content="Discover Sanjay N's professional experience as a Full Stack Developer and AI Engineer with freelance and internship roles in software development."
        />
        <meta property="og:title" content="Professional Experience | Sanjay N" />
        <meta property="og:description" content="Discover Sanjay N's professional experience as a Full Stack Developer and AI Engineer with freelance and internship roles in software development." />
        <meta property="og:url" content="https://sanjayn.me/#experience" />
        <meta property="og:type" content="website" />
      </Helmet>
    <section id="experience" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
<div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
    Professional <span className="text-glow-cyan">Experience</span>
  </h2>
  <div className="section-divider max-w-xs mx-auto" />
  <p className="text-silver-secondary text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
    Explore my journey through impactful roles and projects across software development and AI.
  </p>
</div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-glow-cyan/50 via-border to-transparent transform md:-translate-x-px" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-glow-cyan rounded-full transform -translate-x-1 md:-translate-x-1.5 mt-2 glow-cyan" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass-card p-6 hover-glow-cyan">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="font-display text-xl font-semibold text-silver-primary">
                        {exp.title}
                      </h3>
                      <span className="text-glow-cyan text-sm font-medium mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mb-3">
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-silver-metallic font-medium hover:text-glow-cyan transition-colors duration-300"
                      >
                        {exp.company}
                      </a>
                    </p>
                    <p className="text-silver-muted text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-space-deep/50 border border-border/50 rounded-full text-silver-secondary text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Experience;