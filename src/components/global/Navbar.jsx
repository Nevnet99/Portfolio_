/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { minBp } from '../../styles/mixins'

const NavbarContainer = styled.nav`
  margin-top: 30px;
  padding-bottom: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50000;
  padding: 30px 30px 20px 30px;
  background-color: black;
  margin: 0;

  ${({ theme }) => `
    border-bottom: 1px solid ${theme.color.primary};
      ${minBp(theme.breakpoints.b)} {
        padding: 30px 15px 20px 15px;
      }
  `}

  a {
    text-decoration: none;
  }
`

const ButtonsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 0px;
  overflow: hidden;
  ${({ theme }) => `
        ${minBp(theme.breakpoints.b)}{
            flex-direction: row;
            width: initial;
            height: 100%;
        }
  `}
`

const NavLink = styled.li`
  display: flex;
  justify-content: center;
  ${({ theme }) => `
     ${minBp(theme.breakpoints.b)}{
        margin: 0 30px;
     }
  `}

  button, a {
    background: none;
    position: relative;
    padding: 5px 15px;
    border-radius: 5px;
    text-transform: uppercase;
    font-family: 'Cabin';
    letter-spacing: 1.5px;
    font-size: 15px;
    ${({ theme }) => `
          &.active {
            	color: ${theme.color.primary};
              		${minBp(theme.breakpoints.b)} {
                      &::after {
                          content: '';
                          height: 3px;
                          width: 100%;
                          position: absolute;
                          top: -10px;
                          left: 0;
                          background: ${theme.color.primary};
                      }
                    }
                }
      `}
  }
`

const MaxWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  ${({ theme }) => `
    max-width: ${theme.maxWidth};

    ${minBp(theme.breakpoints.b)}{
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
  `}
`

const Navbar = props => {
  const navbar = useRef(null)
  const [state, setState] = useState({
    scrolling: false,
    isRoot: true,
  })

  const handleScroll = evt => {
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop
    if (scrollTop) {
      setState({ ...state, scrolling: true })
    } else {
      setState({ ...state, scrolling: false })
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', () => handleScroll())
  }, [])

  useEffect(() => {
    if (props.projectPage || props.blogPage) {
      setState({ ...state, isRoot: false })
    } else {
      setState({ ...state, isRoot: true })
    }
  }, [])

  const handleClick = (e, type) => {
    const elems = {
      ele1: document.querySelector('#projects'),
      ele2: document.querySelector('#blogPosts'),
      ele3: document.querySelector('#contactMe'),
    }

    const yOffset = state.scrolling ? -90 : -160
    const element = elems[`ele${type}`]
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <NavbarContainer ref={navbar}>
      <MaxWidth>
        <Link to="/">
          <h5>LUKE BRANNAGAN</h5>
        </Link>
        <ButtonsContainer>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>

          {!props.projectPage && !props.blogPage ? (
            <>
              <NavLink>
                <button onClick={() => handleClick(null, 1)} type="button">
                  Projects
                </button>
              </NavLink>
              <NavLink>
                <button onClick={() => handleClick(null, 2)} type="button">
                  Blog
                </button>
              </NavLink>
              <NavLink>
                <button onClick={() => handleClick(null, 3)} type="button">
                  Contact Me
                </button>
              </NavLink>
            </>
          ) : null}
        </ButtonsContainer>
      </MaxWidth>
    </NavbarContainer>
  )
}

export default Navbar
