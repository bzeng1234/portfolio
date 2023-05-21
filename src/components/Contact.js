import React from "react";
import '../styles/contact.css'

function Contact() {
    return (
        <div className="contact-container">
            <a href="https://www.linkedin.com/in/brandon-zeng-49184b163/"><img class="contact-logo" src="/icons/linkedln.svg" alt="linkedln"></img></a>
            <a href="https://github.com/bzeng1234"><img class="contact-logo" src="/icons/github.svg" alt="github"></img></a>
            <a href="/"><img class="contact-logo" src="/icons/gmail.svg" alt="gmail"></img></a>
        </div>
    );
};

export default Contact;