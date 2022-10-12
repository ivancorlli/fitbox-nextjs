import {
  Button,
  FormControl,
  Grid,
  GridItem,
  Input,
  Text
} from '@chakra-ui/react'
import React, { ChangeEvent } from 'react'
import InputPassword from '../../molecules/input/InputPassword'

interface props {
  onSubmit: () => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RegisterForm = ({ onSubmit, handleChange }: props) => {
  return (
    <FormControl onSubmit={onSubmit} h="100%">
      <Grid templateRows={['repeat(5, 1fr)']} gap={6}>
        <GridItem
          w="100%"
          rowSpan={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="1rem"
          p="5px"
        >
          <Input placeholder="Nombre de usuario" type="text" />
          <Input placeholder="Correo electronico" type="email" />
          <InputPassword handleChange={handleChange} variant="filled" />
        </GridItem>
        <GridItem
          w="100%"
          rowSpan={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="5px"
        >
          <Button w="75%">
            <Text variant="textbutton">Registrarse</Text>
          </Button>
        </GridItem>
      </Grid>
    </FormControl>
  )
}

export default RegisterForm
