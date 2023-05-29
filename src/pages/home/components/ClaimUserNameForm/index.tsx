import { Form } from './styles'
import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUserNameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUserNameForm() {
  const { register, handleSubmit } = useForm<ClaimUserNameFormData>()

  async function handleClaimUsernameForm(data: ClaimUserNameFormData) {
    console.log(data)
  }
  return (
    <Form as={'form'} onSubmit={handleSubmit(handleClaimUsernameForm)}>
      <TextInput
        size={'sm'}
        prefix={'ignite.com/'}
        placeholder={'seu-usuario'}
        {...register('username')}
      />
      <Button size={'sm'} type={'submit'}>
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
