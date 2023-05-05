import React from "react";
import styles from "@/styles/Commingsoon.module.scss";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
export default function Commingsoon() {
  return (
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
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 180 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f6f4fe" />
          </g>
        </svg>
        
      </div>
    </div>
  );
}
