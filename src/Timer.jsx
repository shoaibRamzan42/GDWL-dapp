import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: minutes,
    seconds: seconds
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        // Timer has reached zero, do something here (e.g., display a message, trigger an action)
        clearTimeout(timer);
      } else if (timeLeft.seconds === 0 && timeLeft.minutes === 0) {
        setTimeLeft({
          hours: timeLeft.hours - 1,
          minutes: 59,
          seconds: 59
        });
      } else if (timeLeft.seconds === 0) {
        setTimeLeft({
          hours: timeLeft.hours,
          minutes: timeLeft.minutes - 1,
          seconds: 59
        });
      } else {
        setTimeLeft({
          hours: timeLeft.hours,
          minutes: timeLeft.minutes,
          seconds: timeLeft.seconds - 1
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className='text-[16px]  border-2 p-2 rounded-full border-[#CBD5E1] flex justify-center gap-2 items-center font-Manrope font-semibold'>
      <h1 className='text-[#020617]'>Pre sale Countdown </h1>
      |
      <p className='text-[#3340FA]'>{`${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`}</p>
    </div>
  );
};

export default CountdownTimer;
