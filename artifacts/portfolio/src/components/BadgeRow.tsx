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
      className="glass-popup animate-pop-in absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 w-56 rounded-2xl p-4 shadow-2xl"
      style={{ boxShadow: `0 12px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)` }}
    >
      {/* Badge icon large */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shrink-0"
          style={{ background: `${badge.color}18`, border: `1px solid ${badge.color}33` }}
        >
          <BadgeIcon badge={badge} size={28} />
        </div>
        <div>
          <div className="font-semibold text-sm text-white leading-tight">{badge.name}</div>
          <div className="text-xs mt-0.5" style={{ color: badge.color }}>Badge</div>
        </div>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "#b5bac1" }}>
        {badge.description}
      </p>
      <div
        className="mt-3 h-px rounded-full opacity-20"
        style={{ background: badge.color }}
      />
    </div>
  );
}

interface BadgeIconProps {
  badge: Badge;
  size?: number;
}

function BadgeIcon({ badge, size = 22 }: BadgeIconProps) {
  const [failed, setFailed] = useState(false);

  if (!badge.iconUrl || failed) {
    return (
      <span style={{ fontSize: size * 0.8, lineHeight: 1 }}>{badge.fallbackEmoji}</span>
    );
  }

  return (
    <img
      src={badge.iconUrl}
      alt={badge.name}
      width={size}
      height={size}
      style={{ objectFit: "contain", imageRendering: "auto" }}
      onError={() => setFailed(true)}
      draggable={false}
    />
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
        className={`badge-btn w-9 h-9 flex items-center justify-center rounded-xl focus:outline-none select-none cursor-pointer transition-all duration-150 ${
          shaking ? "animate-badge-shake" : ""
        }`}
        style={{
          background: open ? `${badge.color}22` : "rgba(255,255,255,0.05)",
          border: `1px solid ${open ? badge.color + "44" : "rgba(255,255,255,0.07)"}`,
          boxShadow: open ? `0 0 12px ${badge.color}33` : "none",
        }}
        title={badge.name}
        aria-label={badge.name}
      >
        <BadgeIcon badge={badge} size={22} />
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
    <div className="flex flex-wrap gap-1.5 mt-1">
      {badges.map((b) => (
        <BadgeItem key={b.id} badge={b} />
      ))}
    </div>
  );
}
