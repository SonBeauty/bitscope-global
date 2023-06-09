import { useEffect, useState } from "react";
interface OdometerNumberProps {
  num: number;
  run: boolean;
  className?: string;
}

const OdometerNumber = ({ num, run, className }: OdometerNumberProps) => {
  const [number0, setNumber0] = useState(0);
  const [number1, setNumber1] = useState(3);
  const [number2, setNumber2] = useState(5);
  const [number3, setNumber3] = useState(7);
  useEffect(() => {
    if (run) {
      const handle = setInterval(() => {
        setNumber0(number0 + 1);
        setNumber1(number1 + 1);
        setNumber2(number2 + 1);
        setNumber3(number3 + 1);
      }, 50);
      return () => {
        clearInterval(handle);
      };
    }
  }, [number0, number1, number2, number3, run]);
  const numbers = [
    number0.toString().slice(-1),
    number1.toString().slice(-1),
    number2.toString().slice(-1),
    number3.toString().slice(-1),
  ];
  return (
    <div className={`animate-pulse ${className}`}>
      {Array(num)
        .fill("")
        .map((item, index) => {
          return numbers[index];
        })}
    </div>
  );
};
export default OdometerNumber;
