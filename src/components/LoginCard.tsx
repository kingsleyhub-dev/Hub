import { useState } from "react";
import AnimatedLogoRing from "./AnimatedLogoRing";
import AccessCodeInput from "./AccessCodeInput";

const LoginCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeComplete = (code: string) => {
    console.log("Access code entered:", code);
  };

  const handleVerify = () => {
    setIsLoading(true);
    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="glass-card glow-gold rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md mx-4">
      {/* Logo Section */}
      <AnimatedLogoRing />

      {/* Brand Name */}
      <h1 className="font-brand text-gold text-2xl sm:text-3xl md:text-4xl font-semibold tracking-widest text-center mt-6">
        KINGSLEY HUB
      </h1>

      {/* Tagline */}
      <p className="text-gold-light text-base sm:text-lg italic text-center mt-2 opacity-90">
        Get connected...
      </p>

      {/* Divider */}
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6 opacity-50" />

      {/* Instructions */}
      <h2 className="text-gold text-lg sm:text-xl font-medium text-center mb-2">
        Enter your 6-digit access code
      </h2>
      <p className="text-muted-foreground text-sm text-center mb-6 px-4">
        Sent To Your Whatsapp Number.
      </p>

      {/* Code Input */}
      <div className="mb-6">
        <AccessCodeInput onComplete={handleCodeComplete} />
      </div>

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        disabled={isLoading}
        className="btn-gold w-full py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Verifying...
          </span>
        ) : (
          <>
            <span className="font-bold">Verify</span>
            <span className="font-normal"> & Continue</span>
          </>
        )}
      </button>

      {/* Tip */}
      <p className="text-muted-foreground text-xs sm:text-sm text-center mt-4">
        Tip: Dont Copy Paste The Code, Just Type The 6-Digit Code Manually.{" "}
        <span className="text-gold-light">6-digit code</span>.
      </p>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gold-muted/20">
        <p className="text-muted-foreground text-xs sm:text-sm text-center">
          © 2026 Kingsley Hub.{" "}
          <a
            href="#"
            className="text-gold-light hover:text-gold transition-colors underline-offset-2 hover:underline"
          >
            Need help?
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
