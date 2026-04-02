import type { Project, OngoingProject } from "@/hooks/useData";

interface ProjectCardProps {
  project: Project | OngoingProject;
  ongoing?: boolean;
}

function isOngoing(p: Project | OngoingProject): p is OngoingProject {
  return "progress" in p;
}

export default function ProjectCard({ project, ongoing }: ProjectCardProps) {
  const progress = ongoing && isOngoing(project) ? project.progress : null;

  return (
    <div className="project-card rounded-xl p-4 flex flex-col gap-3 h-full">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-white text-base flex items-center gap-1">
            <span style={{ color: "#5865f2" }}>#</span>
            {project.name}
          </h3>
        </div>
        {progress !== null && (
          <span
            className="text-xs px-2 py-0.5 rounded-full shrink-0 font-medium"
            style={{
              background: "rgba(88,101,242,0.15)",
              color: "#7289da",
              border: "1px solid rgba(88,101,242,0.25)",
            }}
          >
            {progress}%
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed flex-1" style={{ color: "#b5bac1" }}>
        {project.description}
      </p>

      {progress !== null && (
        <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: "#2e2f35" }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #5865f2, #9c84fc)",
            }}
          />
        </div>
      )}

      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md font-medium"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "#9ea8b3",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 shrink-0"
          style={{
            background: "rgba(88,101,242,0.15)",
            color: "#7289da",
            border: "1px solid rgba(88,101,242,0.2)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(88,101,242,0.3)";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(88,101,242,0.15)";
            (e.currentTarget as HTMLElement).style.color = "#7289da";
          }}
        >
          View on GitHub ↗
        </a>
      </div>
    </div>
  );
}
