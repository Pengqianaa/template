import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const UserSwitch = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleSwitchToAdmin = () => {
    navigate('/admin')
  }

  const handleSwitchToUser = () => {
    navigate('/')
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="body2" color="text.secondary">
        {t('switchUser')}:
      </Typography>
      <Button
        variant="outlined"
        size="small"
        onClick={handleSwitchToAdmin}
        sx={{ textTransform: 'none' }}
      >
        {t('adminPanel')}
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={handleSwitchToUser}
        sx={{ textTransform: 'none' }}
      >
        {t('userPanel')}
      </Button>
    </Box>
  )
}

export default UserSwitch