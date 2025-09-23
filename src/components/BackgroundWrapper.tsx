const BackgroundWrapper = () => {
  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 max-w-7xl h-svh w-full">
        <div className="relative h-full">
          <div className="absolute inset-y-0 left-0 w-0 border-l-[0.5px] border-zinc-700 opacity-0 animate-[fadeInScale_1.1s_ease-out_0.1s_forwards]" />
          <div className="absolute inset-y-0 left-10 w-0 border-l-[0.5px] border-zinc-700 opacity-0 animate-[fadeInScale_1.1s_ease-out_0.3s_forwards]" />
          <div className="absolute inset-y-0 left-36 w-0 border-l-[0.5px] border-zinc-700 opacity-0 animate-[fadeInScale_1.1s_ease-out_0.6s_forwards]" />
          <div className="absolute inset-y-0 right-[35%] w-0 border-l-[0.5px] border-zinc-700 opacity-0 animate-[slideInFromTop_1.1s_ease-out_0.7s_forwards,livingBreathe5s_20s_ease-in-out_6s_infinite]" />
          <div className="absolute inset-y-0 right-10 w-0 border-l-[0.5px] border-zinc-700 opacity-0 animate-[livingBreathe4s_20s_ease-in-out_6s_infinite]" />
        </div>
      </div>
    </>
  );
};

export default BackgroundWrapper;
