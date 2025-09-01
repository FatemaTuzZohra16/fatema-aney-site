"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div
      className="h-full bg-transparent relative w-full">
      
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
