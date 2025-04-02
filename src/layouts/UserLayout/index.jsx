import React, { Suspense } from 'react'
import { Box, Container } from '@mui/material'
import Header from '../../components/user/Header'
import Footer from '../../components/admin/Footer'
import LoadingSpinner from '../../components/common/LoadingSpinner'

const UserLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Container sx={{ flex: 1, py: 3 }}>
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </Container>
      </Box>
      <Box sx={{ mt: 'auto' }}>
        <Footer />
      </Box>
    </Box>
  )
}

export default UserLayout