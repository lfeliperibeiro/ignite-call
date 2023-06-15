import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'

import { Container, Header } from '@/src/pages/register/styles'
import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from './styles'
import { ArrowRight } from 'phosphor-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { getWeekDays } from '@/src/utils/get-week-days'

const timeIntervalFormSchema = z.object({})
export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekday: 0, enable: false, startTime: '08:00', endTime: '18:00' },
        { weekday: 1, enable: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 2, enable: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 3, enable: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 4, enable: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 5, enable: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 6, enable: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const weekdays = getWeekDays()

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const intervals = watch('intervals')

  function handleSetTimeIntervals() {}

  return (
    <Container>
      <Header>
        <Heading as={'strong'}>Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>
      <IntervalBox as={'form'} onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Controller
                    render={({ field }) => {
                      return (
                        <Checkbox
                          onCheckedChange={(checked) =>
                            field.onChange(checked === true)
                          }
                          checked={field.value}
                        />
                      )
                    }}
                    name={`intervals.${index}.enable`}
                    control={control}
                  />
                  <Text>{weekdays[field.weekday]}</Text>
                </IntervalDay>
                <IntervalInputs>
                  <TextInput
                    size={'sm'}
                    type={'time'}
                    step={60}
                    disabled={intervals[index].enable === false}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  <TextInput
                    size={'sm'}
                    type={'time'}
                    step={60}
                    disabled={intervals[index].enable === false}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </IntervalInputs>
              </IntervalItem>
            )
          })}
        </IntervalContainer>
        <Button type={'submit'}>
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
