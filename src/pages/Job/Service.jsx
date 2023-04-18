import React from "react";

const ServicesOffered = ({ title }) => {
  return (
    <div className="flex h-24 items-center font-bold text-black">
      <div className="text-center">
        <div className="text-center text-5xl font-bold">
          <span className="pr-6 relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            with CareerNet Africa
          </span>
          <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
            <span className="animate-word col-span-full row-span-full">
              Networking
            </span>
            <span className="animate-word-delay-1 col-span-full row-span-full">
              Job Search
            </span>
            <span className="animate-word-delay-2 col-span-full row-span-full">
              Advice
            </span>
            <span className="animate-word-delay-3 col-span-full row-span-full">
              Collaboration
            </span>
            <span className="animate-word-delay-4 col-span-full row-span-full">
              Guidance
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const keyframes = `
  @keyframes word {
    0% {
      transform: translateY(100%);
    }
    15% {
      transform: translateY(-10%);
      animation-timing-function: ease-out;
    }
  
    20% {
      transform: translateY(0);
    }
  
    40%,
    100% {
      transform: translateY(-110%);
    }
  }
  
  .animate-word {
    animation: word 7s infinite;
  }
  .animate-word-delay-1 {
    animation: word 7s infinite;
    animation-delay: -1.4s;
  }
  .animate-word-delay-2 {
    animation: word 7s infinite;
    animation-delay: -2.8s;
  }
  .animate-word-delay-3 {
    animation: word 7s infinite;
    animation-delay: -4.2s;
  }
  .animate-word-delay-4 {
    animation: word 7s infinite;
    animation-delay: -5.6s;
  }
  
`;

const Service = () => {
  return (
    <React.Fragment>
      <style>{keyframes}</style>
      <ServicesOffered />
    </React.Fragment>
  );
};

export default Service;
