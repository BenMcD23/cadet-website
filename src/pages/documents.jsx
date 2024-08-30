import SideMenu from "../components/sideMenu/sideMenu";
import Title from "../components/mainTitle/title";

import "./documentsStyles.css"
function Documents() {
    return (
    <>
        <div className="documents-container">
            <div className="bg-dark-blue-main title-hover text-center pb-3 lg:pt-14">
                <Title title="Documents"></Title>
            </div>
            <div className="grid grid-cols-1 text-center">
                <h1>Forms</h1>
                <div className="max-md:hidden grid grid-cols-3 text-center">

                    <h1>Form Name</h1>
                    <h1>When Needed?</h1>
                    <h1>Download</h1>
                </div>
                <div className="grid max-md:grid-cols-1 grid-cols-3 text-center">
                    <h3>Aviation Medical Form</h3>
                    <p>Anytime your going flying or gliding</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>

            </div>
            <SideMenu></SideMenu>

        </div>
    </>
    );
}

export default Documents;