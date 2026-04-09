import { useState, useEffect } from 'react'

/**
 * Animates a number from 0 to `end` when `isActive` becomes true.
 * Uses an ease-out cubic curve for a natural deceleration feel.
 */
export function useCountUp(end, { duration = 2200, isActive = false } = {}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive || end === 0) return

    let startTime = null
    let raf

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, isActive])

  return count
}
