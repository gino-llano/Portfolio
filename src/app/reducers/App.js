import { deepCopy } from '../functions.js'
const INITIAL_STATE =
{
  modeIndex: 0,
  languageIndex: 0,
  smallNavigator: false,
  visibleTools: false,
  visibleMenu: false
}
function appReducer(state = INITIAL_STATE, action)
{
  const newState = deepCopy(state)
  switch (action.type)
  {
    case 'UPDATE_MODE':
      newState.modeIndex = action.modeIndex;
      break;
    case 'UPDATE_LANGUAGE':
      newState.languageIndex = action.languageIndex;
      break;
    case 'SET_SMALL_NAVIGATOR':
      newState.smallNavigator = true;
      break;
    case 'UPDATE_TOOLS':
      newState.visibleTools = action.tools;
      break;
    case 'UPDATE_MENU':
      newState.visibleMenu = action.menu;
      break;
  }
  return newState;
}
export default appReducer;