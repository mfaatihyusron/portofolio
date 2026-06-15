import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";

export default function ProjectCard({
  image,
  title,
  subtitle,
  role,
  timeline,
  metrics,
  techStack,
  situation,
  task,
  action,
  result,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-8">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="text-zinc-400 mt-2">{subtitle}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-zinc-800 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <p><strong>Situation:</strong> {situation}</p>
          <p><strong>Task:</strong> {task}</p>
          <p><strong>Action:</strong> {action}</p>
          <p><strong>Result:</strong> {result}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-zinc-500 text-sm">Role</p>
            <p>{role}</p>
          </div>

          <div>
            <p className="text-zinc-500 text-sm">Timeline</p>
            <p>{timeline}</p>
          </div>
        </div>

        <div className="mt-6 text-amber-200 font-medium">
          {metrics}
        </div>

        <div className="flex gap-4 mt-8">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl">
            <ExternalLink size={18} />
            Case Study
          </button>

          <button className="flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-xl">
            <Globe size={18} />
            GitHub
          </button>
        </div>
      </div>
    </motion.div>
  );
}