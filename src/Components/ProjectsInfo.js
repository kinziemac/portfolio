

class ProjectsInfo {

    getWorkExperience() {
      return [
        {
          title: "Software Engineer",
          company: "Grin Technologies",
          companyLogo: "GrinTech.png",
          dates: "May 2019 - Present",
          techs: ["html-css.png", "react.png"],
          descriptions: []
        },
        { title: "Web Developer",
          company: "MuseFind",
          companyLogo: "MuseFind.png",
          dates: "Oct 2016 - May 2018",
          techs: ["html-css.png", "react.png"],
          descriptions: [
            "Web developer for MuseFind, a SaaS company offering a relationship management platform",
            "Developed primarily in JavaScript (React), HTML & CSS (SASS) to create frontend application",
            "Developed interface with Instagram and Facebook APIs to store profile data",
            "Created automated testing suite for platform with Jest and Enzyme frameworks",
            "Member of workplace culture committee, planned monthly bonding events for company"
          ]
  
        },
        // { title: "Computer Science Tutor",
        //   company: "Core Academy",
        //   companyLogo: "CoreAcademy.png",
        //   dates: "Jan 2016 - May 2016",
        //   techs: ["java.svg"],
        //   descriptions: [
        //     "Tutored students in preparation for first-year computer science",
        //     "Created lesson sets to teach the fundamentals of computer science",
        //     "Introduced Java to students, and used Eclipse and IntelliJ IDEs"
        //   ]
        // },  
        { title: "QA Analyst II",
          company: "BestBuy",
          companyLogo: "BestBuy.jpeg",
          dates: "May 2015 - Nov 2015",
          techs: ["cpp.png"],
          descriptions: [
            "QA Test Analyst II for BestBuy Canada's eCommerce operations, both web and mobile platforms",
            "Ran regression tests for new web/mobile releases to eliminate manual testing",
            "Created automated tests in C++ to increase speed in workflow"
          ]
        }
      ]
    }

    getWebInformation() {
      return [
        { name: "Portfolio Website", 
              date: "Dec 2018", 
              desc: "Portfolio created in React JS to display experience, work, and general information about me.",
              platform: "React Appliaction", 
              link: "https://github.com/kinziemac/portfolio",
              image: "Portfolio.png",
              techs: [
                {
                  name: "React JS",
                  image: "react.png"
                },
                {
                  name: "HTML & CSS (SASS)",
                  image: "html-css.png"
                }
              ]
            }
      ]
    }

    getProjectInformation() {
        return [
            { name: "Mock BlockChain Miner", 
              date: "Dec 2018", 
              desc: "Mock BlockChain Miner created in Go - Blocks are mined concurrently using go-routines", 
              platform: "GoLang", 
              link: "https://github.com/kinziemac/goBlockchain",
              image: "blockchain.png",
              techs: [
                {
                  name: "GoLang",
                  image: "react.png"
                }
              ]
            },
            { name: "A* Search w/ GUI", 
              date: "Nov 2018",
              desc: 
                "Python application that uses A* search algorithm with Tkinter framework for the GUI.",
              platform: "Python Application", 
              link: "https://github.com/kinziemac/aStarUI",
              image: "AStarSearch.png",
              techs: [
                {
                  name: "Python",
                  image: "python.png"
                }
              ]
            },
            { name: "Spatio Temporal Imaging", 
              date: "Mar 2018",
              desc: "Java application that creates a spatio-temporal image to detect transitions in videos.",
              platform: "Java Application", 
              link: "https://github.com/kinziemac/sti-imaging",
              image: "STI-Imaging.png",
              techs: [
                {
                  name: "Java",
                  image: "java.svg"
                }
              ]
            },
            { name: "FlixFinder",
              date: "Nov 2017", 
              desc: "Google Chrome extension that connects to theMovieDB for film ratings and reviews.",
              platform: "Chrome Extension", 
              link: "https://github.com/kinziemac/netflixextension",
              image: "FlixFinder.png",
              techs: [
                {
                  name: "React JS",
                  image: "react.png"
                },
                {
                  name: "HTML & CSS (SASS)",
                  image: "html-css.png"
                }
              ]
            },
            { name: "Clarity Hierarchy", 
              date: "Apr 2017", 
              desc: "iOS application to help people reduce anxiety with entertaining activities, calming steps, and voice memos.",
              platform: "iOS App", 
              link: "https://github.com/kinziemac/ClarityHierarchy",
              image: "ClarityHierarchy.png",
              techs: [
                {
                  name: "Swift",
                  image: "swift.png"
                },
              ]
            }
          ]
    }



}

const projectInfo = new ProjectsInfo()
export default projectInfo