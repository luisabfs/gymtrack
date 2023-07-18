import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

export default function Main() {
    return (
        <NavigationContainer>
            <PaperProvider>
                <App />
            </PaperProvider>
        </NavigationContainer>
    )
}

AppRegistry.registerComponent(appName, () => Main);
