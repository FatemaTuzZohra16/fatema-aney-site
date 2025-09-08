"use client";
import React from "react";
import { ShootingStars } from "@/Components/ui/ShootingStars";
import { StarsBackground } from "@/Components/ui/StarsBackground";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div
      className="h-full bg-transparent relative w-full">
      
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
