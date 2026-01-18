// Update this page (the content is just a fallback if you fail to update the page)
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sanjay N | Full Stack Developer & AI Engineer</title>
        <meta
          name="description"
          content="Welcome to Sanjay N's portfolio. Full Stack Developer, AI Engineer & Freelancer showcasing projects, skills, and achievements."
        />
        <meta property="og:title" content="Sanjay N | Full Stack Developer & AI Engineer" />
        <meta property="og:description" content="Welcome to Sanjay N's portfolio. Full Stack Developer, AI Engineer & Freelancer showcasing projects, skills, and achievements." />
        <meta property="og:image" content="https://sanjayn.me/preview.png" />
        <meta property="og:url" content="https://sanjayn.me/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h2>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
    </div>
    </>
  );
};

export default Index;
