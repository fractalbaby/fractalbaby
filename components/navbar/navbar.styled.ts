import styled, { breakpoints } from "@xstyled/emotion"

export const Navbar = styled.nav({
  position: 'absolute',
  top: 0,
  padding: '14px 0',
})

export const DropDown = styled.div({
	cursor: 'pointer',
  display: 'flex',
  
  position: 'relative',
	'&:hover > ul': {
		display: 'block'
	}
})

export const MenuItem = styled.li({
  marginBottom: '8px'
}, breakpoints({
  md: {
    display: 'flex',
    marginBottom: '0',
  }
}))

export const SubMenu = styled.ul({
	display: 'block',
  paddingLeft: '16px',
  marginBottom: '16px',
}, breakpoints({
  'md': {
    display: 'none',
    position: 'absolute',
    paddingLeft: '0',
    marginBottom: '0',
    top: '30px',
    background: 'rgb(17, 24, 39)',
    padding: '16px',
    borderBottomLeftRadius: '20px',
    zIndex: '1',
    minWidth: '150px',
  }
}))
