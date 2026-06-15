import { motion } from "framer-motion";

export default function SkillCard({ icon: Icon, title, items }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
    >
      <Icon className="w-8 h-8 text-amber-200 mb-4" />

      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <ul className="space-y-2 text-zinc-400">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}