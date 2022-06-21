import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container } from "../layoutComponents"
import { IoMdArrowDropdown } from "react-icons/io"

import Logo from "../../images/logo.svg"

const device = {
  sm: "18em",
  md: "56em",
}

const Header = styled.header`
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid var(--clr-accent);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: top 0.5s ease-out;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`

const LogoContainer = styled.div`
  img {
    height: 50px;
    transition: 0.4s;

    &[data-active="true"] {
      height: 75px;
    }
  }
`

const Nav = styled.nav`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & > * + * {
    margin-left: 1.5em;
  }

  @media screen and (max-width: ${device.md}) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
    align-items: center;
    position: absolute;
    top: 82px;

    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background: var(--clr-light);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    border-top: 1px solid var(--txt-dark-secondary);
    padding: 1em 2em 2em;

    & > * + * {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`

const GetQuote = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-accent-darker);
    color: var(--txt-light);
  }
`

const Dropdown = styled.li`
  /* hover display only on desktop */
  @media screen and (min-width: ${device.md}) {
    ul {
      position: absolute;
      z-index: 1000;
      display: none;
      opacity: 1;
      margin: 0;
      padding: 2em 2em 2em 1em;
      list-style-type: none;
      background: var(--clr-dark);

      li {
        a {
          color: var(--txt-light);
        }
      }
    }

    &:hover {
      ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-dark);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }

  @media screen and (max-width: ${device.md}) {
    font-size: var(--fs-b);
  }
`

const Burger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--clr-accent);

    :nth-child(1) {
      transform: ${({ nav }) =>
        nav ? "rotate(-45deg) translate(-6px, 5px)" : ""};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "")};
    }
    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "rotate(45deg) translate(-6px, -5px)" : ""};
    }
  }

  @media screen and (max-width: ${device.md}) {
    transform: scale(1);
    display: block;
    z-index: 10000;
  }
`

export default function HeaderBasic() {
  const [nav, navOpen] = useState(false)
  const [scrolled, setScrolled] = useState(true)

  function toggleMenu() {
    navOpen(!nav)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled == scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div>
      <Header>
        <Container>
          <HeaderWrapper>
            <LogoContainer>
              <Link to="/">
                <img data-active={scrolled} src={Logo} alt="" />
              </Link>
            </LogoContainer>
            <Nav>
              <Burger nav={nav} onClick={toggleMenu}>
                <div />
                <div />
                <div />
              </Burger>
              <NavList nav={nav}>
                {/* <Dropdown>
                  <StyledLink to="/services">
                    services
                    <IoMdArrowDropdown size={20} />
                  </StyledLink>
                  <ul>
                    <li>
                      <StyledLink to="/services/3d-printing">
                        3d printing
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/services/3d-fusion">
                        3d fusion
                      </StyledLink>
                    </li>
                  </ul>
                </Dropdown> */}
                <li>
                  <StyledLink to="/services/3d-printing">
                    3D printing
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/services/3d-fusion">3D fusion</StyledLink>
                </li>
                <li>
                  <StyledLink to="/gallery">gallery</StyledLink>
                </li>
                <li>
                  <StyledLink to="/about">about</StyledLink>
                </li>
                <li>
                  <StyledLink to="/contact">contact</StyledLink>
                </li>
                {/* <li>
                  <GetQuote to="/contact">
                    <span>contact</span>
                  </GetQuote>
                </li> */}
              </NavList>
            </Nav>
          </HeaderWrapper>
        </Container>
      </Header>
    </div>
  )
}
