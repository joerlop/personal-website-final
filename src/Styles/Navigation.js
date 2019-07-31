import styled, { css } from 'styled-components'

const Navigation = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 150px;
  grid-template-areas: "logo nav";
  grid-row-gap: 0;
  z-index: 1;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 70px 60px;
    grid-template-areas: 
      "logo"
      "nav";
  }

  .logo {
    font-size: 2rem;
    color: whitesmoke;
    text-decoration: none;
    grid-area: logo;
    align-self: center;
    justify-self: center;

    @media (max-width: 700px) {
      align-self: end;
    }

    :hover {
      opacity: 0.7;
    }
  }
`

export default Navigation;