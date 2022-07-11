import { Box } from '@mui/material'
import styled from 'styled-components'

export const Root = styled(Box)`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: blue;
  overflow-y: scroll;
`
export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`
export const Nav = styled.div`
  display: flex;
  width: 100%;
  margin: 0.7rem 0 1rem;
  justify-content: space-between;
  align-items: center;
  color: white;
  a {
    color: white;
  }
`
export const Palettes = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 2.5rem;
`
