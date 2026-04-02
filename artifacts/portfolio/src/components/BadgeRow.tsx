import { useState, useRef, useEffect } from "react";
import type { Badge } from "@/hooks/useData";

interface BadgePopupProps {
  badge: Badge;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement | null>;
}

function BadgePopup({ badge, onClose, anchorRef }: BadgePopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose, anchorRef]);

  return (
    <div
      ref={popupRef}
      className="glass-popup animate-pop-in absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 w-52 rounded-xl p-3 shadow-2xl"
      style={{ boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)` }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl leading-none">{badge.emoji}</span>
        <span className="font-semibold text-sm text-white">{badge.name}</span>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "#b5bac1" }}>
        {badge.description}
      </p>
      <div
        className="mt-2 h-0.5 rounded-full opacity-40"
        style={{ background: badge.color }}
      />
    </div>
  );
}

interface BadgeItemProps {
  badge: Badge;
}

function BadgeItem({ badge }: BadgeItemProps) {
  const [open, setOpen] = useState(false);
  const [shaking, setShaking] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  function handleClick() {
    setShaking(true);
    setTimeout(() => setShaking(false), 600);
    setOpen((v) => !v);
  }

  return (
    <div className="relative inline-flex flex-col items-center">
      <button
        ref={btnRef}
        onClick={handleClick}
        className={`badge-btn text-2xl w-10 h-10 flex items-center justify-center rounded-full focus:outline-none select-none cursor-pointer ${
          shaking ? "animate-badge-shake" : ""
        }`}
        style={{
          background: open
            ? `${badge.color}22`
            : "rgba(255,255,255,0.04)",
          border: `1px solid ${open ? badge.color + "55" : "rgba(255,255,255,0.06)"}`,
        }}
        title={badge.name}
        aria-label={badge.name}
      >
        {badge.emoji}
      </button>
      {open && (
        <BadgePopup badge={badge} onClose={() => setOpen(false)} anchorRef={btnRef} />
      )}
    </div>
  );
}

interface BadgeRowProps {
  badges: Badge[];
}

export default function BadgeRow({ badges }: BadgeRowProps) {
  if (!badges.length) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {badges.map((b) => (
        <BadgeItem key={b.id} badge={b} />
      ))}
    </div>
  );
}
