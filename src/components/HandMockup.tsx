import { useState } from "react";
import { motion } from "framer-motion";

const NAIL_COLORS = [
  { name: "Fucsia", value: "hsl(322, 80%, 55%)" },
  { name: "Negro", value: "hsl(0, 0%, 8%)" },
  { name: "Rosa Pastel", value: "hsl(322, 60%, 80%)" },
  { name: "Rojo Cereza", value: "hsl(350, 80%, 45%)" },
  { name: "Blanco", value: "hsl(0, 0%, 95%)" },
  { name: "Dorado", value: "hsl(45, 80%, 55%)" },
  { name: "Morado", value: "hsl(280, 60%, 50%)" },
  { name: "Nude", value: "hsl(20, 30%, 75%)" },
];

export default function HandMockup() {
  const [nailColor, setNailColor] = useState(NAIL_COLORS[0].value);

  // Five finger nail positions (thumb to pinky, for a right hand facing palm-down)
  const nails = [
    { cx: 62, cy: 115, rx: 12, ry: 16, rotate: 25 },   // thumb
    { cx: 90, cy: 42, rx: 10, ry: 15, rotate: 2 },     // index
    { cx: 122, cy: 28, rx: 10, ry: 16, rotate: -1 },   // middle
    { cx: 154, cy: 38, rx: 9, ry: 15, rotate: -3 },    // ring
    { cx: 182, cy: 62, rx: 8, ry: 13, rotate: -6 },    // pinky
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Hand SVG */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <svg
          viewBox="0 0 240 320"
          className="h-[320px] w-[240px] drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hand silhouette */}
          <path
            d="
              M 120 310
              C 60 310, 30 270, 30 230
              L 30 180
              C 30 165, 35 155, 45 145
              L 42 130
              C 38 120, 38 105, 50 100
              C 60 96, 68 102, 72 115
              L 75 130
              L 75 80
              C 75 60, 78 35, 90 28
              C 98 22, 105 28, 105 45
              L 105 80
              L 108 55
              C 108 35, 112 18, 122 14
              C 132 10, 138 18, 138 38
              L 136 70
              L 140 60
              C 140 42, 143 25, 154 22
              C 164 18, 170 28, 170 48
              L 168 80
              L 172 75
              C 172 60, 175 50, 182 48
              C 192 44, 198 55, 196 72
              L 192 100
              L 195 130
              C 200 160, 200 180, 195 200
              L 195 230
              C 195 270, 170 310, 120 310
              Z
            "
            fill="hsl(25, 40%, 78%)"
            stroke="hsl(25, 30%, 65%)"
            strokeWidth="1.5"
          />
          {/* Knuckle lines */}
          <path d="M 78 145 Q 90 140 105 142" stroke="hsl(25,25%,68%)" strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M 108 138 Q 122 134 138 137" stroke="hsl(25,25%,68%)" strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M 142 142 Q 155 138 170 142" stroke="hsl(25,25%,68%)" strokeWidth="0.8" fill="none" opacity="0.5" />

          {/* Nails */}
          {nails.map((nail, i) => (
            <g key={i}>
              <ellipse
                cx={nail.cx}
                cy={nail.cy}
                rx={nail.rx}
                ry={nail.ry}
                transform={`rotate(${nail.rotate} ${nail.cx} ${nail.cy})`}
                fill={nailColor}
                stroke="hsl(0,0%,100%)"
                strokeWidth="0.8"
                opacity="0.95"
              />
              {/* Shine highlight */}
              <ellipse
                cx={nail.cx - nail.rx * 0.25}
                cy={nail.cy - nail.ry * 0.3}
                rx={nail.rx * 0.3}
                ry={nail.ry * 0.35}
                transform={`rotate(${nail.rotate} ${nail.cx} ${nail.cy})`}
                fill="white"
                opacity="0.3"
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Color Picker */}
      <div className="text-center">
        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Elige un color
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {NAIL_COLORS.map((c) => (
            <button
              key={c.name}
              onClick={() => setNailColor(c.value)}
              className={`h-9 w-9 rounded-full border-2 transition-all hover:scale-110 ${
                nailColor === c.value
                  ? "border-primary scale-110 shadow-soft"
                  : "border-border"
              }`}
              style={{ backgroundColor: c.value }}
              aria-label={c.name}
              title={c.name}
            />
          ))}
        </div>
        <p className="mt-2 font-body text-xs text-muted-foreground">
          {NAIL_COLORS.find(c => c.value === nailColor)?.name}
        </p>
      </div>
    </div>
  );
}
