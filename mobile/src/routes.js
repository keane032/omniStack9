import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login'
import Books from './pages/Books'
import List from './pages/List'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Books,
        List
    })
)

export default Routes;