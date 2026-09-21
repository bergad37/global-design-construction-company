import { useEffect, useRef } from 'react'

/** setInterval that always calls the latest callback; `delay: null` pauses it. */
export function useInterval(callback, delay) {
  const saved = useRef(callback)
  useEffect(() => { saved.current = callback }, [callback])

  useEffect(() => {
    if (delay === null || delay === undefined) return
    const id = setInterval(() => saved.current(), delay)
    return () => clearInterval(id)
  }, [delay])
}
