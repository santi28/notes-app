import { NavigationProp } from '@react-navigation/native'

interface IHeaderProps {
  isNote: boolean
  navigation?: NavigationProp<any, any>
}

interface INoteHeaderProps {
  navigation?: NavigationProp<any, any>
}

export { IHeaderProps, INoteHeaderProps }
