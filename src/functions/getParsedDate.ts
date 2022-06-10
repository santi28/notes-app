import dayjs from 'dayjs'

// Interfaz del retorno de la función getParsedDate
interface IGetParsedDate {
  timestamp: number
  formated: string
}

// Lista con todos los meses del año
const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

/** Obtiene la fecha actual y devuelve un objeto con la fecha formateada y el timestamp */
const getParsedDate = (isWithHour: boolean = true): IGetParsedDate => {
  // Obtiene la fecha actual
  const date: dayjs.Dayjs = dayjs()
  // Convierte la fecha actual a un timestamp
  const timestamp: number = date.unix()

  // Obtiene el mes actual
  const month: string = months[date.month()]

  const formatedHour: string | boolean = isWithHour ? 'HH:mm:ss' : false

  // Formatea la fecha actual
  const formated: string = dayjs().format(
    `DD [de] ${month}, ${formatedHour ?? ''}`
  )

  return { timestamp, formated }
}

export default getParsedDate
