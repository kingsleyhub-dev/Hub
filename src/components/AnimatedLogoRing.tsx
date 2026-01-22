import logo from "@/assets/logo.png";

const AnimatedLogoRing = () => {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
      {/* Rotating outer ring */}
      <svg
        className="absolute inset-0 w-full h-full animate-rotate-ring"
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43 74% 55%)" />
            <stop offset="50%" stopColor="hsl(43 74% 35%)" />
            <stop offset="100%" stopColor="hsl(43 74% 55%)" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="2"
          strokeDasharray="8 4"
        />
      </svg>
      
      {/* Static inner ring */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="hsl(43 74% 40%)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Logo container with clipping */}
      <div className="absolute inset-[8%] rounded-full overflow-hidden">
        <img
          src={logo}
          alt="Kingsley Hub Logo"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default AnimatedLogoRing;
