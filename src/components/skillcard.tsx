"use client";
import { useContext } from "react";
import { SkillContext } from "@/context/SkillContext";

type Props = {
  title: string;
  progress: number;
};

const SkillCard = ({ title, progress }: Props) => {
  const { deleteSkill, updateSkill } = useContext(SkillContext);

  const handleEdit = () => {
    const input = prompt("Enter new progress % (0-100)");

    if (input === null) return;

    const newProgress = Number(input);

    if (isNaN(newProgress)) {
      alert("Enter valid number");
      return;
    }

    if (newProgress < 0 || newProgress > 100) {
      alert("Progress must be 0–100");
      return;
    }

    updateSkill(title, newProgress);
  };

  // SAFE DISPLAY VALUE
  const safeProgress = Math.max(0, Math.min(progress || 0, 100));

  return (
    <div
      className="
        bg-slate-800 
        border 
        border-slate-700 
        p-5 
        rounded-xl 
        w-64 
        shadow-lg 
        transition 
        duration-300 
        hover:scale-105 
        hover:shadow-purple-500/30
      "
    >
      <h3 className="text-xl font-semibold text-purple-400">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-400">Progress</p>

      <div className="w-full bg-slate-700 h-3 rounded mt-1">
        <div
          className="bg-purple-500 h-3 rounded transition-all duration-500"
          style={{ width: `${safeProgress}%` }}
        ></div>
      </div>

      <p className="mt-1 text-sm">{safeProgress}%</p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => deleteSkill(title)}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
        >
          Delete
        </button>

        <button
          onClick={handleEdit}
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default SkillCard;