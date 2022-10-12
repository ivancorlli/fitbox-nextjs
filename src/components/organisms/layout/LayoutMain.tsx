import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Footbar from '../../molecules/navigation/Footbar'
import Navbar from '../../molecules/navigation/Navbar'
import Menubar from '../../molecules/navigation/Menubar'
import LayoutGrid from '../../molecules/layout/LayoutGrid'
import LayoutContent from '../../molecules/layout/LayoutContent'
import LayoutContainer from '../../molecules/layout/LayoutContainer'
import Aside from '../../molecules/navigation/Aside'

interface Props {
  children?: React.ReactNode
}

const LayoutMain = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleMenu() {
    onOpen()
  }
  const user = null

  return (
    <LayoutGrid Aside={Aside}>
      <LayoutContainer>
        {/* Navbar */}
        {user ? (
          <Navbar variant="logged" handleMenu={handleMenu} />
        ) : (
          <Navbar />
        )}
        {/* Menu */}
        <Menubar isOpen={isOpen} onClose={onClose} />
        <LayoutContent>{children}</LayoutContent>
        {/* Footer */}
        {user ? <Footbar variant="logged" /> : <Footbar />}
      </LayoutContainer>
    </LayoutGrid>
  )
}

export default LayoutMain
