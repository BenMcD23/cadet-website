import PageHeader from "../components/pageHeader/pageHeader";
import ScrollIntoView from 'react-scroll-into-view';

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
import FirstClassBadge from "../assets/documents/first_class/first_class_badge.png";

import ACP322 from "../assets/documents/leading/ACP 32-2.pdf";
import ACP332 from "../assets/documents/leading/ACP 33-2.pdf";
import ACP342 from "../assets/documents/leading/ACP 34-2.pdf";
import LeadingBadge from "../assets/documents/leading/leading_badge.png";

import ACP323 from "../assets/documents/senior-master/ACP 32-3.pdf";
import ACP324 from "../assets/documents/senior-master/ACP 32-4.pdf";
import ACP333 from "../assets/documents/senior-master/ACP 33-3.pdf";
import ACP334 from "../assets/documents/senior-master/ACP 33-4.pdf";
import ACP343 from "../assets/documents/senior-master/ACP 34-3.pdf";
import ACP344 from "../assets/documents/senior-master/ACP 34-4.pdf";
import ACP353 from "../assets/documents/senior-master/ACP 35-3.pdf";
import ACP354 from "../assets/documents/senior-master/ACP 35-4.pdf";
import SeniorMasterBadge from "../assets/documents/senior-master/senior_master_badge.png";


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

const fileType = (link) => {
    const ext = link.split(".").pop().toLowerCase();
    return ["pdf", "docx", "xlsx", "pptx"].includes(ext) ? ext.toUpperCase() : "FILE";
};

const DocSection = ({ title, items, badge, id }) => (
    <section id={id} className="mx-auto mb-10 max-w-3xl scroll-mt-24">
        <h2 className="mb-4 text-center text-2xl font-bold text-navy">{title}</h2>

        {badge && (
            <div className="mb-4 flex justify-center">
                <img src={badge} alt={`${title} badge`} loading="lazy" className="h-24 w-auto md:h-32" />
            </div>
        )}

        <ul className="card divide-y divide-gray-100">
            {items.map((item) => (
                <li key={item.name}>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-surface"
                    >
                        <span className="w-14 shrink-0 rounded bg-navy px-2 py-1 text-center text-xs font-bold text-white">
                            {fileType(item.link)}
                        </span>
                        <span className="grow text-left font-semibold text-ink/90">{item.name}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-accent-dark transition-colors group-hover:text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>
                </li>
            ))}
        </ul>
    </section>
);

function Documents() {
  return (
    <>
        <PageHeader
            title="Documents"
            intro="Forms, publications and exam resources for cadets and parents."
        />

        {/* quick links */}
        <div className="sticky top-16 z-40 border-b border-gray-200 bg-white/95 py-3 shadow-sm backdrop-blur">
            <div className="section-container flex flex-wrap justify-center gap-2">
                {[
                    { selector: "#forms", label: "Forms" },
                    { selector: "#publications", label: "Publications" },
                    { selector: "#exam-resources", label: "Exam Resources" },
                ].map((l) => (
                    <ScrollIntoView key={l.selector} selector={l.selector}>
                        <span className="cursor-pointer rounded-full bg-surface px-4 py-1.5 text-sm font-semibold text-navy transition-colors hover:bg-accent/30">
                            {l.label}
                        </span>
                    </ScrollIntoView>
                ))}
            </div>
        </div>

        <div className="section bg-surface">
            <div className="section-container">
                <DocSection id="forms" title="Forms" items={forms} />
                <DocSection id="publications" title="Publications" items={publications} />

                <h1 id="exam-resources" className="mb-8 scroll-mt-24 text-center text-3xl font-extrabold text-navy">Exam Resources</h1>
                <DocSection id="first-class" title="First Class" items={examResources.firstClass} badge={FirstClassBadge} />
                <DocSection id="leading" title="Leading" items={examResources.leading} badge={LeadingBadge} />
                <DocSection id="senior-master" title="Senior/Master" items={examResources.seniorMaster} badge={SeniorMasterBadge} />
            </div>
        </div>
    </>
    );
}

export default Documents;
