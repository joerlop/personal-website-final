import styled, { css } from 'styled-components'

const Nav = styled.nav`
  grid-area: nav;
  align-self: center;
  justify-self: center;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.4rem; 

  .nav-item {
    font-weight: bold;
    color: whitesmoke;
    margin-left: 4%;
    text-decoration: none;
    
    :hover {
      opacity: 0.7
    }
  }
`

export default Nav;