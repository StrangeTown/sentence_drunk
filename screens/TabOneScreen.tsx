import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import { Button, Pressable, StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { RootTabScreenProps } from '../types'

const data = [
  {
    label: '没什么大不了的',
    value: 'No big deal',
  },
  {
    label: '你能帮我个忙吗',
    value: 'Look, will you do me a favor?',
  },
  {
    label: '说真的，兄弟，你太需要这个了',
    value: 'Honestly, man, you raelly need this',
  },
]

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const colorScheme = useColorScheme()
  const [dataIdx, setDataIdx] = useState(0)
  const [prevVal, setPrevVal] = useState('')

  const handleNextClick = () => {
    const nextIdx = dataIdx === data.length - 1 ? 0: dataIdx + 1
    setPrevVal(data[dataIdx].value)
    setDataIdx(nextIdx)
  }

  return (
    <View style={styles.container}>
      <View style={styles.prevItem}>
        <Text style={styles.prevItemValue}>{prevVal}</Text>
      </View>

      <View style={styles.main}>
        <View>
          <Text style={styles.tip}>{data[dataIdx].label}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <Pressable style={[styles.button, styles.buttonLater]}>
              <Text style={styles.buttonText}>Later</Text>
            </Pressable>
          </View>
          <View style={styles.next}>
            <Pressable
              style={[styles.button, styles.buttonNext]}
              onPress={handleNextClick}
            >
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
  prevItem: {
    marginBottom: 180,
  },
  prevItemValue: {
    color: '#ddd'
  },
  main: {},
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
    marginTop: 60,
  },
  tip: {
    textAlign: 'center',
    color: '#282c34',
  },
  next: {
    marginLeft: 20,
  },
  button: {
    height: 50,
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
    width: 140,
  },
  buttonNext: {
    padding: 0,
    backgroundColor: '#B4DCC5',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
})
