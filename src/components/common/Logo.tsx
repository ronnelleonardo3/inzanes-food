import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
};

export default function Logo({
  width = 180,
  height = 70,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center transition-transform duration-300 hover:scale-105"
    >
      <Image
        src="/images/logo/primary-logo.png"
        alt="Inzane's Food"
        width={width}
        height={height}
        priority
        className="h-auto w-auto object-contain"
      />
    </Link>
  );
}