import { Calendar } from '@/src/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />
      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            terça-feira, <span>20 de Junho</span>
          </TimePickerHeader>
          <TimePickerList>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
            <TimePickerItem>9:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
