type P = { size?: number }

const badgeImages: Record<string, string> = {
  meadow: "/badges/meadow.png",
  nitro: "/badges/nitro.svg",
  booster: "/badges/booster.svg",
  "active-dev": "/badges/active-dev.svg",
  brilliance: "/badges/brilliance.svg",
  quest: "/badges/quest.png",
}

export function BadgeIcon({ id, size = 22 }: { id: string; size?: number }) {
  const src = badgeImages[id]
  if (!src) return <span style={{ fontSize: size * 0.75 }}>⭐</span>
  return (
    <img
      src={src}
      alt={id}
      width={size}
      height={size}
      style={{ imageRendering: "auto", objectFit: "contain" }}
      draggable={false}
    />
  )
}
