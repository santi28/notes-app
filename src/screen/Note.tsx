import dayjs from 'dayjs'
import 'dayjs/locale/es'
import localeData from 'dayjs/plugin/localeData'
import * as Localization from 'expo-localization'

import React from 'react'
import { Text, TextInput, View, ScrollView } from 'react-native'
import { theme } from '../theme'

dayjs.extend(localeData)

const capitalize = (word: string) => {
  const lower = word.toLowerCase()
  return word.charAt(0).toUpperCase() + lower.slice(1)
}

const getParsedDate = () => {
  const date = dayjs()
  dayjs.locale('es')
  const monthName = capitalize(date.format('MMMM'))
  // eslint-disable-next-line prettier/prettier
  return date.format(`DD [de] [${monthName}], HH:mm:ss`)
}

const Note = () => {
  const [noteDate, setNoteDate] = React.useState(getParsedDate())

  // For each second that passes, update the noteDate
  React.useEffect(() => {
    setInterval(() => {
      setNoteDate(getParsedDate())
    }, 1000)
  }, [])

  return (
    <ScrollView
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: theme.colors.primary
      }}>
      <View
        style={{
          margin: 25
        }}>
        <TextInput
          style={{
            fontFamily: theme.fonts.typos.bold,
            fontSize: theme.fonts.sizes.large + 15,
            color: theme.colors.white,
            marginBottom: 15
          }}
          multiline={true}
          placeholderTextColor={`${theme.colors.white}99`}
          placeholder="Titulo de la nota"
        />
        <Text
          style={{
            color: `${theme.colors.white}4D`,
            fontFamily: theme.fonts.typos.regular,
            fontSize: theme.fonts.sizes.medium
          }}>
          {noteDate}
        </Text>
      </View>
    </ScrollView>
  )
}

export default Note
