import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  variant?: "default" | "footer";
};

export default function Logo({
  width = 180,
  height = 70,
  variant = "default",
}: LogoProps) {
  const logoSrc =
    variant === "footer"
      ? "/images/logo/footer-logo.png"
      : "/images/logo/primary-logo.png";

  return (
    <Link
      href="/"
      className="flex items-center transition-transform duration-300 hover:scale-105"
    >
      <Image
        src={logoSrc}
        alt="Inzane's Food"
        width={width}
        height={height}
        priority
        className="h-auto w-auto object-contain"
      />
    </Link>
  );
}