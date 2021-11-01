import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSection , LinkAnchor, Logo, LogoText, UlList, ListItem,SpecialSpan, Anchor }  from './style.js';





const Navbar = () => {
  return (
    <NavbarSection>
            <div className="container">
       <Logo>
            <LogoText>Port<SpecialSpan>Folio</SpecialSpan></LogoText>
        </Logo>
      <UlList>
            <ListItem><LinkAnchor to="/">Home </LinkAnchor></ListItem>
            <ListItem><Anchor href="#">Work</Anchor></ListItem>
            <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
            <ListItem><Anchor href="#">Resume</Anchor></ListItem>
            <ListItem><Anchor href="#">About</Anchor></ListItem>
            <ListItem><LinkAnchor to="/contact">Contact </LinkAnchor></ListItem>
        </UlList>
        
    </div>
    
</NavbarSection>
  );
}

export default Navbar;

