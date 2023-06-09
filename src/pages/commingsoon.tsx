import styles from "@/styles/Commingsoon.module.scss";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import PageContainer from "@/container/PageContainer";
import WaveSVG from "@/components/svg/WaveSVG";
export default function Commingsoon() {
  return (
    <PageContainer>
      <div className="!h-screen !w-screen flex flex-col">
        <div className="basis-11/12 !overflow-hidden">
          <div className={styles.ternary_system}>
            <div className={[styles.sun, styles.primary].join(" ")}> </div>
            <div className={[styles.sun, styles.secondary].join(" ")}> </div>
            <div className={[styles.sun, styles.ternary].join(" ")}> </div>
          </div>
          <div className={clsx(styles.sand)}>
            <div className={styles.pendulums}>
              <div className={styles.pendulum}>
                <div className={styles.bar}> </div>
                <div className={styles.motion}>
                  <div className={styles.string}> </div>
                  <div className={styles.weight}> </div>
                </div>
              </div>
              <div className={[styles.pendulum, styles.shadow].join(" ")}>
                <div className={styles.bar}> </div>
                <div className={styles.motion}>
                  <div className={styles.string}> </div>
                  <div className={styles.weight}> </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pyramid}> </div>
          <div className={styles.text}>
            <h1 className={`${styles.title} !text-black md:!text-white`}>
              Sorry{" "}
              <strong className="text-black md:text-white">THIS PAGE IS</strong>
              <em className="text-black md:text-white">COMING SOON</em>
            </h1>
            <Link
              href="/"
              className="p hover:text-white cursor-pointer text-black-500 md:text-white flex gap-3 px-4 items-center justify-center "
            >
              <ArrowLeftIcon className="h-6 w-6 text-black md:text-white" />
              Comeback Home
            </Link>
          </div>
        </div>
        <div className="home-wave-bottom basis-1/12 w-screen">
          <WaveSVG />
        </div>
      </div>
    </PageContainer>
  );
}
