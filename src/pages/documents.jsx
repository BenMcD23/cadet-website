import SideMenu from "../components/sideMenu/sideMenu";
import Title from "../components/mainTitle/title";
import ScrollIntoView from 'react-scroll-into-view';

import "./documentsStyles.css"
function Documents() {
    return (
    <>
        <div className="bg-dark-blue-main title-hover text-center pb-3 lg:pt-14">
            <Title title="Documents"></Title>
        </div>
        <div className="documents-container grid grid-cols-1 lg:2-col-diff">
            <SideMenu></SideMenu>

            <div className="col-span-6">

                <h1 className="text-center" id="forms">Forms</h1>
                <table className="docs-table collapsed-table">
                        <thead>
                                <tr>
                                    <th scope="col">Form Name</th>
                                    <th scope="col">Download</th>
                                </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td data-th="">Aviation Medical Form</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">TG 21 - Consent Form</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>                            </tr>
                                <tr>
                                    <td data-th="">TG 23 - Medical Form</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                        </tbody>
                </table>

                <h1 className="text-center">Publications</h1>
                <table className="docs-table collapsed-table" >
                        <thead>
                                <tr>
                                    <th scope="col">Publication Name</th>
                                    <th scope="col">Download</th>
                                </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td data-th="">ACP 1 - Ethos and Core Values</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 1358 - Uniform and Dress</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 18 - Shooting                                </td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 2 - Cultural and Religious Diversity</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 3 - Honours and Awards</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 4 - Child Protection</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 48 - Junior NCO</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 49 - Senior NCO</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">AP 818 - RAF Drill and Ceremonial</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                        </tbody>
                </table>

                <h1 className="text-center">Exam Resources</h1>
                <h2 className="text-center">First Class</h2>
                <table className="docs-table collapsed-table" >
                        <thead>
                                <tr>
                                    <th scope="col">File Name</th>
                                    <th scope="col">Download</th>
                                </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td data-th="">ACP 31-2 - The RAF</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 31-4 - Initial Expedition Training (IET)</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 32-1 - Map Reading</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 33-1 - History of Flight</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">ACP 34-4 - Airmanship 1</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-th="">The History of the ATC</td>
                                    <td data-th="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                        </tbody>
                </table>

                <h2 className="text-center">Leading</h2>
                <table className="docs-table collapsed-table" >
                    <thead>
                            <tr>
                                <th scope="col">File Name</th>
                                <th scope="col">Download</th>
                            </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td data-th="">ACP 32-2 - Basic Navigation</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="">ACP 33-2 - Principles of Flight (POF)</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="">ACP 34-2 - Airmanship 2</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                </table>

                <h2 className="text-center" id="senior">Senior/Master</h2>
                <table className="docs-table collapsed-table" >
                    <thead>
                            <tr>
                                <th scope="col">File Name</th>
                                <th scope="col">Download</th>
                            </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td data-th="">ACP 32-3 - Air Navigation</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="">ACP 32-4 - Pilot Navigation</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="">ACP 33-3 - Propulsion</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="">ACP 33-4 - Airframes</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="">ACP 34-3 - Aircraft Handling</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="">ACP 34-4 - Operation Flying</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="">ACP 35-3 - Advanced Radio and Radar</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td data-th="">ACP 35-4 - Satellite Communication</td>
                                <td data-th="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </td>
                            </tr>
                            

                        </tbody>
                </table>
            </div>
        </div>
    </>
    );
}

export default Documents;