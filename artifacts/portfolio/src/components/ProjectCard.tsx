import type { Project, OngoingProject } from "@/hooks/useData";

interface ProjectCardProps {
  project: Project | OngoingProject;
  ongoing?: boolean;
}

function isOngoing(p: Project | OngoingProject): p is OngoingProject {
  return "progress" in p;
}

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 5C7 3.343 5.657 2 4 2S1 3.343 1 5c0 1.306.835 2.418 2 2.83V13.17C1.835 13.582 1 14.694 1 16c0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.306-.835-2.418-2-2.83V11c.638.463 1.418.75 2.27.77C9.357 11.826 11 13.544 11 15.67V19h-2l3 4 3-4h-2v-3.33C13 13.416 14.8 11.586 17 11.17V13.17C15.835 13.582 15 14.694 15 16c0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.306-.835-2.418-2-2.83V7.83C20.165 7.418 21 6.306 21 5c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.306.835 2.418 2 2.83V11c-.638-.46-1.418-.75-2.27-.77C12.643 10.174 11 8.456 11 6.33V7.83C12.165 7.418 13 6.306 13 5c0-1.657-1.343-3-3-3S7 3.343 7 5z" />
    </svg>
  );
}

export default function ProjectCard({ project, ongoing }: ProjectCardProps) {
  const progress = ongoing && isOngoing(project) ? project.progress : null;

  return (
    <div
      className="project-card rounded-2xl flex flex-col gap-0 h-full overflow-hidden group"
      style={{ minHeight: "220px" }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: progress !== null
            ? `linear-gradient(90deg, #5865f2 ${progress}%, rgba(88,101,242,0.1) ${progress}%)`
            : "linear-gradient(90deg, #5865f2, #9c84fc)",
        }}
      />

      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: "rgba(88,101,242,0.12)",
                border: "1px solid rgba(88,101,242,0.2)",
              }}
            >
              <span style={{ color: "#7289da" }} className="font-bold text-sm">#</span>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-white text-[15px] leading-tight truncate">
                {project.name}
              </h3>
              {project.language && (
                <div className="flex items-center gap-1 mt-0.5">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: project.languageColor ?? "#888" }}
                  />
                  <span className="text-xs" style={{ color: "#72767d" }}>
                    {project.language}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Stars / progress badge */}
          {progress !== null ? (
            <span
              className="text-xs px-2.5 py-1 rounded-full shrink-0 font-semibold tabular-nums"
              style={{
                background: "rgba(88,101,242,0.15)",
                color: "#7289da",
                border: "1px solid rgba(88,101,242,0.25)",
              }}
            >
              {progress}%
            </span>
          ) : project.stars !== undefined ? (
            <div className="flex items-center gap-1 shrink-0" style={{ color: "#72767d" }}>
              <StarIcon />
              <span className="text-xs font-medium">{project.stars.toLocaleString()}</span>
            </div>
          ) : null}
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#9ea8b3" }}>
          {project.description}
        </p>

        {/* Progress bar */}
        {progress !== null && (
          <div
            className="w-full h-1.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #5865f2, #9c84fc)",
                transition: "width 0.7s ease",
              }}
            />
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 pt-1">
          {/* Tags + forks */}
          <div className="flex items-center gap-2 min-w-0 flex-wrap">
            {project.forks !== undefined && (
              <div className="flex items-center gap-1" style={{ color: "#4e5058" }}>
                <ForkIcon />
                <span className="text-xs">{project.forks}</span>
              </div>
            )}
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-md font-medium"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: "#72767d",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 shrink-0 group/btn"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#b5bac1",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#5865f2";
              el.style.color = "#fff";
              el.style.borderColor = "#5865f2";
              el.style.boxShadow = "0 4px 16px rgba(88,101,242,0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.05)";
              el.style.color = "#b5bac1";
              el.style.borderColor = "rgba(255,255,255,0.07)";
              el.style.boxShadow = "none";
            }}
          >
            <GitHubIcon size={13} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
