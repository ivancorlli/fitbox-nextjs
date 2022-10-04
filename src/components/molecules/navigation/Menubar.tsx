import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Show
} from '@chakra-ui/react'
import React from 'react'

const Menubar = ({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  return (
    <Show below="lg">
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent />
        <DrawerHeader borderBottomWidth="1px">
          Create a new account
        </DrawerHeader>
      </Drawer>
    </Show>
  )
}

export default Menubar
