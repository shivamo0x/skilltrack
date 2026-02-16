"use client";
import { useState, useContext } from "react";
import { SkillContext } from "@/context/SkillContext";

export default function Add() {
  const { addSkill } = useContext(SkillContext);

  const [skill, setSkill] = useState("");
  const [progress, setProgress] = useState<number | "">("");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    if (skill.trim() === "") {
      setError("Skill name required");
      return;
    }

    if (progress === "") {
      setError("Enter progress");
      return;
    }

    if (progress < 0 || progress > 100) {
      setError("Progress must be 0–100");
      return;
    }

    setError("");
    addSkill({ title: skill, progress });

    setSkill("");
    setProgress("");

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center px-4">

      {/* TOAST */}
      {showToast && (
        <div className="fixed top-20 right-6 z-50 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg fade-in">
          Skill added to dashboard ✅
        </div>
      )}

      {/* CARD */}
      <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-400 to-blue-500 w-full max-w-md">
        <div className="bg-slate-900/80 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 text-white shadow-xl">

          <h2 className="text-2xl font-semibold text-center">
            Add Skill
          </h2>

          <input
            value={skill}
            className="border border-slate-600 p-2 rounded bg-transparent outline-purple-500"
            placeholder="Skill Name"
            onChange={(e) => setSkill(e.target.value)}
          />

          <input
            value={progress}
            type="number"
            className="border border-slate-600 p-2 rounded bg-transparent outline-purple-500"
            placeholder="Progress %"
            onChange={(e) =>
              setProgress(e.target.value === "" ? "" : Number(e.target.value))
            }
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-3 py-2 rounded"
            onClick={handleSubmit}
          >
            Add Skill
          </button>

        </div>
      </div>
    </div>
  );
}