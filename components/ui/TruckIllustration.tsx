export default function TruckIllustration() {
  return (
    <svg
      viewBox="0 0 900 420"
      role="img"
      aria-label="Dark blue semi truck with white dry van trailer"
      className="mx-auto h-auto w-full max-w-[620px]"
    >
      <defs>
        <linearGradient id="truckBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#071426" />
        </linearGradient>

        <linearGradient id="trailerBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbe3ec" />
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="12"
            floodColor="#020617"
            floodOpacity="0.35"
          />
        </filter>
      </defs>

      <g filter="url(#shadow)">
        {/* Trailer */}
        <rect
          x="365"
          y="95"
          width="430"
          height="220"
          rx="10"
          fill="url(#trailerBody)"
          stroke="#cbd5e1"
          strokeWidth="4"
        />

        {/* Trailer ribs */}
        {Array.from({ length: 13 }).map((_, index) => (
          <line
            key={index}
            x1={390 + index * 30}
            y1="105"
            x2={390 + index * 30}
            y2="305"
            stroke="#cbd5e1"
            strokeWidth="2"
            opacity="0.65"
          />
        ))}

        {/* Trailer lower rail */}
        <rect x="365" y="286" width="430" height="18" fill="#94a3b8" />
        <rect x="365" y="303" width="430" height="8" fill="#ef4444" opacity="0.85" />

        {/* Cab */}
        <path
          d="M140 315V190c0-45 28-88 70-103l72-26c24-9 50-6 72 8l58 38c22 14 35 39 35 65v143H140Z"
          fill="url(#truckBody)"
          stroke="#334155"
          strokeWidth="4"
        />

        {/* Sleeper roof */}
        <path
          d="M215 88c18-28 54-44 88-37l49 10c24 5 44 21 57 41l15 23H190l25-37Z"
          fill="#10233d"
        />

        {/* Windshield */}
        <path
          d="M246 105h82c18 0 34 8 45 21l25 31H236l10-52Z"
          fill="#0f172a"
          stroke="#64748b"
          strokeWidth="3"
        />

        {/* Side window */}
        <path
          d="M172 128h54v76h-54z"
          fill="#0f172a"
          stroke="#64748b"
          strokeWidth="3"
        />

        {/* Hood */}
        <path
          d="M140 230h126l48 46H140v-46Z"
          fill="#12263f"
        />

        {/* Grille */}
        <rect
          x="165"
          y="236"
          width="72"
          height="70"
          rx="10"
          fill="#cbd5e1"
          stroke="#64748b"
          strokeWidth="4"
        />

        <g stroke="#475569" strokeWidth="3">
          <line x1="178" y1="246" x2="178" y2="294" />
          <line x1="190" y1="246" x2="190" y2="294" />
          <line x1="202" y1="246" x2="202" y2="294" />
          <line x1="214" y1="246" x2="214" y2="294" />
          <line x1="226" y1="246" x2="226" y2="294" />
        </g>

        {/* Headlights */}
        <ellipse cx="260" cy="278" rx="22" ry="13" fill="#f8fafc" />
        <ellipse cx="260" cy="278" rx="11" ry="7" fill="#f97316" />

        {/* Orange roof lights */}
        {[255, 285, 315, 345].map((x) => (
          <rect
            key={x}
            x={x}
            y="83"
            width="12"
            height="7"
            rx="3"
            fill="#f97316"
          />
        ))}

        {/* Fuel tank */}
        <rect
          x="285"
          y="276"
          width="95"
          height="28"
          rx="12"
          fill="#94a3b8"
        />

        {/* Mirrors */}
        <rect x="128" y="145" width="10" height="62" rx="5" fill="#94a3b8" />
        <rect x="427" y="150" width="10" height="58" rx="5" fill="#94a3b8" />

        {/* Wheels */}
        {[205, 350, 500, 735].map((x) => (
          <g key={x}>
            <circle cx={x} cy="325" r="42" fill="#111827" />
            <circle cx={x} cy="325" r="22" fill="#94a3b8" />
            <circle cx={x} cy="325" r="9" fill="#475569" />
          </g>
        ))}

        {/* Double rear wheel */}
        <circle cx="555" cy="325" r="42" fill="#111827" />
        <circle cx="555" cy="325" r="22" fill="#94a3b8" />
        <circle cx="555" cy="325" r="9" fill="#475569" />

        {/* Road shadow */}
        <ellipse
          cx="455"
          cy="380"
          rx="360"
          ry="18"
          fill="#020617"
          opacity="0.35"
        />
      </g>
    </svg>
  );
}