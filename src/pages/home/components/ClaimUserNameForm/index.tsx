import { Form, FormAnnotation } from './styles'
import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hífens',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUserNameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUserNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUserNameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsernameForm(data: ClaimUserNameFormData) {
    console.log(data)
  }
  return (
    <>
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
      <FormAnnotation>
        <Text size={'sm'}>
          {errors.username
            ? errors.username?.message
            : 'Dígite o nome do usuário desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}
