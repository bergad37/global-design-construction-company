import { useInView } from '../hooks/useInView.js'

/**
 * Wraps children in the site's scroll-reveal. Mirrors the `[data-reveal]`
 * rules in styles/base.css: the element sits offset and transparent until it
 * enters the viewport, then settles.
 *
 *   variant: 'up' (default) | 'left' | 'right' | 'zoom'
 *   delay:   seconds, staggered by the parent if it maps over a list
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      data-reveal={variant === 'up' ? '' : variant}
      className={[className, inView ? 'is-in' : ''].filter(Boolean).join(' ')}
      style={{ '--d': `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
