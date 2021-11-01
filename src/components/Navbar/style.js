
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LinkAnchor = styled(Link) `
  display: block;
  color: #222;
  text-decoration: none;  
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: #eb5424
  }

`
export const NavbarSection = styled.div `
padding: 5px 0;
overflow: hidden;
background: #fff;
position: relative;
border-bottom: 1px solid #000
}


`

export const Logo = styled.div `
width: 50%;
float: left;
}

`
export const LogoText = styled.h2 `
font-size: 30px;
    font-weight: bold;
    font-family: 'Lobster', cursive;
font-family: 'Roboto', sans-serif;
    
`


export const SpecialSpan = styled.span`
color: #eb5424;

`
    
export const UlList= styled.ul `
width: 50%;
    float: left;
    list-style: none;
    padding:0 ;

`
export const ListItem = styled.li`
display: inline-block;
font-family: 'Roboto', sans-serif;
cursor:pointer;

`
  

export const Anchor = styled.a `
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;


&:hover{

    color: #eb5424   
}

`



