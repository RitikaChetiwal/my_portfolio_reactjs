import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    { name: "css3", ext: "svg" },
    { name: "nodejs", ext: "png" },
    { name: "html5", ext: "svg" },
    { name: "vitejs", ext: "svg" },
    { name: "redux", ext: "svg" },
    { name: "handlebars", ext: "svg" },
    { name: "npm", ext: "svg" },
    { name: "webpack", ext: "svg" },
    { name: "postman", ext: "svg" },
    { name: "vercel", ext: "svg" },
    { name: "aws", ext: "svg" },
    { name: "javascript", ext: "svg" },
    { name: "react", ext: "png" },
    { name: "git", ext: "svg" },
    { name: "express", ext: "png" },
    { name: "njs", ext: "png" },
    { name: "github", ext: "png" },
    { name: "mysql", ext: "png" },
    { name: "vscode", ext: "png" },
    { name: "mongodb", ext: "png" },
    { name: "tailwindcss", ext: "svg" }
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.name}.${skill.ext}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.name}.${skill.ext}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
