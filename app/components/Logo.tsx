const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Letter D */}
      <path d="M10 10 H 35 C 55 10, 65 25, 65 40 C 65 55, 55 70, 35 70 H 10 V 10" stroke="currentColor" strokeWidth="8" className="text-diatome-blue" />
      
      {/* Letter A */}
      <path d="M50 70 L 70 20 L 90 70" stroke="currentColor" strokeWidth="8" className="text-diatome-blue" />
      
      {/* Red Triangle in A */}
      <path d="M63 60 L 70 45 L 77 60 H 63" fill="currentColor" className="text-diatome-red" />
    </svg>
  );
};

export default Logo;
