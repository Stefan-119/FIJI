"use client";

import { ReactNode } from "react";

interface MediaGridProps {
  children: ReactNode;
  columns?: "1" | "2" | "3";
}

export default function MediaGrid({ children, columns = "3" }: MediaGridProps) {
  const gridClass = {
    "1": "grid-cols-1",
    "2": "sm:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return <div className={`grid gap-4 ${gridClass}`}>{children}</div>;
}
