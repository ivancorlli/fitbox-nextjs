
import { Avatar, Box,  Text, VStack } from '@chakra-ui/react'
import React from 'react'

const GymCard = () => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg='alternate' >
        <VStack>
          <Box  w='250px' h='250px'
          pos="relative"
          bg="black"
          _before={{
            content: '""',
            backgroundImage:'https://bit.ly/2Z4KKcF',
            bgSize: "cover",
            pos: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            opacity: 0.75
          }}
          
          >
            <Box p='5px' pos='relative' filter='auto' brightness='100%' color='white'>
              <Avatar name='Old Skull'  overflow='hidden'  />
              <Text>
                  Oldskull Team
              </Text>
            </Box>
          </Box>
          <Text>
          sdfskdlhglksdjhgkljsdhgklsdhf

          </Text>
        </VStack>
    </Box>
  )
}

export default GymCard