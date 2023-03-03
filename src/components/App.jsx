import '../sass/App.scss'
import React from 'react'
import { mapStateToProps, mapDispatchToProps } from '../app/store'
import { connect } from 'react-redux'
import { MODES, LANGUAGES, CERTIFICATIONS, PROJECTS, ADITIONAL, MENU } from '../app/constants'
import { hiddenState } from '../app/functions'
import Tools from './Tools'
import Menu from './Menu'

class App_ extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  componentDidMount()
  {
    const navigator = document.querySelector('.navigator')
    const presentation = document.querySelector('.presentation') 

    presentation.style.marginTop = `${navigator.clientHeight}px`

    if (navigator.clientWidth <= 768)
      this.props.setSmallNavigator();
  }
  render()
  {
    const { modeIndex, languageIndex, smallNavigator, visibleTools, visibleMenu } = this.props.store.app;
    const { color, background } = MODES[modeIndex]
    return (
      <div
        className='app'
        style={{
        color: color,
        backgroundColor: background
      }}>
        <nav
          className='navigator'
          style={{
            borderBottom: `1px solid ${color}`
          }}
        >
          {
            smallNavigator ?
            <>
            <button
              className='tools'
              onClick={() => {
                this.props.updateTools(!visibleTools);
                this.props.updateMenu(false);
              }}
              style={{
                color: color,
                backgroundColor: background
              }}
            >
              <i className="bi bi-gear-fill"></i>
            </button>
            <button
              className='menu'
              onClick={() => {
                this.props.updateTools(false);
                this.props.updateMenu(!visibleMenu);
              }}
              style={{
                color: color,
                backgroundColor: background
              }}
            >
              <i className="bi bi-list"></i>
            </button>
            </>
            :
            <>
            <Tools floating={false}/>
            <Menu floating={false}/>
            </>
          }
          <Tools floating={true}/>
          <Menu floating={true}/>
        </nav>
        <section
          className='presentation'
          style={{
            borderBottom: `1px solid ${color}`
          }}
        >
          <img className='personal-photo' src="./images/perfil_4.jpg" alt="Picture de Gino Llano" />
          <div className='greeting'>
            {
              ADITIONAL[languageIndex].greeting
            }
          </div>
          <div className='charge'>
            {
              ADITIONAL[languageIndex].charge
            }
          </div>
          <img className='computer-image' src="./images/hero-inferior.svg" alt="Image of a computer" />
        </section>
        <section
          id='about-me'
          style={{
            borderBottom: `1px solid ${color}`
          }}
        >
            <div className='title'>
              {
                MENU[languageIndex][0]
              }
            </div>
            <div className='content'>
              {
                ADITIONAL[languageIndex].aboutMe
              }
            </div>
        </section>
        <section
          id='certifications'
          style={{
            borderBottom: `1px solid ${color}`
          }}
        >
            <div className='title'>
              {
                MENU[languageIndex][1]
              }
            </div>
            <div className='list'>
              {
                CERTIFICATIONS.map((certification, index) =>
                <a
                  key={index}
                  className='certification'
                  href={certification.link} target="_blank" rel="noopener noreferrer"
                  style={{
                    borderBottom: `1px solid ${color}`
                  }}
                >
                  {
                    certification.title
                  }
                  <span>
                    {
                      certification.from
                    }
                  </span>
                </a>
                )
              }
            </div>
        </section>
        <section
          id='projects'
          style={{
            borderBottom: `1px solid ${color}`
          }}
        >
          <div className='title'>
            {
              MENU[languageIndex][2]
            }
          </div>
          <div className='list'>
          {
            PROJECTS.map((project, index) => 
            <div
              key={index} className='project'
              style={{
                border: `1px solid ${color}`
              }}
            >
              <div className='title'>
                  {
                    project.content[languageIndex].title
                  }
              </div>
              <div className='content'>
                <div className='text'>
                  <div className='description'>
                    {
                      project.content[languageIndex].description
                    }
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {
                      ADITIONAL[languageIndex].liveProject
                    }
                  </a>
                </div>
                  <img src={"./images/" + project.image} alt="" />
              </div>
            </div>
            )
          }
          </div>
        </section>
        <section id='contact'>
          <div className="title">
            {
              MENU[languageIndex][3]
            }
          </div>
          <div className='letstalk'>
            {
              ADITIONAL[languageIndex].letsTalk
            }
          </div>
          <div className='links'>
            <a href="mailto:ginollano00@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/gino-llano/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/gino-llano" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>
      </div>
    )
  }
}


const App = connect(mapStateToProps, mapDispatchToProps)(App_)
export default App;