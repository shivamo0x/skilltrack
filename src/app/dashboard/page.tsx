"use client";
import { useContext } from "react";
import { SkillContext } from "@/context/SkillContext";
import SkillCard from "@/components/skillcard";

export default function Dashboard() {
  const { skills } = useContext(SkillContext);

  return (
    <main className="min-h-[80vh] pt-24 px-4">
      
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {skills.length === 0 ? (
          <p className="text-white/70 text-lg text-center col-span-full">
            No skills added yet
          </p>
        ) : (
          skills.map((s: any, i: number) => (
            <SkillCard
              key={i}
              title={s.title}
              progress={s.progress}
            />
          ))
        )}
      </div>

    </main>
  );
}