import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {TimerScreen, StopWatchScreen, AddActivityScreen} from './screens';

// Store
import {Provider} from 'react-redux';
import {store} from './store';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Home"
            component={TimerScreen}
            options={{
              title: 'Timer',
            }}
          />

          <Screen name="Cronometro" component={StopWatchScreen} />
          <Screen name="Adicinar atividade" component={AddActivityScreen} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
