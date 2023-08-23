import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Portfolio Website",
    description:
      "This is my personal portfolio website. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
    image: "/1.jpg",
    github: "https://github.com/NedimRamicevic/portfolio",
    link: "https://portfolio-taupe-zeta-24.vercel.app/?vercelToolbarCode=N7QwayH-efmltGl",
  },
  {
    name: "Ecommerce Website",
    description:
      "This is an ecommerce website for a clothing store. It is built with Angular and Tailwind CSS. It is hosted on Vercel.",
    image: "/ecommerce.png",
    github: "https://github.com/NedimRamicevic/ng-ecommerce",
    link: "https://ng-ecommerce-delta.vercel.app/home",
  },
  {
    name: "Films App",
    description:
      "This is a web app that shows the most popular movies and tv shows. It is built with React and Tailwind CSS. It is hosted on Netlify.",
    image: "/films.png",
    github: "https://github.com/NedimRamicevic/freelance-portfolio",
    link: "https://freelance-portfolio-eta.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description: "Netflix Clone is a web app that mimics the Netflix UI.",
    image: "/netflix.png",
    github: "",
    link: "https://neim-netflix-clone.netlify.app",
  },
  {
    name: "Tattoo Shop Website",
    description:
      "This is a website for a tattoo shop. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
    image: "/tattoosite.png",
    github: "https://github.com/NedimRamicevic/tattoo_site_nextjs",
    link: "https://tattoo-site-nextjs.vercel.app/?vercelToolbarCode=VgVF1ni-5vRNgsr",
  },
  
  
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl bg-white dark:bg-black duration-700 text-black dark:text-white">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection