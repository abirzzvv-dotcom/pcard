type P = { size?: number }

export function MeadowBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="meadow_bg" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#4fd96b"/>
          <stop offset="100%" stopColor="#1a7a3c"/>
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#meadow_bg)"/>
      <ellipse cx="12" cy="7.5" rx="2.2" ry="3.2" fill="white" opacity="0.92"/>
      <ellipse cx="12" cy="16.5" rx="2.2" ry="3.2" fill="white" opacity="0.92"/>
      <ellipse cx="7.5" cy="12" rx="3.2" ry="2.2" fill="white" opacity="0.92"/>
      <ellipse cx="16.5" cy="12" rx="3.2" ry="2.2" fill="white" opacity="0.92"/>
      <ellipse cx="9" cy="8.5" rx="2" ry="2.8" fill="white" opacity="0.7" transform="rotate(-45 9 8.5)"/>
      <ellipse cx="15" cy="8.5" rx="2" ry="2.8" fill="white" opacity="0.7" transform="rotate(45 15 8.5)"/>
      <ellipse cx="9" cy="15.5" rx="2" ry="2.8" fill="white" opacity="0.7" transform="rotate(45 9 15.5)"/>
      <ellipse cx="15" cy="15.5" rx="2" ry="2.8" fill="white" opacity="0.7" transform="rotate(-45 15 15.5)"/>
      <circle cx="12" cy="12" r="2.8" fill="#2db660"/>
      <circle cx="12" cy="12" r="1.4" fill="white" opacity="0.55"/>
    </svg>
  )
}

export function NitroBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="nitro_g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d9a7ff"/>
          <stop offset="100%" stopColor="#8b68e8"/>
        </linearGradient>
        <linearGradient id="nitro_g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a4bcc"/>
          <stop offset="100%" stopColor="#3d2899"/>
        </linearGradient>
        <linearGradient id="nitro_g3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4a34b0"/>
          <stop offset="100%" stopColor="#7b5be8"/>
        </linearGradient>
      </defs>
      <polygon points="12,2.5 20,8.5 12,11 4,8.5" fill="url(#nitro_g1)"/>
      <polygon points="12,11 20,8.5 16,20.5 12,22.5" fill="url(#nitro_g2)"/>
      <polygon points="12,11 12,22.5 8,20.5 4,8.5" fill="url(#nitro_g3)"/>
      <polygon points="12,11 16,20.5 12,22.5 8,20.5" fill="rgba(0,0,0,0.2)"/>
      <polygon points="12,2.5 20,8.5 12,11 4,8.5" fill="rgba(255,255,255,0.15)"/>
    </svg>
  )
}

export function BoosterBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="boost_g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff73fa"/>
          <stop offset="50%" stopColor="#c055c0"/>
          <stop offset="100%" stopColor="#8a3db8"/>
        </linearGradient>
      </defs>
      <path d="M12 2.5C8.5 2.5 5 5.5 5 10c0 4 3.5 8 7 11 3.5-3 7-7 7-11 0-4.5-3.5-7.5-7-7.5z"
        fill="url(#boost_g)"/>
      <path d="M12 2.5C9.5 2.5 7 4.5 6 7.5l6 2.5 6-2.5C17 4.5 14.5 2.5 12 2.5z"
        fill="rgba(255,255,255,0.2)"/>
      <path d="M13 8.5l-1.5 4.5H14l-2 6.5 5.5-8H14l1.5-3H13z" fill="white" opacity="0.95"/>
    </svg>
  )
}

export function ActiveDevBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="dev_g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#45c262"/>
          <stop offset="100%" stopColor="#1e7e40"/>
        </linearGradient>
      </defs>
      <rect x="2" y="3" width="20" height="18" rx="3.5" fill="url(#dev_g)"/>
      <rect x="2" y="3" width="20" height="6" rx="3.5" fill="rgba(255,255,255,0.12)"/>
      <rect x="2" y="7" width="20" height="2" fill="rgba(255,255,255,0.08)"/>
      <circle cx="5.5" cy="5.5" r="1" fill="rgba(255,255,255,0.6)"/>
      <circle cx="8.5" cy="5.5" r="1" fill="rgba(255,255,255,0.6)"/>
      <circle cx="11.5" cy="5.5" r="1" fill="rgba(255,255,255,0.6)"/>
      <path d="M7.5 13.5L5 16l2.5 2.5" stroke="white" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 13.5L19 16l-2.5 2.5" stroke="white" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="13.5" y1="12" x2="10.5" y2="20" stroke="rgba(255,255,255,0.75)"
        strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

export function BrillianceBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="brill_g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff6ec7"/>
          <stop offset="100%" stopColor="#d41465"/>
        </linearGradient>
        <linearGradient id="brill_shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
      </defs>
      <path d="M12 2L3 10.5C3 16.5 7 21 12 22.5 17 21 21 16.5 21 10.5L12 2z"
        fill="url(#brill_g)"/>
      <path d="M12 2L3 10.5h18L12 2z" fill="url(#brill_shine)"/>
      <polygon points="12,6 14.5,11.5 20,12 15.5,16.5 17,22 12,19 7,22 8.5,16.5 4,12 9.5,11.5"
        fill="rgba(255,255,255,0.25)"/>
      <polygon points="12,7.5 14,12 12,13.5 10,12" fill="rgba(255,255,255,0.5)"/>
    </svg>
  )
}

export function QuestBadge({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="quest_g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde74c"/>
          <stop offset="100%" stopColor="#e6a817"/>
        </linearGradient>
        <linearGradient id="quest_body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd740"/>
          <stop offset="100%" stopColor="#c87d00"/>
        </linearGradient>
      </defs>
      <path d="M7 3h10l.5 1.5C18 7 17 9.5 15 11H9C7 9.5 6 7 6.5 4.5L7 3z"
        fill="url(#quest_g)"/>
      <path d="M6.5 4.5C5.5 4 4.5 4 4 5S4 7.5 6.5 8" stroke="#fde74c" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>
      <path d="M17.5 4.5C18.5 4 19.5 4 20 5S20 7.5 17.5 8" stroke="#fde74c" strokeWidth="1.5"
        strokeLinecap="round" fill="none"/>
      <rect x="10.5" y="11" width="3" height="3.5" fill="#e6a817"/>
      <path d="M7.5 14.5h9a4.5 4.5 0 0 1-4.5 7 4.5 4.5 0 0 1-4.5-7z"
        fill="url(#quest_body)"/>
      <path d="M8.5 14.5h7c-.5 2-1.5 3.5-3.5 4.5-2-1-3-2.5-3.5-4.5z"
        fill="rgba(255,255,255,0.2)"/>
      <rect x="6" y="14" width="12" height="1.5" rx="0.75" fill="#e6a817"/>
      <rect x="8.5" y="20.5" width="7" height="1.5" rx="0.75" fill="#c87d00"/>
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
