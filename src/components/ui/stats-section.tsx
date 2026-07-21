"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Users,
  Briefcase,
  Zap,
  Lightbulb,
  Map as MapIcon,
  Calendar,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { Counter } from "../ui/animate-counter";
import map from '@/assets/Carte-ANAT.svg'

// --- CONFIGURATION DES DONNÉES ---

const RESPONSIVE_POSITIONS = [
  {
    desktop: { top: "52.2%", left: "27.2%" },
    mobile: { top: "52.5%", left: "27.2%" },
  }, 
  {
    desktop: { top: "24.2%", left: "45.2%" },
    mobile: { top: "24%", left: "45%" },
  }, 
  {
    desktop: { top: "16.6%", left: "74.8%" },
    mobile: { top: "16.8%", left: "74.9%" },
  }, 
  {
    desktop: { top: "40.5%", left: "79.8%" },
    mobile: { top: "40.8%", left: "80%" },
  }, 
  {
    desktop: { top: "54%", left: "57.2%" },
    mobile: { top: "54,5%", left: "57.2%" },
  }, 
  {
    desktop: { top: "77.2%", left: "73.3%" },
    mobile: { top: "77.2%", left: "73.2%" },
  }, 
];

interface LoremIpsumPool {
  id?: string;
  name: string;
  amenagement: number;
  financement: number;
  projets: number;
}

interface LoremIpsumFigure {
  id?: string;
  label: string;
  value: number;
  suffix?: string;
}

interface StatsSectionProps {
  data?: {
    poolsData?: LoremIpsumPool[];
    keyFigures?: LoremIpsumFigure[];
    title?: string;
    tag?: string;
    titleHighlight?: string;
    description?: string;
  };
}

export default function StatsSection({ data }: StatsSectionProps) {
  const poolsData = data?.poolsData || [];
  const keyFigures = data?.keyFigures || [];
  const title = data?.title || "Lorem ipsum dolor ";
  const tag = data?.tag || "Lorem Ipsum";
  const highlight_title = data?.titleHighlight || "Sit Amet";
  const desc = data?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.";

  const [selectedPool, setSelectedPool] = useState<string>(poolsData[0]?.name || "Lorem Ipsum Pool A");
  const stats = poolsData.find((p) => p.name === selectedPool) || poolsData[0] || { amenagement: 0, financement: 0, projets: 0 };

  const KEY_FIGURE_ICONS = [
    <Users key="users" className="w-6 h-6" />,
    <Briefcase key="brief" className="w-6 h-6" />,
    <Zap key="zap" className="w-6 h-6" />,
    <Lightbulb key="light" className="w-6 h-6" />,
  ];

  return (
    <section
      id="stats"
      className="bg-[#0a2540] w-full text-white py-24 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0F7ABF]/5 skew-x-12 translate-x-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FBC02D]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-350 px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="mb-16 border-l-4 border-[#FBC02D] pl-8">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-4 h-4 text-[#FBC02D]" />
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#FBC02D]">
                  {tag}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tighter">
                {title} <span className="text-[#0F7ABF]">{highlight_title}</span>
              </h2>
              <p className="mt-6 text-gray-400 max-w-2xl text-sm md:text-base font-medium leading-relaxed italic opacity-80">
                {desc}
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end min-h-100 lg:min-h-137.5">
            <ClickableMap poolsData={poolsData} onSelect={setSelectedPool} selected={selectedPool} />
          </div>
        </div>
      </div>
    </section>
  );
}



function ClickableMap({
  poolsData,
  onSelect,
  selected,
}: {
  poolsData: LoremIpsumPool[];
  onSelect: (p: string) => void;
  selected: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full max-w-137.5 aspect-square flex items-center justify-center">
      <Image
        src={map}
        alt="Lorem Ipsum"
        width={550}
        height={550}
        className="opacity-75 object-contain"
      />
      <div className="absolute inset-0">
        {poolsData?.map((poolItem, i) => {
          const pos = isMobile
            ? RESPONSIVE_POSITIONS[i % RESPONSIVE_POSITIONS.length].mobile
            : RESPONSIVE_POSITIONS[i % RESPONSIVE_POSITIONS.length].desktop;
          return (
            <button
              key={poolItem.id || i}
              onClick={() => onSelect(poolItem.name)}
              className={`absolute rounded-full transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group
                ${selected === poolItem.name ? "bg-[#FBC02D] w-12 h-12 lg:w-14 lg:h-14 shadow-2xl z-30" : "bg-white/10 w-8 h-8 lg:w-10 lg:h-10 z-20"}`}
              style={{ top: pos.top, left: pos.left }}
            >
              <div
                className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full ${selected === poolItem.name ? "bg-[#0a2540]" : "bg-white/50"}`}
              />
              <div
                className={`absolute -top-10 whitespace-nowrap px-3 py-1 bg-white text-[#0a2540] text-[9px] font-black uppercase transition-all
                ${selected === poolItem.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"}`}
              >
                {poolItem.name}
              </div>
              {selected === poolItem.name && (
                <span className="absolute inset-0 rounded-full bg-[#FBC02D] animate-ping opacity-30" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}