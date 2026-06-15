import { motion } from "framer-motion";

export default function TechCard({
  icon,
  name,
  percentage,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 overflow-hidden"
    >
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="font-semibold text-lg">{name}</h3>

      <div className="w-full bg-zinc-800 h-2 rounded-full mt-3">
        <div
          className="bg-amber-200 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-sm text-zinc-500 mt-2">
        {percentage}%
      </p>

      <div className="absolute inset-0 bg-zinc-950/95 p-5 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-zinc-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}