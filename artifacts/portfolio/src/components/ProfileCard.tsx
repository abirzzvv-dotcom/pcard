import { useState } from "react";
import { useProfile, useBadges, useProjects, useOngoing } from "@/hooks/useData";
import BadgeRow from "./BadgeRow";
import ProjectCard from "./ProjectCard";

export default function ProfileCard() {
  const profile = useProfile();
  const badges = useBadges();
  const projects = useProjects();
  const ongoing = useOngoing();
  const [activeTab, setActiveTab] = useState<"projects" | "ongoing">("projects");

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center" style={{ color: "#4e5058" }}>
          <div className="text-4xl mb-3">⚙️</div>
          <p className="text-sm">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center py-10 px-4"
      style={{ background: "#0f0f10" }}
    >
      <div
        className="w-full rounded-2xl overflow-hidden animate-fade-up"
        style={{
          maxWidth: "860px",
          background: "#1e1f22",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Banner */}
        <div
          className="relative h-32 sm:h-40"
          style={{
            background:
              "linear-gradient(135deg, #1a0533 0%, #2d1155 25%, #4a1572 45%, #831d5e 70%, #a8246e 85%, #c4394d 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(156, 132, 252, 0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(232, 75, 120, 0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Avatar section */}
        <div className="px-5 sm:px-7 relative">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-10 sm:-mt-12 mb-4">
            {/* Avatar + name glass box */}
            <div className="flex items-end gap-4">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl select-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #5865f2 0%, #9c84fc 50%, #c084fc 100%)",
                    border: "4px solid #1e1f22",
                    boxShadow: "0 4px 20px rgba(88,101,242,0.4)",
                  }}
                >
                  {profile.initials}
                </div>
                {/* Status dot */}
                <div
                  className="absolute bottom-1 right-1 w-4 h-4 rounded-full status-dot"
                  style={{
                    boxShadow: "0 0 0 3px #1e1f22",
                    background: "#3ba55c",
                    animation: "pulse-dot 2s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Name glass box */}
              <div
                className="glass rounded-xl px-4 py-2 mb-2 animate-fade-up delay-100"
                style={{ opacity: 0 }}
              >
                <div className="font-bold text-white text-lg leading-tight">
                  {profile.username}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#b5bac1" }}>
                  {profile.tagline}
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p
            className="text-sm mb-4 animate-fade-up delay-200"
            style={{ color: "#8e9297", opacity: 0, maxWidth: "600px" }}
          >
            {profile.bio}
          </p>

          {/* Badges */}
          <div className="animate-fade-up delay-300" style={{ opacity: 0 }}>
            <BadgeRow badges={badges} />
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
                className={`pb-2 text-sm font-semibold capitalize tracking-wide transition-colors duration-150 cursor-pointer ${
                  activeTab === tab ? "tab-active text-white" : "text-[#8e9297] hover:text-[#b5bac1]"
                }`}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab ? "2px solid #5865f2" : "2px solid transparent",
                  outline: "none",
                  padding: "4px 0 8px",
                }}
              >
                {tab === "projects" ? "Projects" : "Ongoing"}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-5 sm:px-7 pb-7 pt-4">
          {activeTab === "projects" && (
            <div
              className="grid gap-4 animate-fade-up"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className="animate-fade-up"
                  style={{
                    animationDelay: `${i * 0.08}s`,
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
              className="grid gap-4 animate-fade-up"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
              }}
            >
              {ongoing.map((item, i) => (
                <div
                  key={item.id}
                  className="animate-fade-up"
                  style={{
                    animationDelay: `${i * 0.08}s`,
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
