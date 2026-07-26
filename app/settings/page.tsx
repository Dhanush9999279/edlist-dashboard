export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="mt-1 text-sm text-gray-400">
          Manage preferences and dashboard configuration.
        </p>
      </div>

      <div className="rounded-xl bg-slate-950 p-5 ring-1 ring-white/10">
        <div className="space-y-4">
          <div className="rounded-lg border border-white/10 p-4">
            <h2 className="text-lg font-semibold text-white">Theme</h2>
            <p className="mt-1 text-sm text-gray-400">
              Dark mode toggle UI is available in the top navigation.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 p-4">
            <h2 className="text-lg font-semibold text-white">Notifications</h2>
            <p className="mt-1 text-sm text-gray-400">
              Notification settings can be added in a future version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}