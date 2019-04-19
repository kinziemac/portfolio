class ProjectsInfo {

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