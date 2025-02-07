import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton } from "./ContactStyle";
import EarthCanvas from "../Canvas/Earth";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            { publicKey: process.env.REACT_APP_PUBLIC_KEY }
        ).then(
            (result) => {
                alert("Message Sent");
                form.current.reset();
            },
                (error) => {
                alert(error);
            }
        )
    }

    return (
        <Container>
            <Wrapper>
                <EarthCanvas />
                <Title>Contact</Title>
                <Desc>Feel free to reach out to me for any questions or opportunities</Desc>
                
                <ContactForm onSubmit={sendEmail} ref={form}>
                    <ContactTitle>Email me 🚀</ContactTitle>
                    <ContactInput placeholder="Your Email" name="from_email" />
                    <ContactInput placeholder="Your Name" name="from_name" />
                    <ContactInput placeholder="Subject" name="subject" />
                    <ContactInputMessage placeholder="Message" name="message" rows={4} />
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
            </Wrapper>
        </Container>
    )
}

export default Contact;