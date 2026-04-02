type P = { size?: number }

export function MeadowBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="13" r="3.5" fill="#57f287" />
      <ellipse cx="12" cy="7" rx="2.8" ry="3.5" fill="#3fc872" />
      <ellipse cx="7" cy="13" rx="3.5" ry="2.8" fill="#3fc872" />
      <ellipse cx="17" cy="13" rx="3.5" ry="2.8" fill="#3fc872" />
      <ellipse cx="8.5" cy="8.5" rx="2.2" ry="3" fill="#57f287" transform="rotate(-45 8.5 8.5)" />
      <ellipse cx="15.5" cy="8.5" rx="2.2" ry="3" fill="#57f287" transform="rotate(45 15.5 8.5)" />
      <circle cx="12" cy="13" r="2" fill="#fff" opacity="0.25" />
    </svg>
  )
}

export function NitroBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="n_g" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#f47fff" />
          <stop offset="1" stopColor="#7289da" />
        </linearGradient>
      </defs>
      <polygon points="12,2 20,8 17,21 7,21 4,8" fill="url(#n_g)" />
      <polygon points="12,2 20,8 12,11 4,8" fill="rgba(255,255,255,0.22)" />
      <polygon points="12,11 17,21 7,21" fill="rgba(0,0,0,0.15)" />
    </svg>
  )
}

export function BoosterBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="b_g" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ff73fa" />
          <stop offset="1" stopColor="#9b59b6" />
        </linearGradient>
      </defs>
      <path d="M12 2L4 7v5c0 5 4 8.5 8 10 4-1.5 8-5 8-10V7L12 2z" fill="url(#b_g)" />
      <path d="M12 2L4 7l8 4 8-4L12 2z" fill="rgba(255,255,255,0.2)" />
      <path d="M10.5 10l-1.5 4h2.5l-1 4.5 5-6.5h-3l1.5-2H10.5z" fill="white" opacity="0.9" />
    </svg>
  )
}

export function ActiveDevBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="18" rx="3" fill="#1a9c3e" />
      <rect x="2" y="3" width="20" height="5" rx="3" fill="#23a55a" />
      <rect x="2" y="6" width="20" height="2" fill="#23a55a" />
      <circle cx="5.5" cy="5.5" r="1" fill="rgba(255,255,255,0.5)" />
      <circle cx="9" cy="5.5" r="1" fill="rgba(255,255,255,0.5)" />
      <circle cx="12.5" cy="5.5" r="1" fill="rgba(255,255,255,0.5)" />
      <path d="M7 13l-2.5 2 2.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 13l2.5 2-2.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5 11.5l-3 7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function BrillianceBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="br_g" x1="0" y1="1" x2="0" y2="0">
          <stop stopColor="#e91e8c" />
          <stop offset="1" stopColor="#ff6ec7" />
        </linearGradient>
      </defs>
      <path d="M12 21c0 0-8-5.5-8-11a8 8 0 0 1 16 0c0 5.5-8 11-8 11z" fill="url(#br_g)" />
      <path d="M12 3a7 7 0 0 1 7 7c0 4-5 8.5-7 10-2-1.5-7-6-7-10a7 7 0 0 1 7-7z" fill="url(#br_g)" />
      <ellipse cx="12" cy="10" rx="3.5" ry="4.5" fill="rgba(255,255,255,0.2)" />
      <path d="M12 6c0 0 3.5 3 3.5 5s-3.5 4-3.5 4" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    </svg>
  )
}

export function QuestBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="q_g" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#fdd835" />
          <stop offset="1" stopColor="#f57f17" />
        </linearGradient>
      </defs>
      <path d="M7 3h10v2c0 3-2 5-5 5s-5-2-5-5V3z" fill="url(#q_g)" />
      <rect x="11" y="10" width="2" height="3" fill="#f9a825" />
      <path d="M8 13h8c0 0 1 6-4 7-5-1-4-7-4-7z" fill="url(#q_g)" />
      <path d="M9 13h6l-.5 4c-.8 1.5-4.2 1.5-5 0L9 13z" fill="#fdd835" opacity="0.4" />
      <rect x="6" y="3" width="3" height="5" rx="1.5" fill="#f9a825" transform="rotate(15 6 3)" />
      <rect x="15" y="3" width="3" height="5" rx="1.5" fill="#f9a825" transform="rotate(-15 18 3)" />
      <path d="M9 17h6" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

const icons: Record<string, (p: P) => JSX.Element> = {
  meadow: MeadowBadge,
  nitro: NitroBadge,
  booster: BoosterBadge,
  "active-dev": ActiveDevBadge,
  brilliance: BrillianceBadge,
  quest: QuestBadge,
}

export function BadgeIcon({ id, size = 22 }: { id: string; size?: number }) {
  const Icon = icons[id]
  if (!Icon) return <span style={{ fontSize: size * 0.75 }}>⭐</span>
  return <Icon size={size} />
}
