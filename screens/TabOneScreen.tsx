import { FontAwesome } from '@expo/vector-icons'
import { Button, Pressable, StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { RootTabScreenProps } from '../types'

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const colorScheme = useColorScheme()

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Text style={styles.tip}>能帮我一个忙吗</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <Pressable style={[styles.button, styles.buttonLater]}>
              <Text style={styles.buttonText}>Later</Text>
            </Pressable>
          </View>
          <View style={styles.next}>
            <Pressable style={[styles.button, styles.buttonNext]}>
              <FontAwesome
                  name="arrow-right"
                  size={14}
                  color={Colors[colorScheme].text}
                />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '60px',
  },
  tip: {
    textAlign: 'center',
    color: '#282c34',
  },
  next: {
    marginLeft: '20px',
  },
  button: {
    height: '40px',
    borderRadius: 20,
    backgroundColor: '#282c34',
    paddingHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  buttonLater: {
    width: 120,
  },
  buttonNext: {
    padding: 0,
    backgroundColor: '#B4DCC5',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  }
})
