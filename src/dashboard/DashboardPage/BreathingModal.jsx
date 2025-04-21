"use client";
import React, { useEffect, useState, useRef } from "react";

export default function BreathingModal({ open, onClose }) {
  const [phase, setPhase] = useState("Inhale");
  const [cycleCount, setCycleCount] = useState(0);
  const inhaleSound = useRef(null);
  const exhaleSound = useRef(null);

  const phases = [
    { name: "Inhale", duration: 4000 },
    { name: "Hold", duration: 3000 },
    { name: "Exhale", duration: 4000 },
  ];

  useEffect(() => {
    if (!open) return;

    let phaseIndex = 0;

    const nextPhase = () => {
      const current = phases[phaseIndex];
      setPhase(current.name);

      if (current.name === "Inhale" && inhaleSound.current) inhaleSound.current.play();
      if (current.name === "Exhale" && exhaleSound.current) exhaleSound.current.play();

      setTimeout(() => {
        phaseIndex = (phaseIndex + 1) % phases.length;
        if (phaseIndex === 0) {
          setCycleCount((prev) => prev + 1);
        }
        nextPhase();
      }, current.duration);
    };

    nextPhase();

    return () => {
      setCycleCount(0);
    };
  }, [open]);

  useEffect(() => {
    if (cycleCount >= 3) {
      onClose();
    }
  }, [cycleCount]);

  if (!open) return null;

  const phaseColor = {
    Inhale: "bg-teal-300",
    Hold: "bg-yellow-200",
    Exhale: "bg-indigo-300",
  }[phase];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[300px] flex flex-col items-center">
        <audio ref={inhaleSound} src="/sounds/inhale.mp3" />
        <audio ref={exhaleSound} src="/sounds/exhale.mp3" />
        <div
          className={`transition-all duration-[3000ms] ease-in-out w-24 h-24 rounded-full ${phaseColor}`}
          style={{
            transform:
              phase === "Inhale"
                ? "scale(1.2)"
                : phase === "Exhale"
                ? "scale(0.9)"
                : "scale(1)",
          }}
        />
        <h3 className="text-xl font-semibold mt-6 text-gray-800">{phase}...</h3>
        <p className="text-sm text-gray-500 mt-2">Focus on your breath</p>
        <button
          onClick={onClose}
          className="mt-5 text-sm text-teal-600 underline cursor-pointer"
        >
          End Session
        </button>
      </div>
    </div>
  );
}
