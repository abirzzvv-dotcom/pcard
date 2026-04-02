import { useState } from "react";
import { useProfile, useBadges, useProjects, useOngoing } from "@/hooks/useData";
import BadgeRow from "./BadgeRow";
import ProjectCard from "./ProjectCard";

const statuses = {
  online:  { color: "#3ba55c", label: "Online" },
  idle:    { color: "#faa61a", label: "Idle" },
  dnd:     { color: "#ed4245", label: "Do Not Disturb" },
  offline: { color: "#747f8d", label: "Offline" },
};

function StatusDot({ status }: { status: string }) {
  const s = statuses[status as keyof typeof statuses] ?? statuses.offline;

  if (status === "idle") {
    return (
      <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full" style={{ background: s.color, boxShadow: "0 0 0 3px #1e1f22" }}>
        <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full" style={{ background: "#1e1f22", transform: "translate(25%, -25%)" }} />
      </div>
    );
  }

  if (status === "dnd") {
    return (
      <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: s.color, boxShadow: "0 0 0 3px #1e1f22" }}>
        <div className="w-2 h-0.5 rounded-full" style={{ background: "#1e1f22" }} />
      </div>
    );
  }

  return (
    <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full" style={{ background: s.color, boxShadow: "0 0 0 3px #1e1f22" }} />
  );
}

export default function ProfileCard() {
  const profile = useProfile();
  const badges = useBadges();
  const projects = useProjects();
  const ongoing = useOngoing();
  const [tab, setTab] = useState<"projects" | "ongoing">("projects");

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 rounded-2xl" style={{ background: "#1e1f22", color: "#4e5058" }}>
          <div className="text-4xl mb-3"></div>
          <p className="text-sm">loading, be patient bromosapien</p>
        </div>
      </div>
    );
  }

  const s = statuses[profile.status as keyof typeof statuses] ?? statuses.offline;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ background: "#0f0f10" }}>
      <div
        className="w-full rounded-2xl overflow-visible animate-fade-up"
        style={{ maxWidth: "860px", background: "#1e1f22", boxShadow: "0 32px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)" }}
      >
        <div
          className="relative h-36 sm:h-44 rounded-t-2xl overflow-hidden"
          style={{ background: "#000000" }}
        >
          {profile.banner && (
            <img
              src={profile.banner}
              alt="banner"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ display: "block" }}
            />
          )}
        </div>

        <div className="px-5 sm:px-7 relative">
          <div className="flex flex-col sm:flex-row sm:items-end gap-3 -mt-11 sm:-mt-12 mb-4">
            <div className="flex items-end gap-4">
              <div className="relative shrink-0">
                {profile.pfp ? (
                  <img
                    src={profile.pfp}
                    alt={profile.username}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                    style={{ border: "4px solid #1e1f22", boxShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
                  />
                ) : (
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl select-none"
                    style={{ background: "linear-gradient(135deg, #5865f2 0%, #9c84fc 55%, #c084fc 100%)", border: "4px solid #1e1f22", boxShadow: "0 4px 24px rgba(88,101,242,0.45)" }}
                  >
                    {profile.initials}
                  </div>
                )}
                <StatusDot status={profile.status} />
              </div>

              <div className="glass rounded-xl px-4 py-2.5 mb-1 animate-fade-up delay-100" style={{ opacity: 0 }}>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-white text-lg leading-tight">{profile.username}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}40` }}
                  >
                    {s.label}
                  </span>
                </div>
                <div className="text-xs mt-0.5 font-medium" style={{ color: "#72767d" }}>
                  @{profile.handle} · {profile.tagline}
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm font-medium mb-1 animate-fade-up delay-200" style={{ color: "#dcddde", opacity: 0 }}>
            {profile.bio}
          </p>

          {profile.description && (
            <p className="text-sm leading-relaxed mb-4 animate-fade-up delay-200" style={{ color: "#72767d", opacity: 0, maxWidth: "640px" }}>
              {profile.description}
            </p>
          )}

          <div className="animate-fade-up delay-300" style={{ opacity: 0 }}>
            {badges.length > 0 && (
              <div className="mb-1">
                <span className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: "#4e5058", letterSpacing: "0.08em" }}>
                  Badges
                </span>
                <BadgeRow badges={badges} />
              </div>
            )}
          </div>

          <div className="my-5 h-px animate-fade-up delay-400" style={{ background: "rgba(255,255,255,0.05)", opacity: 0 }} />

          <div className="flex gap-6 animate-fade-up delay-400" style={{ opacity: 0 }}>
            {(["projects", "ongoing"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="focus:outline-none cursor-pointer transition-colors duration-150 pb-2 text-sm font-semibold capitalize"
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: tab === t ? "2px solid #5865f2" : "2px solid transparent",
                  color: tab === t ? "#fff" : "#72767d",
                  padding: "4px 0 8px",
                  outline: "none",
                }}
              >
                {t === "projects" ? "Projects" : "Ongoing"}
                <span
                  className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    background: tab === t ? "rgba(88,101,242,0.2)" : "rgba(255,255,255,0.05)",
                    color: tab === t ? "#7289da" : "#4e5058",
                  }}
                >
                  {t === "projects" ? projects.length : ongoing.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 sm:px-7 pb-7 pt-4">
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))" }}>
            {(tab === "projects" ? projects : ongoing).map((item, i) => (
              <div
                key={item.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 0.07}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <ProjectCard project={item} ongoing={tab === "ongoing"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
