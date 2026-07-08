const steps = [
    {
        title: "Get in touch",
        text: "Fill out the contact form below and tell us a bit about yourself. We'll get back to you with the next available intake.",
    },
    {
        title: "Come and visit",
        text: "We'll invite you and your parents down on a parade night to look around, meet the staff and cadets, and see what we get up to.",
    },
    {
        title: "Your first nights",
        text: "Wear something comfortable — no uniform needed yet. Within the first few weeks we'll get you a squadron logo embroidered polo. You'll join in with training and activities and learn how the squadron works.",
    },
    {
        title: "Enrolment",
        text: "After around 5 months, you'll pass out and become a full member of the squadron and the Air Cadets — the start of your Air Cadets journey.",
    },
];

function JoinJourney() {
    return (
        <ol className="mx-auto grid max-w-5xl gap-8 md:grid-cols-4 md:gap-4">
            {steps.map((step, i) => (
                <li key={step.title} className="relative flex gap-4 md:flex-col md:text-center">
                    {/* connector line */}
                    {i < steps.length - 1 && (
                        <span aria-hidden="true" className="absolute left-5 top-12 h-[calc(100%-1rem)] w-0.5 bg-accent/40 md:left-[calc(50%+1.75rem)] md:top-5 md:h-0.5 md:w-[calc(100%-3.5rem)]"></span>
                    )}
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy font-bold text-white md:mx-auto">
                        {i + 1}
                    </span>
                    <div>
                        <h3 className="mb-1 font-bold text-navy">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-ink/80">{step.text}</p>
                    </div>
                </li>
            ))}
        </ol>
    );
}

export default JoinJourney;
