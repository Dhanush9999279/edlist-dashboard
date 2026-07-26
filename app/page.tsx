const projects = [
  { name: "Website Redesign", status: "On Track", tasks: 24, owner: "Design Team" },
  { name: "Mobile App Launch", status: "At Risk", tasks: 42, owner: "Product Team" },
  { name: "Data Migration", status: "Delayed", tasks: 18, owner: "Infra Team" },
];

export default function HomePage() {
  const totalTasks = projects.reduce((sum, project) => sum + project.tasks, 0);
  const atRiskProjects = projects.filter((project) => project.status === "At Risk").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Project Dashboard</h1>
        <p className="mt-1 text-sm text-gray-400">
          Overview of active work, task volume, and risk status.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-slate-950 p-5 ring-1 ring-white/10">
          <p className="text-sm text-gray-400">Active projects</p>
          <p className="mt-2 text-3xl font-semibold text-white">{projects.length}</p>
        </div>

        <div className="rounded-xl bg-slate-950 p-5 ring-1 ring-white/10">
          <p className="text-sm text-gray-400">Total tasks</p>
          <p className="mt-2 text-3xl font-semibold text-white">{totalTasks}</p>
        </div>

        <div className="rounded-xl bg-slate-950 p-5 ring-1 ring-white/10">
          <p className="text-sm text-gray-400">At risk projects</p>
          <p className="mt-2 text-3xl font-semibold text-white">{atRiskProjects}</p>
        </div>
      </div>

      <div className="rounded-xl bg-slate-950 p-5 ring-1 ring-white/10">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">Projects</h2>
          <p className="text-sm text-gray-400">
            Current delivery status across the active portfolio.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="py-3 pr-4 font-medium">Name</th>
                <th className="py-3 pr-4 font-medium">Status</th>
                <th className="py-3 pr-4 font-medium">Tasks</th>
                <th className="py-3 pr-4 font-medium">Owner</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.name}
                  className="border-b border-white/5 text-gray-200"
                >
                  <td className="py-4 pr-4">{project.name}</td>
                  <td className="py-4 pr-4">{project.status}</td>
                  <td className="py-4 pr-4">{project.tasks}</td>
                  <td className="py-4 pr-4">{project.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}