import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChatBubbleOvalLeftEllipsisIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function DropdownMessage() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <li className="relative" x-data="{ dropdownOpen: false, notifying: true }">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="relative flex h-8 w-8 items-center justify-center rounded-full border-1 border-slate-200 bg-white hover:text-base dark:border-slate-200 dark:bg-slate-200 dark:text-white"
        href="#"
      >
        <span className="absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1">
          <span className="absolute z-10 inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
        </span>

        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-black-500" />
      </Link>
      <div
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute z-[999]  mt-3 flex h-80 w-96 flex-col rounded-sm border border-stroke bg-white shadow-xl dark:border-slate-300 dark:bg-slate-200 sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-5 py-3">
          <h5 className="text-sm font-medium text-slate-400">Messages</h5>
        </div>
        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <Link
              className="flex gap-4 border-t border-zinc-300 items-center pl-4 py-3 hover:bg-slate-100"
              href="/messages"
            >
              <Image
                src="/image/400X400-SVG.png"
                alt="avatar"
                className="rounded-full"
                width={50}
                height={50}
              />

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4 border-t border-zinc-300 items-center pl-4 py-3 hover:bg-slate-100"
              href="/messages"
            >
              <Image
                src="/image/400X400-SVG.png"
                alt="avatar"
                className="rounded-full"
                width={50}
                height={50}
              />

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4 border-t border-zinc-300 items-center pl-4 py-3 hover:bg-slate-100"
              href="/messages"
            >
              <Image
                src="/image/400X400-SVG.png"
                alt="avatar"
                className="rounded-full"
                width={50}
                height={50}
              />

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4 border-t border-zinc-300 items-center pl-4 py-3 hover:bg-slate-100"
              href="/messages"
            >
              <Image
                src="/image/400X400-SVG.png"
                alt="avatar"
                className="rounded-full"
                width={50}
                height={50}
              />

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4 border-t border-zinc-300 items-center pl-4 py-3 hover:bg-slate-100"
              href="/messages"
            >
              <Image
                src="/image/400X400-SVG.png"
                alt="avatar"
                className="rounded-full"
                width={50}
                height={50}
              />

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4 border-t border-zinc-300 items-center pl-4 py-3 hover:bg-slate-100"
              href="/messages"
            >
              <Image
                src="/image/400X400-SVG.png"
                alt="avatar"
                className="rounded-full"
                width={50}
                height={50}
              />

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4 border-t border-zinc-300 items-center pl-4 py-3 hover:bg-slate-100"
              href="/messages"
            >
              <Image
                src="/image/400X400-SVG.png"
                alt="avatar"
                className="rounded-full"
                width={50}
                height={50}
              />

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
}
