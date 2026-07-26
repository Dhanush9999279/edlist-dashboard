const teams = [
  { name: "Design Team", members: 5, lead: "Ava" },
  { name: "Product Team", members: 7, lead: "Noah" },
  { name: "Infra Team", members: 4, lead: "Liam" },
];

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Teams</h1>
        <p className="mt-1 text-sm text-gray-400">
          Overview of the teams involved in the current project portfolio.
        </p>
      </div>

      <div className="rounded-xl bg-slate-950 p-5 ring-1 ring-white/10">
        <div className="space-y-4">
          {teams.map((team) => (
            <div
              key={team.name}
              className="rounded-lg border border-white/10 p-4"
            >
              <h2 className="text-lg font-semibold text-white">{team.name}</h2>
              <p className="mt-1 text-sm text-gray-400">Lead: {team.lead}</p>
              <p className="mt-1 text-sm text-gray-300">
                Members: {team.members}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}