import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project5.jpeg";
import projectImage4 from "../assets/project6.jpeg";

export const projectss = [
    {
      id: 1,
      name: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
      image: projectImage1,
    },
    {
      id: 2,
      name: "N-Ary tree for the water jug problem",
      description:
        "A Java-based solution to the Water Jug Problem using an N-ary tree to model all possible states and actions. Implements search algorithms to find the optimal path to achieve a target water amount.",
      image: projectImage2,
    },
    {
      id: 3,
      name: "Virtual Casino in Java",
      description:
        "A Java-based virtual casino featuring games like guess the number and roll the dice. Implements object-oriented design for game logic, player management, and betting systems, with a focus on fairness and randomization.",
      image: projectImage3,
    },
    {
      id: 4,
      name: "Police Department Database in Java",
      description:
        "A Java-based system designed to manage a police department's records, including officer details, case files, and criminal records.",
      image: projectImage4,
    },
  ];

export const Projects = () => {
  return (
    <div className="bg-black pt-20 text-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">My projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectss.map((project)=>(
            <div key={project.id} className="group relative overflow-hidden rounded-3xl">
              <img src={project.image} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"></img>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="mb-2 text-xl">{project.name}</h3>
                <p className="mb-12 p-4">{project.description}</p>
              </div>
            </div>

        ))}
      </div>
    </div>
  )
}
