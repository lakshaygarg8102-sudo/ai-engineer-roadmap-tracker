interface Props {
  title: string;
  value: string;
}

export default function StatsCard({ title, value }: Props) {
  return (
    <div
      className="
        bg-gradient-to-br
        from-slate-800
        to-slate-900
        rounded-2xl
        border
        border-slate-700
        shadow-xl
        p-6
        hover:border-blue-500
        hover:scale-[1.02]
        transition-all
        duration-300
      "
    >
      <p className="text-slate-400">{title}</p>

      <h2 className="text-4xl font-bold mt-3">{value}</h2>
    </div>
  );
}