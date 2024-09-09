import { useEffect, useState } from 'react';
import axios from 'axios';
import Title from "../components/mainTitle/title";
import ContactForm from "../components/contactForm/contactForm";

function Join() {


    return (
        <>
            <div className="bg-dark-blue-main title-hover text-center pb-3 lg:pt-14">
                <Title title="Joining Information"></Title>
                {/* <p className="text-xl leading-7 tracking-tight lg:text-2xl text-white pb-1 pt-4 px-8">
                    Throughout the year, the two main flights compete in various sessions to win a trophy at the end.<br /><br />
                    This is the current points tally.
                </p> */}
            </div>
            <ContactForm></ContactForm>
        </>
    );
}

export default Join;