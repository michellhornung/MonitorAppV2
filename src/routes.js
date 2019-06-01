import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Alarmes from '~/pages/Alarmes/alarmes';
import Grid from '~/pages/Grid/grid';
import Login from '~/pages/Login/login';
import SiteInfo from '~/pages/SiteInfo/siteInfo';
import Overview from '~/pages/Overview/overview';

const Routes = createAppContainer(createStackNavigator({
    Login,
    Overview,
    Grid,
    Main,
    Alarmes,
    SiteInfo,
}));

export default Routes;
