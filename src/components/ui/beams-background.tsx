// src/components/ui/beams-background.tsx
"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BeamsBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 20 + Math.random() * 40,
        length: height * 2.5,
        angle: angle,
        speed: 0.22 + Math.random() * 0.28,
        opacity: 0.06 + Math.random() * 0.08,
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.007 + Math.random() * 0.01,
    };
}

export function BeamsBackground({
    className,
    intensity = "subtle",
    children,
}: BeamsBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 10;

    const opacityMap = {
        subtle: 0.28,
        medium: 0.55,
        strong: 1,
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (!rect) return;
            
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.scale(dpr, dpr);

            beamsRef.current = Array.from({ length: MINIMUM_BEAMS * 1.5 }, () =>
                createBeam(rect.width, rect.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;
            const rect = canvas.parentElement?.getBoundingClientRect();
            if(!rect) return beam;
            
            const column = index % 3;
            const spacing = rect.width / 3;

            beam.y = rect.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 70 + Math.random() * 70;
            beam.speed = 0.22 + Math.random() * 0.22;
            beam.hue = 190 + (index * 70) / totalBeams;
            beam.opacity = 0.07 + Math.random() * 0.06;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            gradient.addColorStop(0, `hsla(${beam.hue}, 80%, 60%, 0)`);
            gradient.addColorStop(0.4, `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity})`);
            gradient.addColorStop(0.6, `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity})`);
            gradient.addColorStop(1, `hsla(${beam.hue}, 80%, 60%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            const rect = canvas.parentElement?.getBoundingClientRect();
            if(!rect) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(55px)";

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div className={cn("relative w-full overflow-hidden bg-[#f8fafc]", className)}>
            {/* Solid background — no gradients */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[#f8fafc]"
            />
            <canvas ref={canvasRef} className="absolute inset-0" />
            <div className="relative z-10 h-full w-full">{children}</div>
        </div>
    );
}
