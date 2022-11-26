import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {TimerScreen, StopWatchScreen, AddActivityScreen} from './screens';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
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
  );
};

export default App;
