import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.css'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

function App() {
  return (
    <div className="flex-col w-screen h-screen bg-background-dark flex items-center justify-center text-text-primary">
      <header className="flex flex-col items-center">
        <Heading>React Design System</Heading>
        <Text size="lg" className="text-text-secundary">Vite, Storybook, Tailwind, Tests</Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="md" className="font-semibold">E-mail</Text>
          <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input type="email" placeholder="Your e-mail" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text size="md" className="font-semibold">Password</Text>
          <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input type="password" placeholder="********" /> 
          </TextInput.Root>
        </label>
        <label htmlFor="check" className="flex items-center gap-2">
          <Checkbox id="check" />
          <Text size="sm" className="text-secundary">Check me</Text>
        </label>
        <Button className="mt-2" type="submit">Submit</Button>
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

export default App
