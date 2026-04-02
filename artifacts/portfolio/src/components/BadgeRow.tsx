import { useState, useRef, useEffect } from "react";
import type { Badge } from "@/hooks/useData";
import { BadgeIcon } from "./BadgeIcons";

function Popup({ badge, onClose, anchor }: {
  badge: Badge;
  onClose: () => void;
  anchor: React.RefObject<HTMLButtonElement | null>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current?.contains(e.target as Node)) return;
      if (anchor.current?.contains(e.target as Node)) return;
      onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose, anchor]);

  return (
    <div
      ref={ref}
      className="glass-popup animate-pop-in absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 w-56 rounded-2xl p-4 shadow-2xl"
      style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.08)" }}
    >
      <div className="flex items-center gap-3 mb-2.5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${badge.color}18`, border: `1px solid ${badge.color}30` }}
        >
          <BadgeIcon id={badge.id} size={26} />
        </div>
        <div>
          <div className="font-semibold text-sm text-white leading-tight">{badge.name}</div>
          <div className="text-xs mt-0.5 font-medium" style={{ color: badge.color }}>Discord Badge</div>
        </div>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "#9ea8b3" }}>{badge.description}</p>
      <div className="mt-3 h-px" style={{ background: `${badge.color}30` }} />
    </div>
  );
}

function BadgeBtn({ badge }: { badge: Badge }) {
  const [open, setOpen] = useState(false);
  const [shaking, setShaking] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  function click() {
    setShaking(true);
    setTimeout(() => setShaking(false), 600);
    setOpen(v => !v);
  }

  return (
    <div className="relative inline-flex items-center justify-center">
      <button
        ref={btn}
        onClick={click}
        className={`badge-btn w-9 h-9 flex items-center justify-center rounded-xl focus:outline-none cursor-pointer transition-all duration-150 ${shaking ? "animate-badge-shake" : ""}`}
        style={{
          background: open ? `${badge.color}20` : "rgba(255,255,255,0.05)",
          border: `1px solid ${open ? badge.color + "40" : "rgba(255,255,255,0.07)"}`,
          boxShadow: open ? `0 0 14px ${badge.color}30` : "none",
        }}
        aria-label={badge.name}
      >
        <BadgeIcon id={badge.id} size={21} />
      </button>
      {open && <Popup badge={badge} onClose={() => setOpen(false)} anchor={btn} />}
    </div>
  );
}

export default function BadgeRow({ badges }: { badges: Badge[] }) {
  if (!badges.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-1">
      {badges.map(b => <BadgeBtn key={b.id} badge={b} />)}
    </div>
  );
}
