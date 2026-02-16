"use client";
import { createContext, useState, useEffect } from "react";

export const SkillContext = createContext<any>(null);

export const SkillProvider = ({ children }: any) => {
  const [skills, setSkills] = useState<any[]>([]);

  // LOAD FROM LOCAL STORAGE SAFELY
  useEffect(() => {
    const stored = localStorage.getItem("skills");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        const safe = parsed.map((s: any) => ({
          title: s.title || "Untitled",
          progress: isNaN(s.progress)
            ? 0
            : Math.max(0, Math.min(Number(s.progress), 100)),
        }));

        setSkills(safe);
      } catch {
        setSkills([]);
      }
    }
  }, []);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  const addSkill = (skill: any) => {
    setSkills((prev) => [...prev, skill]);
  };

  const updateSkill = (title: string, newProgress: number) => {
    setSkills((prev) =>
      prev.map((s) =>
        s.title === title ? { ...s, progress: newProgress } : s
      )
    );
  };

  const deleteSkill = (title: string) => {
    setSkills((prev) => prev.filter((s) => s.title !== title));
  };

  return (
    <SkillContext.Provider
      value={{ skills, addSkill, updateSkill, deleteSkill }}
    >
      {children}
    </SkillContext.Provider>
  );
};