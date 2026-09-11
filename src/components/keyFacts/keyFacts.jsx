import { Icon } from "../icons/Icon";
import { squadron } from "../../data/squadron";

// The four things almost every visitor is looking for, shown right under the hero.
function KeyFacts() {
    const nights = squadron.paradeNights.map((n) => n.day).join(" & ");
    const time = squadron.paradeNights[0].time;

    const facts = [
        { icon: "users", label: "Ages", value: `${squadron.ages} years old` },
        { icon: "calendar", label: "Parade nights", value: `${nights}, ${time}` },
        { icon: "mapPin", label: "Where", value: `${squadron.address.venue}, ${squadron.address.postcode}` },
        { icon: "banknotes", label: "Subs", value: squadron.subs },
    ];

    return (
        <div className="border-b border-gray-200 bg-white">
            <dl className="section-container grid grid-cols-1 gap-x-8 gap-y-4 py-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
                {facts.map((f) => (
                    <div key={f.label} className="grid grid-cols-[auto_1fr] gap-x-3">
                        <Icon name={f.icon} className="row-span-2 mt-0.5 size-6 text-accent-dark" />
                        <dt className="text-xs font-bold uppercase tracking-wide text-ink/70">{f.label}</dt>
                        <dd className="font-semibold text-navy">{f.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default KeyFacts;
