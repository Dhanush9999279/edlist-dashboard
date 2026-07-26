const projects = [
  { name: "Website Redesign", status: "On Track", owner: "Design Team" },
  { name: "Mobile App Launch", status: "At Risk", owner: "Product Team" },
  { name: "Data Migration", status: "Delayed", owner: "Infra Team" },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Projects</h1>
        <p className="mt-1 text-sm text-gray-400">
          View the current list of active projects and their delivery status.
        </p>
      </div>

      <div className="rounded-xl bg-slate-950 p-5 ring-1 ring-white/10">
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg border border-white/10 p-4"
            >
              <h2 className="text-lg font-semibold text-white">{project.name}</h2>
              <p className="mt-1 text-sm text-gray-400">Owner: {project.owner}</p>
              <p className="mt-1 text-sm text-gray-300">Status: {project.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}