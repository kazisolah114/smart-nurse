"use client";
import React, { useState, useEffect } from 'react';
import BreathingModal from './BreathingModal';
import { Lightbulb, ScanHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WellnessAndTips = () => {
    const tips = [
        "Use two patient identifiers before giving any medication or treatment.",
        "Document vital signs immediately after assessment, not later.",
        "Use SBAR (Situation, Background, Assessment, Recommendation) to communicate with doctors.",
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [randomTip, setRandomTip] = useState('');

    useEffect(() => {
        const tip = tips[Math.floor(Math.random() * tips.length)];
        setRandomTip(tip);
    }, []);

    return (
        <div className='bg-white border p-4 col-span-12 md:col-span-4 rounded-md space-y-5 max-h-max'>
            <BreathingModal open={modalOpen} onClose={() => setModalOpen(false)} />

            {/* Wellness Timer */}
            <div>
                <div className='flex items-center justify-between'>
                    <h3 className='flex items-center gap-3 text-lg text-gray-900 font-semibold'>
                        <span className='bg-red-600/20 text-red-600 rounded-full w-8 h-8 flex items-center justify-center'>
                            <ScanHeart className='w-4 h-4' />
                        </span> 
                        Wellness Break
                    </h3>
                </div>
                <p className='text-sm text-gray-700 mb-3 mt-5'>
                    Take a guided breathing break to refresh your mind. You deserve it!
                </p>
                <Button
                    onClick={() => setModalOpen(true)}
                    className='w-full bg-teal-600 hover:bg-teal-700 text-white'
                >
                    Start Breathing Session
                </Button>
            </div>

            <hr className='border-gray-200' />

            {/* Nursing Tip */}
            <div>
                <div className='mb-2 flex items-center gap-2'>
                    <span className='flex items-center justify-center bg-yellow-400/20 p-1 rounded-full'>
                        <Lightbulb className='w-5 h-5 text-yellow-500' />
                    </span>
                    <p className='text-base font-semibold text-gray-900'>Tip of the Day</p>
                </div>
                <p className='text-base text-gray-700 leading-relaxed'>
                    {randomTip || "Loading tip..."}
                </p>
            </div>
        </div>
    );
};

export default WellnessAndTips;
