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
            <h1 className="text-center">Forms</h1>
            <table class="docs-table collapsed-table" >
                    <thead>
                            <tr>
                                <th scope="col">Form Name</th>
                                <th scope="col">Needed When?</th>
                                <th scope="col">Download</th>
                            </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td data-th="Form Name">Aviation Medical Form</td>
                                <td data-th="Needed When?">Anytime your going flying or gliding</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="Form Name">TG 21 - Consent Form</td>
                                <td data-th="Needed When?">Anytime going on any out of Squadron activity</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>                            </tr>
                            <tr>
                                <td data-th="Form Name">TG 23 - Medical Form</td>
                                <td data-th="Needed When?">Anytime you need a TG 21 and if you have medical condition</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                    </tbody>
            </table>

            <h1 className="text-center">Publications</h1>
            <table class="docs-table collapsed-table" >
                    <thead>
                            <tr>
                                <th scope="col">Form Name</th>
                                <th scope="col">Needed When?</th>
                                <th scope="col">Download</th>
                            </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td data-th="Form Name">Aviation Medical Form</td>
                                <td data-th="Needed When?">Anytime your going flying or gliding</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="Form Name">TG 21 - Consent Form</td>
                                <td data-th="Needed When?">Anytime going on any out of Squadron activity</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>                            </tr>
                            <tr>
                                <td data-th="Form Name">TG 23 - Medical Form</td>
                                <td data-th="Needed When?">Anytime you need a TG 21 and if you have medical condition</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                    </tbody>
            </table>

            <h1 className="text-center">Exam Resources</h1>
            <table class="docs-table collapsed-table" >
                    <thead>
                            <tr>
                                <th scope="col">Form Name</th>
                                <th scope="col">Needed When?</th>
                                <th scope="col">Download</th>
                            </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td data-th="Form Name">Aviation Medical Form</td>
                                <td data-th="Needed When?">Anytime your going flying or gliding</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="Form Name">TG 21 - Consent Form</td>
                                <td data-th="Needed When?">Anytime going on any out of Squadron activity</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>                            </tr>
                            <tr>
                                <td data-th="Form Name">TG 23 - Medical Form</td>
                                <td data-th="Needed When?">Anytime you need a TG 21 and if you have medical condition</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                    </tbody>
            </table>

            <h1 className="text-center">Exam Resources</h1>
            <table class="docs-table collapsed-table" >
                    <thead>
                            <tr>
                                <th scope="col">Form Name</th>
                                <th scope="col">Needed When?</th>
                                <th scope="col">Download</th>
                            </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td data-th="Form Name">Aviation Medical Form</td>
                                <td data-th="Needed When?">Anytime your going flying or gliding</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="Form Name">TG 21 - Consent Form</td>
                                <td data-th="Needed When?">Anytime going on any out of Squadron activity</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>                            </tr>
                            <tr>
                                <td data-th="Form Name">TG 23 - Medical Form</td>
                                <td data-th="Needed When?">Anytime you need a TG 21 and if you have medical condition</td>
                                <td data-th="Download">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                    </tbody>
            </table>
            

            <SideMenu></SideMenu>

        </div>
    </>
    );
}

export default Documents;