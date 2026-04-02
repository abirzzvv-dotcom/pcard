import { useState } from "react";
import { useProfile, useBadges, useProjects, useOngoing } from "@/hooks/useData";
import BadgeRow from "./BadgeRow";
import ProjectCard from "./ProjectCard";

const STATUS_CONFIG = {
  online:  { color: "#3ba55c", label: "Online",       bg: "#3ba55c" },
  idle:    { color: "#faa61a", label: "Idle",          bg: "#faa61a" },
  dnd:     { color: "#ed4245", label: "Do Not Disturb", bg: "#ed4245" },
  offline: { color: "#747f8d", label: "Offline",       bg: "#747f8d" },
};

function StatusDot({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] ?? STATUS_CONFIG.offline;

  if (status === "idle") {
    return (
      <div
        className="absolute bottom-1 right-1 w-4 h-4 rounded-full flex items-center justify-center"
        style={{
          background: "#1e1f22",
          boxShadow: "0 0 0 3px #1e1f22",
        }}
      >
        <div className="w-4 h-4 rounded-full relative" style={{ background: cfg.bg }}>
          <div
            className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full"
            style={{ background: "#1e1f22", transform: "translate(25%, -25%)" }}
          />
        </div>
      </div>
    );
  }

  if (status === "dnd") {
    return (
      <div
        className="absolute bottom-1 right-1 w-4 h-4 rounded-full flex items-center justify-center"
        style={{
          background: cfg.bg,
          boxShadow: "0 0 0 3px #1e1f22",
        }}
      >
        <div
          className="w-2 h-0.5 rounded-full"
          style={{ background: "#1e1f22" }}
        />
      </div>
    );
  }

  if (status === "offline") {
    return (
      <div
        className="absolute bottom-1 right-1 w-4 h-4 rounded-full flex items-center justify-center"
        style={{
          background: "#1e1f22",
          boxShadow: "0 0 0 3px #1e1f22",
        }}
      >
        <div className="w-3 h-3 rounded-full" style={{ background: cfg.bg }} />
      </div>
    );
  }

  // online
  return (
    <div
      className="absolute bottom-1 right-1 w-4 h-4 rounded-full"
      style={{
        background: cfg.bg,
        boxShadow: "0 0 0 3px #1e1f22",
      }}
    />
  );
}

