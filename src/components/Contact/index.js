import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton } from "./ContactStyle";
// import EarthCanvas from "../Canvas/Earth"; // will install package once it's compatible with react 19

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_tox7kqs",
            "template_nv7k7mj",
            form.current,
            "SybVGsYS52j2TfLbi"
        ).then(
            (result) => {
                alert("Message Sent");
                form.current.resut();
            },
                (error) => {
                alert(error);
            }
        )
    }

    return (
        <Container>
            <Wrapper>
                {/* <EarthCanvas /> */}
                <Title>Contact</Title>
                <Desc>Feel free to reach out to me for any questions or opportunities</Desc>
                
                <ContactForm onSubmit={handleSubmit}>
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