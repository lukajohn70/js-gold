import { useEffect, useRef } from 'react'

export default function NetworkVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    if (!ctx) return

    const W = 520
    const H = 520
    canvas.width = W
    canvas.height = H

    // Node definitions using color keys
    const nodes = [
      { x: 260, y: 200, r: 6, colorKey: 'GOLD', label: 'CORE' },
      { x: 140, y: 130, r: 4, colorKey: 'CYAN', label: 'NET' },
      { x: 380, y: 130, r: 4, colorKey: 'CYAN', label: 'APP' },
      { x: 100, y: 280, r: 3.5, colorKey: 'GOLD_DIM', label: 'AV' },
      { x: 420, y: 280, r: 3.5, colorKey: 'GOLD_DIM', label: 'CDN' },
      { x: 190, y: 360, r: 3, colorKey: 'WHITE_DIM', label: '' },
      { x: 330, y: 360, r: 3, colorKey: 'WHITE_DIM', label: '' },
      { x: 260, y: 420, r: 2.5, colorKey: 'GOLD_DIM', label: '' },
      { x: 60, y: 190, r: 2.5, colorKey: 'CYAN_DIM', label: '' },
      { x: 460, y: 190, r: 2.5, colorKey: 'CYAN_DIM', label: '' },
      { x: 170, y: 60, r: 2, colorKey: 'WHITE_DIM', label: '' },
      { x: 350, y: 60, r: 2, colorKey: 'WHITE_DIM', label: '' },
    ]

    const edges = [
      [0, 1], [0, 2], [0, 3], [0, 4], [1, 2],
      [1, 3], [2, 4], [3, 5], [4, 6], [5, 6],
      [5, 7], [6, 7], [1, 8], [2, 9], [1, 10], [2, 11],
    ]

    // Camera lens circles
    const lenses = [
      { cx: 80, cy: 380, r: 42 },
      { cx: 440, cy: 400, r: 32 },
    ]

    // Audio wave params
    const waveY = 460

    function drawFrame(t: number) {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light'
      const GOLD = isLight ? '#B8941E' : '#D4AF37'
      const GOLD_DIM = isLight ? 'rgba(184,148,30,0.28)' : 'rgba(212,175,55,0.25)'
      const CYAN = isLight ? 'rgba(30,120,220,0.75)' : 'rgba(80,200,255,0.6)'
      const CYAN_DIM = isLight ? 'rgba(30,120,220,0.25)' : 'rgba(80,200,255,0.15)'
      const WHITE_DIM = isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)'

      const colorsMap: Record<string, string> = {
        GOLD,
        GOLD_DIM,
        CYAN,
        CYAN_DIM,
        WHITE_DIM
      }

      ctx.clearRect(0, 0, W, H)

      // Background subtle glow
      const bg = ctx.createRadialGradient(260, 220, 0, 260, 220, 280)
      bg.addColorStop(0, isLight ? 'rgba(184,148,30,0.06)' : 'rgba(212,175,55,0.04)')
      bg.addColorStop(1, 'transparent')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      // Edges with dash flow
      edges.forEach(([a, b]) => {
        const n1 = nodes[a]
        const n2 = nodes[b]
        const pulse = 0.4 + 0.3 * Math.sin(t * 0.8 + a * 0.9)
        ctx.save()
        ctx.strokeStyle = isLight ? `rgba(184,148,30,${pulse * 0.4})` : `rgba(212,175,55,${pulse * 0.35})`
        ctx.lineWidth = 0.8
        ctx.setLineDash([4, 6])
        ctx.lineDashOffset = -t * 12
        ctx.beginPath()
        ctx.moveTo(n1.x, n1.y)
        ctx.lineTo(n2.x, n2.y)
        ctx.stroke()
        ctx.restore()
      })

      // Glow edges (solid, dimmer)
      edges.slice(0, 6).forEach(([a, b]) => {
        const n1 = nodes[a]
        const n2 = nodes[b]
        ctx.save()
        ctx.strokeStyle = isLight ? 'rgba(184,148,30,0.16)' : 'rgba(212,175,55,0.12)'
        ctx.lineWidth = 3
        ctx.filter = 'blur(2px)'
        ctx.beginPath()
        ctx.moveTo(n1.x, n1.y)
        ctx.lineTo(n2.x, n2.y)
        ctx.stroke()
        ctx.restore()
      })

      // Camera lenses
      lenses.forEach((lens, i) => {
        const drift = Math.sin(t * 0.4 + i * 1.5) * 3
        ctx.save()
        ctx.translate(0, drift)

        // Outer ring
        ctx.beginPath()
        ctx.arc(lens.cx, lens.cy, lens.r, 0, Math.PI * 2)
        ctx.strokeStyle = isLight ? 'rgba(30,120,220,0.5)' : 'rgba(80,200,255,0.4)'
        ctx.lineWidth = 1
        ctx.stroke()

        // Inner rings
        for (let j = 1; j <= 3; j++) {
          ctx.beginPath()
          ctx.arc(lens.cx, lens.cy, lens.r * (0.7 - j * 0.18), 0, Math.PI * 2)
          ctx.strokeStyle = isLight ? `rgba(30,120,220,${0.25 - j * 0.05})` : `rgba(80,200,255,${0.2 - j * 0.04})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }

        // Center dot
        ctx.beginPath()
        ctx.arc(lens.cx, lens.cy, 3, 0, Math.PI * 2)
        ctx.fillStyle = isLight ? 'rgba(30,120,220,0.85)' : 'rgba(80,200,255,0.8)'
        ctx.fill()

        // Lens glare
        ctx.save()
        ctx.filter = 'blur(4px)'
        ctx.beginPath()
        ctx.arc(lens.cx, lens.cy, lens.r, 0, Math.PI * 2)
        ctx.strokeStyle = isLight ? 'rgba(30,120,220,0.22)' : 'rgba(80,200,255,0.2)'
        ctx.lineWidth = 4
        ctx.stroke()
        ctx.restore()

        ctx.restore()
      })

      // Audio waveform
      ctx.save()
      ctx.strokeStyle = isLight ? 'rgba(184,148,30,0.65)' : 'rgba(212,175,55,0.5)'
      ctx.lineWidth = 1.5
      ctx.shadowColor = isLight ? 'rgba(184,148,30,0.3)' : 'rgba(212,175,55,0.4)'
      ctx.shadowBlur = 4
      ctx.beginPath()
      for (let x = 40; x <= 480; x += 2) {
        const freq1 = Math.sin((x - t * 30) * 0.04) * 14
        const freq2 = Math.sin((x - t * 20) * 0.09) * 7
        const freq3 = Math.sin((x + t * 15) * 0.02) * 5
        const envelope = Math.sin(((x - 40) / 440) * Math.PI)
        const y = waveY + (freq1 + freq2 + freq3) * envelope
        if (x === 40) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Second wave (cyan)
      ctx.strokeStyle = isLight ? 'rgba(30,120,220,0.4)' : 'rgba(80,200,255,0.3)'
      ctx.lineWidth = 1
      ctx.shadowColor = isLight ? 'rgba(30,120,220,0.2)' : 'rgba(80,200,255,0.3)'
      ctx.beginPath()
      for (let x = 40; x <= 480; x += 2) {
        const freq1 = Math.sin((x - t * 25) * 0.05) * 10
        const freq2 = Math.sin((x + t * 18) * 0.08) * 5
        const envelope = Math.sin(((x - 40) / 440) * Math.PI)
        const y = waveY + 14 + (freq1 + freq2) * envelope
        if (x === 40) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.restore()

      // Nodes
      nodes.forEach((node, i) => {
        const pulse = 0.7 + 0.3 * Math.sin(t * 1.2 + i * 0.7)
        const drift = Math.sin(t * 0.5 + i * 1.1) * 2
        const floatY = node.y + drift
        const color = colorsMap[node.colorKey]

        // Glow
        ctx.save()
        ctx.filter = 'blur(6px)'
        ctx.beginPath()
        ctx.arc(node.x, floatY, node.r * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = node.colorKey.includes('GOLD') 
          ? (isLight ? `rgba(184,148,30,${pulse * 0.45})` : `rgba(212,175,55,${pulse * 0.4})`)
          : (isLight ? `rgba(30,120,220,${pulse * 0.35})` : `rgba(80,200,255,${pulse * 0.3})`)
        ctx.fill()
        ctx.restore()

        // Core dot
        ctx.beginPath()
        ctx.arc(node.x, floatY, node.r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        // Ring on main nodes
        if (i < 5) {
          ctx.beginPath()
          ctx.arc(node.x, floatY, node.r + 4, 0, Math.PI * 2)
          ctx.strokeStyle = node.colorKey.includes('GOLD')
            ? (isLight ? `rgba(184,148,30,${pulse * 0.45})` : `rgba(212,175,55,${pulse * 0.4})`)
            : (isLight ? `rgba(30,120,220,${pulse * 0.4})` : `rgba(80,200,255,${pulse * 0.35})`)
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      })

      // Geometric hex overlay (background)
      ctx.save()
      ctx.strokeStyle = isLight ? 'rgba(184,148,30,0.09)' : 'rgba(212,175,55,0.06)'
      ctx.lineWidth = 1
      const hx = 260, hy = 200, hr = 120
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        const x = hx + hr * Math.cos(angle)
        const y = hy + hr * Math.sin(angle)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.stroke()
      ctx.restore()
    }

    function loop() {
      timeRef.current += 0.016
      drawFrame(timeRef.current)
      frameRef.current = requestAnimationFrame(loop)
    }

    loop()
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      {/* Outer glow frame */}
      <div
        style={{
          position: 'absolute',
          inset: -20,
          borderRadius: 24,
          background: 'radial-gradient(ellipse 70% 70% at 50% 45%, rgba(212,175,55,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(212,175,55,0.15)',
          background: 'rgba(255,255,255,0.02)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 60px rgba(212,175,55,0.06), inset 0 0 40px rgba(212,175,55,0.02)',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ display: 'block', width: '100%', maxWidth: 520, height: 'auto' }}
        />
      </div>
    </div>
  )
}
