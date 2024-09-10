import Title from "../components/mainTitle/title";
import "./parentsStyles.css"

import StandingOrder from "../assets/standing_order.png";
import TG21 from "../assets/documents/TG Form 021.docx";
import TG23 from "../assets/documents/TG Form 023.docx";
import KitList from "../assets/documents/Kit List.pdf";


function Parents() {


    return (
        <>
            <div className="text-white bg-dark-blue-main title-hover text-center pb-3 lg:pt-14 mb-2">
                <Title title="Parents"></Title>
                <p className="text-xl leading-7 lg:text-2xl pb-1 pt-2 px-8">
                    This page is just some general information for parents/carers.
                </p>
            </div>
            <div className="max-w-screen-lg	m-auto pb-1 pt-2 px-8 text-align parent-main pb-3">
                <hr/>

                <h3 className="pt-4 text-3xl lg:text-4xl font-bold text-center">Subs</h3>
                <div className="">
                    <p className="text-xl lg:text-2xl col-span-3 md:pr-5">
                        We charge £17 per month per cadet. This is to cover costs on the Squadron as well as insurance for the cadets and national camps.
                        <br/><br/>
                        Please set up a standing order to pay this monthly to these details shown.

                    </p>
                    <div className="text-center m-auto text-3xl lg:text-4xl font-semibold">
                        <img src={StandingOrder} className="m-auto"></img>
                    </div>
                </div>

                <hr/>
                <h3 className="pt-4 text-3xl lg:text-4xl font-bold text-center">TG Forms</h3>

                <div className="grid grid-cols-1 lg:grid-cols-4">
                    
                    <p className="text-xl lg:text-2xl col-span-3 md:pr-5">

                        Most out of Squadron activities require a TG 21 form for your child to be able to attend. Check the joining instructions if you are unsure if the event requires a TG 21.
                        <br/><br/>
                        If your child has any medical conditions, they also require a TG 23 form per medical condition.

                    </p>
                    <div className="text-center m-auto text-3xl lg:text-4xl font-semibold grid grid-cols-2 gap-4">
                        <div className="">
                            <a href={TG21} target="_blank" rel="noopener noreferrer" className="parents-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-28">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                TG 21
                            </a>
                        </div>
                        <div>
                            <a href={TG23} target="_blank" rel="noopener noreferrer" className="parents-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-28">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                TG 23
                            </a>
                        </div>
                    </div>
                </div>
                <hr/>

                <h3 className="pt-4 text-3xl lg:text-4xl font-bold text-center">DofE</h3>

                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <p className="text-xl lg:text-2xl col-span-3 md:pr-5">
                        Every year we run lots a DofE expeditions as a Squadron. Due to this DofE expedition dates cannot be changed.<br/><br/>

                        Here is the kit list, your child must have every item on this kit list

                    </p>
                    <div className="text-center m-auto text-3xl lg:text-4xl font-semibold">
                        <div>
                            <a href={KitList} target="_blank" rel="noopener noreferrer" className="parents-svg">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-28">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                Kit List
                            </a>
                        </div>
                    </div>
                </div>
                <hr/>

                <h3 className="pt-4 text-3xl lg:text-4xl font-bold text-center">The Civilian Committee</h3>

                    <p className="text-xl lg:text-2xl col-span-3 md:pr-5">
                        The committee is a group of people who meet once a month to discuss funding proposals and upcoming events which the committee organise.<br/><br/>

                        Anyone can join, email chair.317@rafac.mod.gov.uk for more info.

                    </p>
                <hr/>

            </div>
        </>
    );
}

export default Parents;