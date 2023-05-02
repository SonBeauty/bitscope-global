import Image from "next/image";
interface AnimLineProps {
  number: number;
}
export default function AnimLine({ number }: AnimLineProps) {
  const resultArr = Array(number)
    .fill("")
    .map((_, index) => {
      return (
        <span key={index}>
          <Image
            width={1}
            height={100}
            alt="anim_line"
            src="/image/anim_line.png"
          />
        </span>
      );
    });
  return <>{resultArr}</>;
}
