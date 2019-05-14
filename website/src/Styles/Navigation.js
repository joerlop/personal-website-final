import styled, { css } from 'styled-components'

const Navigation = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 70px;
  grid-template-areas: "logo nav";
  grid-row-gap: 0;
  z-index: 1;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 55px 55px;
    grid-template-areas: 
      "logo"
      "nav";
  }

  .logo {
    font-size: 2rem;
    font-weight: bold;
    color: whitesmoke;
    text-decoration: none;
    grid-area: logo;
    align-self: center;
    justify-self: center;

    :hover {
      opacity: 0.7;
    }
  }
`

export default Navigation;