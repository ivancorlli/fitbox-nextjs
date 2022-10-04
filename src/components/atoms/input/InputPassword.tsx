import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { InputBaseStyle } from './Input'

const InputPassword = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup size="md">
      <Input
        type={show ? 'text' : 'password'}
        placeholder="Ingresar contraseña"
        {...InputBaseStyle}
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
        />
      </InputRightElement>
    </InputGroup>
  )
}

export default InputPassword
