import React from 'react'
import { styled } from '@mui/system'

const Section = styled('section')({
  height: '100vh',
  width: '100%',
  position: 'fixed',
  top: '0',
  lineHeight: '1.5rem',
  fontSize: '1rem',
  letterSpacing: '0.00938em',
})

const Page = ({ children }) => {
  return <Section>{children}</Section>
}

export default Page
