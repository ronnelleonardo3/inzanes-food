type ButtonProps = {
    children: React.ReactNode;
  };
  
  export default function Button({ children }: ButtonProps) {
    return (
      <button
        className="
        rounded-xl
        bg-[#1F3B2E]
        px-8
        py-4
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-300
        hover:bg-[#C68B2C]
        hover:scale-105
        "
      >
        {children}
      </button>
    );
  }