export default function ProfileCard() {
  const profile = useProfile();
  const badges = useBadges();
  const projects = useProjects();
  const ongoing = useOngoing();
  const [activeTab, setActiveTab] = useState<"projects" | "ongoing">("projects");

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="text-center p-8 rounded-2xl"
          style={{ background: "#1e1f22", color: "#4e5058" }}
        >
          <div className="text-4xl mb-3">⚙️</div>
          <p className="text-sm">Loading profile...</p>
        </div>
      </div>
    );
  }

  const statusCfg =
    STATUS_CONFIG[profile.status as keyof typeof STATUS_CONFIG] ?? STATUS_CONFIG.offline;
  const hasPfp = !!profile.pfp;

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4"
      style={{ background: "#0f0f10" }}
    >
      <div
        className="w-full rounded-2xl overflow-visible animate-fade-up"
        style={{
          maxWidth: "860px",
          background: "#1e1f22",
          boxShadow: "0 32px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* ─── Banner ─── */}
        <div
          className="relative h-36 sm:h-44 rounded-t-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0e0326 0%, #1e0844 18%, #3b0f72 35%, #6b1c7a 52%, #9e2464 68%, #c43050 82%, #d44a2e 100%)",
          }}
        >
          {/* Overlay blobs */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 60%, rgba(150,100,255,0.35) 0%, transparent 55%), " +
                "radial-gradient(ellipse at 75% 25%, rgba(240,80,150,0.25) 0%, transparent 50%), " +
                "radial-gradient(ellipse at 50% 100%, rgba(88,101,242,0.2) 0%, transparent 40%)",
            }}
          />
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* ─── Avatar + name box ─── */}
        <div className="px-5 sm:px-7 relative">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 -mt-11 sm:-mt-13 mb-4">
            <div className="flex items-end gap-4">
              {/* Avatar */}
              <div className="relative shrink-0">
                {hasPfp ? (
                  <img
                    src={profile.pfp}
                    alt={profile.username}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                    style={{
                      border: "4px solid #1e1f22",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
                    }}
                  />
                ) : (
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl select-none"
                    style={{
                      background:
                        "linear-gradient(135deg, #5865f2 0%, #9c84fc 55%, #c084fc 100%)",
                      border: "4px solid #1e1f22",
                      boxShadow: "0 4px 24px rgba(88,101,242,0.45)",
                    }}
                  >
                    {profile.initials}
                  </div>
                )}
                <StatusDot status={profile.status} />
              </div>

              {/* Glassmorphism name + status box */}
              <div
                className="glass rounded-xl px-4 py-2.5 mb-1 animate-fade-up delay-100"
                style={{ opacity: 0 }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-lg leading-tight">
                    {profile.username}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background: `${statusCfg.bg}22`,
                      color: statusCfg.color,
                      border: `1px solid ${statusCfg.bg}44`,
                    }}
                  >
                    {statusCfg.label}
                  </span>
                </div>
                <div className="text-xs mt-0.5 font-medium" style={{ color: "#72767d" }}>
                  @{profile.handle} · {profile.tagline}
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p
            className="text-sm font-medium mb-1 animate-fade-up delay-200"
            style={{ color: "#dcddde", opacity: 0 }}
          >
            {profile.bio}
          </p>

          {/* Description */}
          {profile.description && (
            <p
              className="text-sm leading-relaxed mb-4 animate-fade-up delay-200"
              style={{ color: "#72767d", opacity: 0, maxWidth: "640px" }}
            >
              {profile.description}
            </p>
          )}

          {/* Badges section */}
          <div className="animate-fade-up delay-300" style={{ opacity: 0 }}>
            {badges.length > 0 && (
              <div className="mb-1">
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-2 block"
                  style={{ color: "#4e5058", letterSpacing: "0.08em" }}
                >
                  Badges
                </span>
                <BadgeRow badges={badges} />
              </div>
            )}
          </div>

          {/* Divider */}
          <div
            className="my-5 h-px animate-fade-up delay-400"
            style={{ background: "rgba(255,255,255,0.05)", opacity: 0 }}
          />

          {/* Tabs */}
          <div
            className="flex gap-6 animate-fade-up delay-400"
            style={{ opacity: 0 }}
          >
            {(["projects", "ongoing"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="pb-2 text-sm font-semibold capitalize tracking-wide transition-colors duration-150 cursor-pointer focus:outline-none"
                style={{
                  background: "none",
                  border: "none",
                  borderBottom:
                    activeTab === tab
                      ? "2px solid #5865f2"
                      : "2px solid transparent",
                  color: activeTab === tab ? "#fff" : "#72767d",
                  padding: "4px 0 8px",
                  outline: "none",
                }}
              >
                {tab === "projects" ? `Projects` : `Ongoing`}
                <span
                  className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    background:
                      activeTab === tab
                        ? "rgba(88,101,242,0.25)"
                        : "rgba(255,255,255,0.05)",
                    color: activeTab === tab ? "#7289da" : "#4e5058",
                  }}
                >
                  {tab === "projects" ? projects.length : ongoing.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ─── Project grid ─── */}
        <div className="px-5 sm:px-7 pb-7 pt-4">
          {activeTab === "projects" && (
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className="animate-fade-up"
                  style={{
                    animationDelay: `${i * 0.07}s`,
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}

          {activeTab === "ongoing" && (
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
              }}
            >
              {ongoing.map((item, i) => (
                <div
                  key={item.id}
                  className="animate-fade-up"
                  style={{
                    animationDelay: `${i * 0.07}s`,
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  <ProjectCard project={item} ongoing />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
