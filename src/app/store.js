import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/App';

export function mapStateToProps(state)
{
  return {
    store: state
  };
}

export function mapDispatchToProps(dispatch)
{
  return {
    updateMode(modeIndex)
    {
      dispatch({type: 'UPDATE_MODE', modeIndex})
    },
    updateLanguage(languageIndex)
    {
      dispatch({type: 'UPDATE_LANGUAGE', languageIndex})
    },
    setSmallNavigator()
    {
      dispatch({type: 'SET_SMALL_NAVIGATOR'})
    },
    updateTools(tools)
    {
      dispatch({type: 'UPDATE_TOOLS', tools})
    },
    updateMenu(menu)
    {
      dispatch({type: 'UPDATE_MENU', menu})
    }
  }
}

export const store = configureStore({
  reducer: {
    app: appReducer
  },
});