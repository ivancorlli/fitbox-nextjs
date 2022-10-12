import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

interface props {
  variant: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputPassword = ({ handleChange, variant }: props) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup size="md">
      <Input
        name="password"
        onChange={handleChange}
        type={show ? 'text' : 'password'}
        placeholder="Ingresar contraseña"
        variant={variant}
      />
      <InputRightElement width="4.5rem">
        <IconButton
          bg="transparent"
          aria-label="eye button"
          h="1.75rem"
          icon={show ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          onClick={handleClick}
          _active={{
            bg: 'transparent'
          }}
          _hover={{
            bg: 'transparent'
          }}
        />
      </InputRightElement>
    </InputGroup>
  )
}

export default InputPassword
