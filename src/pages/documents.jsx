import SideMenu from "../components/sideMenu/sideMenu";
import Title from "../components/mainTitle/title";
import ScrollIntoView from 'react-scroll-into-view';

import "./documentsStyles.css"

const forms = [
    { name: "Aviation Medical Form", url: "/downloads/aviation-medical-form.pdf" },
    { name: "TG 21 - Consent Form", url: "/downloads/tg21-consent-form.pdf" },
    { name: "TG 23 - Medical Form", url: "/downloads/tg23-medical-form.pdf" }
  ];
  
const publications = [
    { name: "ACP 1 - Ethos and Core Values", url: "/downloads/acp1-ethos-core-values.pdf" },
    { name: "ACP 1358 - Uniform and Dress", url: "/downloads/acp1358-uniform-dress.pdf" },
    { name: "ACP 18 - Shooting", url: "/downloads/acp18-shooting.pdf" },
    { name: "ACP 2 - Cultural and Religious Diversity", url: "/downloads/acp2-cultural-religious-diversity.pdf" },
    { name: "ACP 3 - Honours and Awards", url: "/downloads/acp3-honours-awards.pdf" },
    { name: "ACP 4 - Child Protection", url: "/downloads/acp4-child-protection.pdf" },
    { name: "ACP 48 - Junior NCO", url: "/downloads/acp48-junior-nco.pdf" },
    { name: "ACP 49 - Senior NCO", url: "/downloads/acp49-senior-nco.pdf" },
    { name: "AP 818 - RAF Drill and Ceremonial", url: "/downloads/ap818-raf-drill-ceremonial.pdf" }
];

const examResources = {
    firstClass: [
        { name: "ACP 31-2 - The RAF", url: "/downloads/acp31-2-the-raf.pdf" },
        { name: "ACP 31-4 - Initial Expedition Training (IET)", url: "/downloads/acp31-4-iet.pdf" },
        { name: "ACP 32-1 - Map Reading", url: "/downloads/acp32-1-map-reading.pdf" },
        { name: "ACP 33-1 - History of Flight", url: "/downloads/acp33-1-history-of-flight.pdf" },
        { name: "ACP 34-4 - Airmanship 1", url: "/downloads/acp34-4-airmanship-1.pdf" },
        { name: "The History of the ATC", url: "/downloads/history-of-the-atc.pdf" },
    ],
    leading: [
        { name: "ACP 32-2 - Basic Navigation", url: "/downloads/acp32-2-basic-navigation.pdf" },
        { name: "ACP 33-2 - Principles of Flight (POF)", url: "/downloads/acp33-2-pof.pdf" },
        { name: "ACP 34-2 - Airmanship 2", url: "/downloads/acp34-2-airmanship-2.pdf" },
    ],
    seniorMaster: [
        { name: "ACP 32-3 - Air Navigation", url: "/downloads/acp32-3-air-navigation.pdf" },
        { name: "ACP 32-4 - Pilot Navigation", url: "/downloads/acp32-4-pilot-navigation.pdf" },
        { name: "ACP 33-3 - Propulsion", url: "/downloads/acp33-3-propulsion.pdf" },
        { name: "ACP 33-4 - Airframes", url: "/downloads/acp33-4-airframes.pdf" },
        { name: "ACP 34-3 - Aircraft Handling", url: "/downloads/acp34-3-aircraft-handling.pdf" },
        { name: "ACP 34-4 - Operation Flying", url: "/downloads/acp34-4-operation-flying.pdf" },
        { name: "ACP 35-3 - Advanced Radio and Radar", url: "/downloads/acp35-3-advanced-radio-radar.pdf" },
        { name: "ACP 35-4 - Satellite Communication", url: "/downloads/acp35-4-satellite-communication.pdf" },
    ],
};
  
const TableSection = ({ title, collumnName, items}) => (
    <>
      <h2 className="font-bold" id={title.toLowerCase()}>{title}</h2>
      <table className="docs-table m-auto w-11/12 md:w-9/12 lg:w-6/12 mb-3">
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
                <a href={item.url} target="_blank" rel="noopener noreferrer">
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

            <div className="docs-nav  px-5 text-white">
                <h2 className="pb-2 font-bold">Quick Links</h2>
                <div className="docs-nav-links grid grid-cols-3 m-auto xl:w-1/2 py-2.5 rounded-l-3xl rounded-r-3xl items-center">
                    <ScrollIntoView selector="#forms" className="">
                        <span className="text-center text-base md:text-xl font-semibold leading-none tracking-tight">Forms</span>
                    </ScrollIntoView>                
                    <ScrollIntoView selector="#publications" className="">
                        <span className="text-center text-base md:text-xl font-semibold leading-none tracking-tight">Publications</span>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#exam-resources" className="">
                        <span className="text-center text-base md:text-xl font-semibold leading-none tracking-tight">Exam Resources</span>
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