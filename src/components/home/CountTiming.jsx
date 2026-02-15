"use client"
import React, { useEffect, useState } from 'react'

export default function CountTiming() {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            // Countdown to midnight tomorrow
            const now = new Date()
            const endOfDay = new Date()
            endOfDay.setHours(24, 0, 0, 0)

            const difference = endOfDay - now

            if (difference > 0) {
                setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
                setHours(Math.floor((difference / (1000 * 60 * 60)) % 24))
                setMinutes(Math.floor((difference / 1000 / 60) % 60))
                setSeconds(Math.floor((difference / 1000) % 60))
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const TimeBox = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg px-3 py-2 shadow-lg min-w-16">
                <span className='text-2xl font-black'>{String(value).padStart(2, '0')}</span>
            </div>
            <span className='text-xs font-semibold text-gray-600 mt-2 uppercase'>{label}</span>
        </div>
    )

    return (
        <div className='flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md border-2 border-gray-100'>
            <TimeBox value={days} label="Days" />
            <span className='text-2xl font-black text-red-500'>:</span>
            <TimeBox value={hours} label="Hours" />
            <span className='text-2xl font-black text-red-500'>:</span>
            <TimeBox value={minutes} label="Minutes" />
            <span className='text-2xl font-black text-red-500'>:</span>
            <TimeBox value={seconds} label="Seconds" />
        </div>
    )
}
