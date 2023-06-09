import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="/dashboard">
        <Image
          width={100}
          height={80}
          alt="logo"
          src="/image/1200X628-SVG-NONBACKGROUND.png"
          className="max-h-[80px]"
        />
      </Link>
    </div>
  );
};
export default Logo;
