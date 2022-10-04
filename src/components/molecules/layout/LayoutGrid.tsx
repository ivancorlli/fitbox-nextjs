import { Grid, GridItem, Hide } from '@chakra-ui/react'
import React from 'react'
import LayoutBackground from '../../atoms/layout/LayoutBackground'

interface Props {
  children: React.ReactNode
  Aside?: any
}

/**
 * Contiene la grilla principal de la aplicacion, maneja el responsive
 */
const LayoutGrid = ({ children, Aside }: Props) => {
  return (
    <LayoutBackground>
      <Grid
        h="100vh"
        templateRows={['repeat(1, 1fr)']}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(5, 1fr)'
        ]}
      >
        <Hide below="lg">
          <GridItem colSpan={1} display={['none', 'none', 'none', 'block']}>
            <Aside />
          </GridItem>
        </Hide>
        {/* Main */}
        <GridItem colSpan={4}>{children}</GridItem>
      </Grid>
    </LayoutBackground>
  )
}

export default LayoutGrid
