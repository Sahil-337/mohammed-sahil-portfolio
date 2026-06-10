// Decorative SVG: a few floating "nodes" with thin connector lines.
// Static (no animation loop = no perf cost), positioned as a background ornament.
export default function NeuralParticles({ className = '' }) {
  // Pre-positioned nodes (relative to a 800x500 viewBox)
  const nodes = [
    { x: 90,  y: 80,  r: 3 },
    { x: 220, y: 130, r: 2 },
    { x: 380, y: 60,  r: 3 },
    { x: 540, y: 180, r: 2 },
    { x: 680, y: 90,  r: 3 },
    { x: 130, y: 290, r: 2 },
    { x: 320, y: 350, r: 3 },
    { x: 470, y: 280, r: 2 },
    { x: 620, y: 380, r: 3 },
    { x: 750, y: 320, r: 2 },
  ]

  // Pre-defined connections (sparse, clean)
  const links = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [5, 6], [6, 7], [7, 8], [8, 9],
    [1, 5], [2, 6], [3, 7], [4, 8],
  ]

  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Lines */}
      {links.map(([a, b], i) => (
        <line
          key={`l${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      ))}
      {/* Nodes with soft glow */}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <circle cx={n.x} cy={n.y} r={n.r + 4} fill="currentColor" opacity="0.08" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="currentColor" opacity="0.55" />
        </g>
      ))}
    </svg>
  )
}
