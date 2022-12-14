import { Button } from "../../components/Button"
import { Checkbox } from "../../components/Checkbox"
import { Heading } from "../../components/Heading"
import { Text } from "../../components/Text"
import { TextInput } from "../../components/TextInput"
import { Envelope, Lock } from 'phosphor-react'
import { FormEvent } from "react"
import React from "react"
import axios from "axios"

function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = React.useState(false);

  function handleSignIn(event: FormEvent) {
    event.preventDefault()
    const [email, password]: any = event.target
    axios.post('/session', {
      email: email?.value,
      password: password?.value,
    }).then(() => setIsUserSignedIn(true))
  }

  return (
    <div className="flex-col w-screen h-screen bg-background-dark flex items-center justify-center text-text-primary">
      <header className="flex flex-col items-center">
        <Heading>React Design System</Heading>
        <Text size="lg" className="text-text-secundary">Vite, Storybook, Tailwind, Tests</Text>
      </header>
      <form onSubmit={handleSignIn} className="flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="md" className="font-semibold">E-mail</Text>
          <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input name="email" type="email" placeholder="Your e-mail" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text size="md" className="font-semibold">Password</Text>
          <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input name="password" type="password" placeholder="********" /> 
          </TextInput.Root>
        </label>
        <label htmlFor="check" className="flex items-center gap-2">
          <Checkbox id="check" />
          <Text size="sm" className="text-secundary">Check me</Text>
        </label>
        <Button className="mt-2" type="submit">{isUserSignedIn ? 'Logged In' : 'Submit'}</Button>
      </form>
      <footer className="flex flex-col items-center mt-4 gap-1">
        <Text size="sm" className="text-text-secundary">This is a design system example</Text>
        <Text size="sm" asChild className="text-text-secundary hover:text-text-primary underline">
          <a href="https://amandavmanduca.github.io/react-design-system/" target="_blank">
            Check out the Storybook docs
          </a>
        </Text>
        <Text size="sm" asChild className="text-text-secundary hover:text-text-primary underline">
          <a href="https://www.figma.com/file/JHuG4Yjup5sLf8KSxA7Wfr/Design-System?node-id=0%3A1" target="_blank">
            Check out the Figma docs
          </a>
        </Text>
      </footer>
    </div>
  )
}

export default SignIn
