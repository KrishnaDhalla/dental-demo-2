import clinicData from "../data/clinicData";
import DynamicIcon from "./ui/DynamicIcon";

export default function StatsTicker() {
  const items = clinicData.stats;
  const doubled = [...items, ...items];

  return (
    <div className="bg-white border-y border-gray-100 py-4 overflow-hidden">
      <div className="animate-scroll flex items-center gap-12 w-max">
        {doubled.map((s, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <DynamicIcon name={s.icon} size={28} className="text-brown-300" />
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400 font-bold text-lg">{s.value}</span>
              <span className="text-gray-600 text-sm font-medium">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
