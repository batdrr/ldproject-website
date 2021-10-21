import React from 'react'
import Img from  '../../images/svg-mail.svg';
import {
    ContactContainer,
    ContactWrapper,
    ContactText,
    ContactH1,
    ContactP1,
    ContactButtonWrapper,
    ContactButton,
    ContactIMG
} from './ContactElements';

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <ContactText>
                    <ContactH1>We'd love to hear from you, Let's work together.</ContactH1>
                    <ContactP1>Send us a message using the form on the side, or email us. We’ll received your message and give more information.</ContactP1>
                </ContactText>
                <ContactButtonWrapper>
                    <ContactButton type="button" onClick={(e) => {e.preventDefault();
                    window.location.href='http://wa.me/6281211613576';
                    }}>Whatsaap</ContactButton>
                    <ContactButton type="button" onClick={(e) => {e.preventDefault();
                    window.location.href='https://t.me/guessamihaha';
                    }}>Telegram</ContactButton> 
                    <ContactButton type="button" onClick={(e) => {e.preventDefault();
                    window.location.href='mailto:mindlessproject.id@gmail.com';
                    }}>Gmail</ContactButton>
                </ContactButtonWrapper>
            </ContactWrapper>
            <ContactIMG src={Img} />
        </ContactContainer>
    )
}

export default Contact
