// Style your components here
import styled from 'styled-components'

export const CustomButton = styled.button`
  color: ${props => (props.outline ? '#ffffff' : null)};
  background-color: ${props => (props.outline ? '#0b69ff' : null)};
  font-family: 'Open Sans';
  padding: 10px;
  border: 8px none #5a7184;
  border-radius: 4px;
`
export const Heading = styled.h1`
  color: ${props => (props.outline ? '#35469c' : null)};
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const BottomContainer = styled.div`
  background-image: url(${props => props.bgImage});
`
export const Text = styled.p`
  font-size: ${props => props.fontSize}px;
`
