import { Container, Form, Input, Button, CreateButton, Link } from "./LoginCardStyles"


const LoginCard = () => {
  return (
    <Container>
      <Form>
        <Input type="text" placeholder="Email address or phone number" />
        <Input type="password" placeholder="Password" />
        <Button>Log in</Button>
        <Link>Forgotten Password?</Link>
        <CreateButton>Create new account</CreateButton>
      </Form>

    </Container>
  )
}

export default LoginCard
