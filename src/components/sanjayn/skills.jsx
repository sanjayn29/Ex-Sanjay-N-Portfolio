import { useEffect, useRef, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Cpu, Database, Smartphone, Zap, GitBranch, CheckCircle } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Flat list of all skills with categories
  const allSkills = [
    // Programming Languages
    { name: 'Java', category: 'languages', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', category: 'languages', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', category: 'languages', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'SQL', category: 'languages', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    // Frontend Development
    { name: 'HTML', category: 'frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', category: 'frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', category: 'frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', category: 'frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', category: 'frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    // Backend Development
    { name: 'Node.js', category: 'backend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', category: 'backend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Flask', category: 'backend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    // Database & APIs
    { name: 'MongoDB', category: 'database', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', category: 'database', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', category: 'database', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    // Machine Learning and Deep Learning Frameworks
    { name: 'NumPy', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Scikit-learn', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    { name: 'TensorFlow', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Keras', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
    { name: 'OpenCV', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    // Tools
    { name: 'Postman', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Docker', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'VS Code', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git & GitHub', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Jupyter', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'Figma', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  const categories = [
    { key: 'languages', icon: Code, name: 'Languages', color: 'from-glow-cyan to-glow-blue' },
    { key: 'frontend', icon: Cpu, name: 'Frontend', color: 'from-glow-cyan to-glow-blue' },
    { key: 'backend', icon: Database, name: 'Backend', color: 'from-glow-cyan to-glow-blue' },
    { key: 'database', icon: Smartphone, name: 'Database', color: 'from-glow-cyan to-glow-blue' },
    { key: 'ml', icon: Zap, name: 'AI/ML', color: 'from-glow-cyan to-glow-blue' },
    { key: 'tools', icon: GitBranch, name: 'Tools', color: 'from-glow-cyan to-glow-blue' },
  ];

  // Filter skills based on the active category
  const filteredSkills = useMemo(() => {
    if (!activeCategory) {
      return allSkills;
    }
    return allSkills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  // Custom stagger delay calculation based on index for the grid animation
  const getStaggerDelay = (index) => {
    if (!isVisible) return '0ms';
    // Small initial delay, then stagger by 50ms per item
    return `${300 + index * 50}ms`;
  };

  // Generate random animation delay for each card
  const getFloatDelay = (index) => {
    return `${(index % 10) * 0.2}s`;
  };

  return (
    <>
      <Helmet>
        <title>Skills & Technologies | Sanjay N</title>
        <meta
          name="description"
          content="Explore Sanjay N's technical skills in Full Stack Development, AI/ML, databases, and modern technologies like React, Python, Java, and more."
        />
        <meta property="og:title" content="Skills & Technologies | Sanjay N" />
        <meta property="og:description" content="Explore Sanjay N's technical skills in Full Stack Development, AI/ML, databases, and modern technologies like React, Python, Java, and more." />
        <meta property="og:url" content="https://sanjayn.me/#skills" />
        <meta property="og:type" content="website" />
      </Helmet>
    <section id="skills" ref={sectionRef} className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Skills & <span className="text-glow-cyan">Technologies</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-silver-secondary text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
             Explore the tools and technologies I have mastered across different domains . 
            <span className="text-glow-cyan font-medium"> Click a category to filter</span>
          </p>
        </div>

        {/* Category Selector */}
        <div className={`flex justify-center flex-wrap gap-3 md:gap-6 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category, index) => {
            const isActive = activeCategory === category.key;
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(prev => (prev === category.key ? null : category.key))}
                className={`
                  flex items-center space-x-2 p-3 rounded-xl font-semibold text-sm md:text-base
                  transition-all duration-300 transform shadow-lg bg-space-card/50 border border-border/30
                  ${isActive
                    ? 'bg-glow-cyan text-cyan-600 scale-105 shadow-glow-cyan/50'
                    : 'text-silver-secondary hover:bg-glow-cyan/10 hover:scale-[1.02]'
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <category.icon size={18} className={isActive ? 'text-cyan-600' : 'text-glow-cyan'} />
                <span>{category.name}</span>
                {isActive && <CheckCircle size={14} className="text-green-600 ml-1" />}
              </button>
            );
          })}
          {/* Reset button */}
          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              className="flex items-center space-x-2 p-3 rounded-xl font-semibold text-sm md:text-base bg-red-600/20 text-silver-secondary hover:bg-red-600/30 border border-red-600/30 transition-all duration-300"
            >
              <CheckCircle size={14} className="text-red-400" />
              <span>Reset Filter</span>
            </button>
          )}
        </div>

        {/* Animated Tech Stack Grid */}
        <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 justify-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`
                flex flex-col items-center justify-center p-3 md:p-4 rounded-xl border-2
                bg-space-card/50 backdrop-blur-sm border-border/30
                transition-all duration-700 ease-out transform hover:scale-110 hover:shadow-2xl hover:bg-space-card/70 hover:z-10
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-70'}
              `}
              style={{
                transitionDelay: getStaggerDelay(index),
                minHeight: '90px',
              }}
            >
              {skill.iconSrc && (
                <img
                  src={skill.iconSrc}
                  alt={skill.name}
                  className="w-8 h-8 md:w-10 md:h-10 mb-2 flex items-center justify-center transition-transform hover:scale-110"
                  loading="lazy"
                />
              )}
              <span className="text-silver-primary text-xs md:text-sm font-semibold text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
    </>
  );
};

export default Skills;