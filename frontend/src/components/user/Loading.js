import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <span className="material-symbols-outlined animate-spin text-myrose">
        progress_activity
      </span>
    </div>
  );
}
