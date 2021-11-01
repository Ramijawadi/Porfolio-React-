import React from 'react';
import Footer from '../Footer/Footer.js';

import {SectionDrop,DropTitle,Span,Form ,FormInput ,InputText,InputEmail,Sub , TextArea,Submit}  from './style.js';


const Contact = () => {
    return (
      <React.Fragment>
    <SectionDrop>
            <div class="container">
                <DropTitle><Span>Get</Span>In Touch</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <Sub type="text" class="sub" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <Submit type="submit" value="Send Message"/>
                </Form>
            </div>
        </SectionDrop>
        
        <Footer />


      </React.Fragment>
       
    )
}

export default Contact
