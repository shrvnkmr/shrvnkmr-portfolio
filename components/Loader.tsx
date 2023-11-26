import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex gap-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-600"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-600 [animation-delay:-.3s]"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-600 [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Loader;
