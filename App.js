import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

/* Stateful Component */
// export default class App extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Hello React Native 5</Text>
//       </View>
//     );
//   }
// }

/* Stateless Component */
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.purpleBox}>Purple: #C9C9FF</Text>
      </View>
      <View>
        <Text style={styles.blueBox}>Blue: #3D85C6</Text>
      </View>
      <View>
        <Text style={styles.greenBox}>Green: #96CC96</Text>
      </View>
      <View>
        <Text style={styles.yellowBox}>Yellow: #F4B940</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#C9C9FF',
    paddingVertical: 70,
    color: 'black',
    width: 350,
    borderRadius: 10,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  blueBox: {
    backgroundColor: '#3D85C6',
    paddingVertical: 70,
    color: 'black',
    width: 350,
    borderRadius: 10,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  greenBox: {
    backgroundColor: '#96CC96',
    paddingVertical: 70,
    color: 'black',
    width: 350,
    borderRadius: 10,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  yellowBox: {
    backgroundColor: '#F4B940',
    paddingVertical: 70,
    color: 'black',
    width: 350,
    borderRadius: 10,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
