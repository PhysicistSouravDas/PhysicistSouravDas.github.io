import dayjs from 'dayjs'

import 'dayjs/locale/en'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.locale('en')

dayjs.tz.setDefault('Asia/Tokyo')

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
