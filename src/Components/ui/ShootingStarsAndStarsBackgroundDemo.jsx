"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div
      className="h-full bg-transparent relative w-full">
      
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
