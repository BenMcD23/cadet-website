// A box to sign in with a finger, stylus or mouse. Hands back a PNG data URL
// (transparent background, so it sits cleanly on the form's signature line),
// or null when cleared. Pointer events cover touch and mouse alike.

import { useEffect, useRef, useState } from "react";

const INK = "#0A1446";

export default function SignaturePad({ label, onChange }) {
    const canvasRef = useRef(null);
    const drawing = useRef(false);
    const [signed, setSigned] = useState(false);

    // Size the drawing surface to the box as shown, at the screen's pixel
    // density, so lines aren't blurry on a phone. Resizing clears it, which is
    // why it only runs on mount: a rotation mid-signature would lose the ink.
    useEffect(() => {
        const canvas = canvasRef.current;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = Math.max(1, Math.round(width * ratio));
        canvas.height = Math.max(1, Math.round(height * ratio));
        const ctx = canvas.getContext("2d");
        ctx.scale(ratio, ratio);
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = INK;
    }, []);

    function point(e) {
        const r = canvasRef.current.getBoundingClientRect();
        return [e.clientX - r.left, e.clientY - r.top];
    }

    function start(e) {
        e.preventDefault();
        canvasRef.current.setPointerCapture?.(e.pointerId);
        drawing.current = true;
        const ctx = canvasRef.current.getContext("2d");
        const [x, y] = point(e);
        ctx.beginPath();
        ctx.moveTo(x, y);
        // A dot for a tap, so an initial or a full stop shows up.
        ctx.lineTo(x + 0.1, y + 0.1);
        ctx.stroke();
    }

    function move(e) {
        if (!drawing.current) return;
        e.preventDefault();
        const ctx = canvasRef.current.getContext("2d");
        const [x, y] = point(e);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    function end() {
        if (!drawing.current) return;
        drawing.current = false;
        setSigned(true);
        onChange(canvasRef.current.toDataURL("image/png"));
    }

    function clear() {
        const canvas = canvasRef.current;
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        setSigned(false);
        onChange(null);
    }

    return (
        <div>
            <p className="mb-1.5 text-sm font-semibold text-ink">{label}</p>
            <div className="relative">
                <canvas
                    ref={canvasRef}
                    role="img"
                    aria-label={`${label}: ${signed ? "signed" : "not signed yet"}. Draw your signature in this box.`}
                    className="block h-40 w-full touch-none rounded-md border-2 border-dashed border-gray-300 bg-white"
                    onPointerDown={start}
                    onPointerMove={move}
                    onPointerUp={end}
                    onPointerCancel={end}
                    onPointerLeave={end}
                />
                {!signed && (
                    <span className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-sm text-ink/50">
                        Sign here with your finger or mouse
                    </span>
                )}
            </div>
            <button type="button" onClick={clear} className="mt-2 text-sm font-semibold text-accent-dark underline underline-offset-2 hover:text-navy">
                Clear signature
            </button>
        </div>
    );
}
