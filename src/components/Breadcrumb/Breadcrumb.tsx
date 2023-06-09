import React from "react";
import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
export default function Breadcrumb({ pageName }: BreadcrumbProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-semibold text-black">{pageName}</h2>
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/dashboard">Dashboard /</Link>
          </li>
          <li className="text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
}
