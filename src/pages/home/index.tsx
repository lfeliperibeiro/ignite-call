import { Container, Hero, Preview } from '@/src/pages/home/styles'
import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import previewImage from '../../assets/app_preview.png'
import { ClaimUserNameForm } from '@/src/pages/home/components/ClaimUserNameForm'
import { NextSeo } from 'next-seo'
export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />
      <Container>
        <Hero>
          <Heading size={'4xl'}>Agendamento descomplicado</Heading>
          <Text size={'xl'}>
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUserNameForm />
        </Hero>
        <Preview>
          <Image
            src={previewImage}
            alt={'Calendário símbolizando a aplicação em funcionamento'}
            quality={100}
            priority
            width={827}
            height={442}
          />
        </Preview>
      </Container>
    </>
  )
}
