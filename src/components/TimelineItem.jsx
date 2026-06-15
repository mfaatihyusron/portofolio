import { motion } from "framer-motion";

export default function TimelineItem({
  year,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-10 pb-12"
    >
      <div className="absolute left-0 top-2 w-4 h-4 bg-amber-200 rounded-full" />

      <div className="absolute left-[7px] top-6 w-[2px] h-full bg-zinc-700" />

      <span className="text-amber-200 font-semibold">
        {year}
      </span>

      <h3 className="text-xl font-bold mt-2">
        {title}
      </h3>

      <p className="text-zinc-400 mt-2">
        {description}
      </p>
    </motion.div>
  );
}