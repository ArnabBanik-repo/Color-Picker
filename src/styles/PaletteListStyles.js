import { Box } from '@mui/material'
import { TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

export const Root = styled(Box)`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll;
  background-color: #000a55;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23000A55' cx='50' cy='0' r='50'/%3E%3Cg fill='%23020e5c' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23051264' cx='50' cy='100' r='50'/%3E%3Cg fill='%2307156c' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%230a1974' cx='50' cy='200' r='50'/%3E%3Cg fill='%230d1d7c' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%230f2184' cx='50' cy='300' r='50'/%3E%3Cg fill='%2311268c' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23132a94' cx='50' cy='400' r='50'/%3E%3Cg fill='%23142e9d' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%231532a5' cx='50' cy='500' r='50'/%3E%3Cg fill='%231637ae' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23173bb6' cx='50' cy='600' r='50'/%3E%3Cg fill='%231740bf' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%231744c8' cx='50' cy='700' r='50'/%3E%3Cg fill='%231649d1' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23154eda' cx='50' cy='800' r='50'/%3E%3Cg fill='%231252e3' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%230f57ec' cx='50' cy='900' r='50'/%3E%3Cg fill='%23085cf6' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%230061FF' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
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
  margin: 1rem 0 1.5rem;
  justify-content: space-between;
  align-items: center;
  color: white;
  a {
    color: white;
  }
`
export const Palettes = styled(TransitionGroup)`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 2.5rem;
`
