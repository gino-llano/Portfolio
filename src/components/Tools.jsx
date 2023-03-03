
import React from 'react'
import { mapStateToProps, mapDispatchToProps } from '../app/store'
import { connect } from 'react-redux'
import { hiddenState } from '../app/functions'
import { LANGUAGES, MODES } from '../app/constants'

class Tools_ extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  componentDidMount()
  {
    const ln = window.navigator.language || navigator.browserLanguage;
    
    for (let i=0; i<LANGUAGES.length; i++)
    {
      const language = LANGUAGES[i];
      if (ln.includes(language.name))
      {
        this.props.updateLanguage(i);
        break;
      }
    }
  }
  render()
  {
    const { modeIndex, languageIndex, smallNavigator, visibleTools, visibleMenu } = this.props.store.app;
    const { color, background } = MODES[modeIndex]
    return (
      <section
        className={'tools' + (this.props.floating ? ' floating' + hiddenState(!visibleTools)  : '')}
        style={this.props.floating ? {
          borderTop: `1px solid ${color}`,
          borderBottom: `1px solid ${color}`
        }
        :
        {}
        }
      >
        <button
          className='mode'
          onClick={() => this.props.updateMode((modeIndex + 1) % 2)}
          style={{
            color: color,
            backgroundColor: background
          }}
        >
        {
          MODES[modeIndex].name === 'light' ?
          <i className="bi bi-lightbulb-fill"></i>
          :
          <i className="bi bi-lightbulb"></i>
        }
        </button>
        <div className="languages dropdown">
          <button
            className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
            style={{
              border: `1px solid ${color}`
            }}
          >
            {
              LANGUAGES[languageIndex].list[0]
            }
          </button>
          <ul className="list dropdown-menu">
            {
              LANGUAGES[languageIndex].list.slice(1).map((language, index) => 
              <li key={index}>
                <button
                  className="dropdown-item"
                  onClick={() => this.props.updateLanguage((languageIndex + 1) % 2)}
                >
                  {
                    language
                  }
                </button>
              </li>
              )
            }
          </ul>
        </div>
      </section>
    )
  }
}


const Tools = connect(mapStateToProps, mapDispatchToProps)(Tools_)
export default Tools;