import Programme_webp from "../assets/programme/programme.webp";
import Rooms_webp from "../assets/programme/rooms.webp";

import PageHeader from "../components/pageHeader/pageHeader";

function Programme() {
    return (
        <>
            <PageHeader
                title="Programme"
                intro="See what we're up to this month on the squadron."
            />

            <div className="section bg-surface">
                <div className="section-container text-center">
                    <a href="/programme/03_26_programme.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Download This Month&apos;s Programme
                    </a>

                    <div className="mt-10 space-y-8">
                        <div className="card mx-auto max-w-4xl p-2 md:p-4">
                            <img src={Programme_webp} className="mx-auto w-full rounded-lg object-contain" alt="This month's programme" />
                        </div>
                        <div className="card mx-auto max-w-4xl p-2 md:p-4">
                            <img src={Rooms_webp} className="mx-auto w-full rounded-lg object-contain" alt="Room allocations" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Programme;
