
import React from 'react'
import { mapStateToProps, mapDispatchToProps } from '../app/store'
import { connect } from 'react-redux'
import { hiddenState } from '../app/functions'
import { MODES, MENU } from '../app/constants'

class Menu_ extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  render()
  {
    const { modeIndex, languageIndex, smallNavigator, visibleTools, visibleMenu } = this.props.store.app;
    const { color, background } = MODES[modeIndex]
    return (
      <section
        className={'menu' + (this.props.floating ? ' floating' + hiddenState(!visibleMenu) : '')}
        style={this.props.floating ? {
          borderTop: `1px solid ${color}`,
          borderBottom: `1px solid ${color}`
        }
        :
        {}}
      >
        <a href="#about-me">
          {
            MENU[languageIndex][0]
          }
        </a>
        <a href="#certifications">
          {
            MENU[languageIndex][1]
          }
        </a>
        <a href="#projects">
          {
            MENU[languageIndex][2]
          }
        </a>
        <a href="#contact">
          {
            MENU[languageIndex][3]
          }
        </a>
      </section>
    )
  }
}


const Menu = connect(mapStateToProps, mapDispatchToProps)(Menu_)
export default Menu;