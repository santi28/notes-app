import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, ScrollView } from 'react-native'
import AddNewNoteButton from '../components/AddNewNoteButton'
import { Header } from '../components/Headers'
import NotePreview from '../components/NotePreview'
import { theme } from '../theme'

const Home = () => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: theme.colors.primary
      }}>
      <Header />
      <ScrollView>
        <View
          key="notes-wrapper"
          style={{
            marginHorizontal: 25,
            flexDirection: 'row'
          }}>
          <View
            key="left-notes-wrapper"
            style={{
              alignSelf: 'stretch',
              flex: 1,
              marginRight: 7
            }}>
            <NotePreview title="Note 1">
              Sit elitr nonumy euismod ipsum ut est takimata
            </NotePreview>
            <NotePreview title="Hello World">
              Sit elitr nonumy euismod ipsum ut est takimata vel sit liber amet
              invidunt est et eleifend et takimata vel. Elitr sadipscing et
              augue sed volutpat. Eirmod sea et vero kasd dolore dignissim at
              feugiat ut est sed justo lorem. Facilisis magna est
            </NotePreview>
            <NotePreview title="Hello World">
              Sed at veniam invidunt sea et duis lorem ipsum nibh feugiat. Sed
              dolore volutpat dolore accumsan et accusam et lorem dolor volutpat
              sed et euismod sed accusam et quod. Diam dolore iusto consetetur
              aliquyam clita rebum invidunt amet dolore lorem
            </NotePreview>
          </View>
          <View
            key="right-notes-wrapper"
            style={{
              alignSelf: 'stretch',
              flex: 1,
              marginLeft: 7
            }}>
            <NotePreview title="Hello World">
              Sit elitr nonumy euismod ipsum ut est takimata vel sit liber amet
              invidunt est et eleifend et takimata vel. Elitr sadipscing et
              augue sed volutpat. Eirmod sea et vero kasd dolore dignissim at
              feugiat ut est sed justo lorem. Facilisis magna est
            </NotePreview>
            <NotePreview title="Hello World">
              Sed at veniam invidunt sea et duis lorem ipsum nibh feugiat. Sed
              dolore volutpat dolore accumsan et accusam et lorem dolor volutpat
              sed et euismod sed accusam et quod. Diam dolore iusto consetetur
              aliquyam clita rebum invidunt amet dolore lorem
            </NotePreview>
            <NotePreview title="Hello World">
              Sed at veniam invidunt sea et duis lorem ipsum nibh feugiat. Sed
              dolore volutpat dolore accumsan et accusam et lorem dolor volutpat
              sed et euismod sed accusam et quod. Diam dolore iusto consetetur
              aliquyam clita rebum invidunt amet dolore lorem
            </NotePreview>
          </View>
        </View>
      </ScrollView>
      <AddNewNoteButton navigation={navigation} />
    </View>
  )
}

export default Home
