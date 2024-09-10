import Title from "../components/mainTitle/title";
import ScrollIntoView from 'react-scroll-into-view';

import "./documentsStyles.css"

// all documents imports
import TG21 from "../assets/documents/forms/TG Form 021.docx";
import TG23 from "../assets/documents/forms/TG Form 023.docx";
import AvMed from "../assets/documents/forms/ACO Av Med Form 1.xlsx";

import ACP001 from "../assets/documents/publications/ACP 001.docx";
import ACP1358 from "../assets/documents/publications/ACP 1358.pdf";
import ACP018 from "../assets/documents/publications/ACP 018 Vol 3.pdf";
import ACP002 from "../assets/documents/publications/ACP 002.docx";
import ACP003 from "../assets/documents/publications/ACP 003.docx";
import ACP004 from "../assets/documents/publications/ACP 004.docx";
import ACP048 from "../assets/documents/publications/ACP 048.docx";
import ACP049 from "../assets/documents/publications/ACP 049.docx";
import AP818 from "../assets/documents/publications/AP818.pdf";

import ACP312 from "../assets/documents/first_class/ACP 31-2.pdf";
import ACP314 from "../assets/documents/first_class/ACP 31-4.pdf";
import ACP321 from "../assets/documents/first_class/ACP 32-1.pdf";
import ACP331 from "../assets/documents/first_class/ACP 33-1.pdf";
import ACP341 from "../assets/documents/first_class/ACP 34-1.pdf";
import History from "../assets/documents/first_class/History of the ATC.pptx";

import ACP322 from "../assets/documents/leading/ACP 32-2.pdf";
import ACP332 from "../assets/documents/leading/ACP 33-2.pdf";
import ACP342 from "../assets/documents/leading/ACP 34-2.pdf";

import ACP323 from "../assets/documents/senior-master/ACP 32-3.pdf";
import ACP324 from "../assets/documents/senior-master/ACP 32-4.pdf";
import ACP333 from "../assets/documents/senior-master/ACP 33-3.pdf";
import ACP334 from "../assets/documents/senior-master/ACP 33-4.pdf";
import ACP343 from "../assets/documents/senior-master/ACP 34-3.pdf";
import ACP344 from "../assets/documents/senior-master/ACP 34-4.pdf";
import ACP353 from "../assets/documents/senior-master/ACP 35-3.pdf";
import ACP354 from "../assets/documents/senior-master/ACP 35-4.pdf";


const forms = [
    { name: "TG 21 - Consent Form", link: TG21 },
    { name: "TG 23 - Medical Form", link: TG23 },
    { name: "Aviation Medical Form", link: AvMed }
  ];
  
const publications = [
    { name: "ACP 1 - Ethos and Core Values", link: ACP001 },
    { name: "ACP 1358 - Uniform and Dress", link: ACP1358 },
    { name: "ACP 18 - Shooting", link: ACP018 },
    { name: "ACP 2 - Cultural and Religious Diversity", link: ACP002 },
    { name: "ACP 3 - Honours and Awards", link: ACP003 },
    { name: "ACP 4 - Child Protection", link: ACP004 },
    { name: "ACP 48 - Junior NCO", link: ACP048 },
    { name: "ACP 49 - Senior NCO", link: ACP049 },
    { name: "AP 818 - RAF Drill and Ceremonial", link: AP818 }
];

const examResources = {
    firstClass: [
        { name: "ACP 31-2 - The RAF", link: ACP312 },
        { name: "ACP 31-4 - Initial Expedition Training (IET)", link: ACP314 },
        { name: "ACP 32-1 - Map Reading", link: ACP321 },
        { name: "ACP 33-1 - History of Flight", link: ACP331 },
        { name: "ACP 34-1 - Airmanship 1", link: ACP341 },
        { name: "The History of the ATC", link: History },
    ],
    leading: [
        { name: "ACP 32-2 - Basic Navigation", link: ACP322 },
        { name: "ACP 33-2 - Principles of Flight (POF)", link: ACP332 },
        { name: "ACP 34-2 - Airmanship 2", link: ACP342 },
    ],
    seniorMaster: [
        { name: "ACP 32-3 - Air Navigation", link: ACP323 },
        { name: "ACP 32-4 - Pilot Navigation", link: ACP324 },
        { name: "ACP 33-3 - Propulsion", link: ACP333 },
        { name: "ACP 33-4 - Airframes", link: ACP334 },
        { name: "ACP 34-3 - Aircraft Handling", link: ACP343 },
        { name: "ACP 34-4 - Operation Flying", link: ACP344 },
        { name: "ACP 35-3 - Advanced Radio and Radar", link: ACP353 },
        { name: "ACP 35-4 - Satellite Communication", link: ACP354 },
    ],
};
  
const TableSection = ({ title, collumnName, items}) => (
    <>
      <h2 className="font-bold" id={title.toLowerCase()}>{title}</h2>
      <table className="docs-table m-auto w-11/12 md:w-9/12 xl:w-6/12 mb-3">
        <thead>
          <tr>
            <th scope="col" className="w-8/12 text-base md:text-xl">{collumnName}</th>
            <th scope="col" className="text-base md:text-xl">Download</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-10 m-auto download-svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
);

function Documents() {
  return (
    <>
        <div className="bg-dark-blue-main title-hover text-center pb-3 lg:pt-14">
            <Title title="Documents"></Title>

            <div className="docs-nav px-5 text-white">
                <h2 className="pb-2 font-bold underline">Quick Links</h2>
                <div className="docs-nav-links grid grid-cols-3 m-auto xl:w-1/2 py-2.5 rounded-l-3xl rounded-r-3xl items-center">
                    <ScrollIntoView selector="#forms" className="">
                        <span className="text-center text-base md:text-xl font-semibold leading-none">Forms</span>
                    </ScrollIntoView>                
                    <ScrollIntoView selector="#publications" className="">
                        <span className="text-center text-base md:text-xl font-semibold leading-none">Publications</span>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#exam-resources" className="">
                        <span className="text-center text-base md:text-xl font-semibold leading-none">Exam Resources</span>
                    </ScrollIntoView>
   
                </div>
            </div>
        </div>
        <div className="documents-container text-center pt-3">

            <TableSection title="Forms" collumnName="Form Name" items={forms} />
            <TableSection title="Publications" collumnName="Publication Name" items={publications} />
            <h1 className="text-center pt-4 font-extrabold " id="exam-resources">Exam Resources</h1>
            <TableSection title="First Class" collumnName="File Name" items={examResources.firstClass} />
            <TableSection title="Leading" collumnName="File Name" items={examResources.leading} />
            <TableSection title="Senior/Master" collumnName="File Name" items={examResources.seniorMaster} />

        </div>
    </>
    );
}

export default Documents;