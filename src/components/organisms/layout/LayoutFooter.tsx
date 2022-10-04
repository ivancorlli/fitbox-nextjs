import React from 'react'
import LayoutContainer from '../../atoms/layout/LayoutContainer'
import LayoutContent from '../../atoms/layout/LayoutContent'
import LayoutGrid from '../../molecules/layout/LayoutGrid'
import Aside from '../../molecules/navigation/Aside'
import Footbar from '../../molecules/navigation/Footbar'

const user = false

interface Props {
  children?: React.ReactNode
}

const LayoutFooter = ({ children }: Props) => {
  return (
    <LayoutGrid Aside={Aside}>
      <LayoutContainer>
        {/* Main */}
        <LayoutContent>{children}</LayoutContent>
        {/* Footer */}
        {user ? <Footbar variant="logged" /> : <Footbar />}
      </LayoutContainer>
    </LayoutGrid>
  )
}

export default LayoutFooter
