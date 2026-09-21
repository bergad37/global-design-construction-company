/**
 * Every inline SVG on the site, in one place. Stroke icons inherit
 * `currentColor`, so colour is set in CSS by whatever contains them.
 */

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const paths = {
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M5 12l7-7 7 7" />,
  chevronLeft: <path d="M15 5 8 12l7 7" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  home: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />,
  box: (
    <>
      <path d="M12 2 3 7v10l9 5 9-5V7z" />
      <path d="M12 22V12M3 7l9 5 9-5" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-5 3 3 5-7" />
    </>
  ),
  architecture: (
    <>
      <path d="M3 21h18M6 21V8l6-5 6 5v13" />
      <path d="M10 21v-5h4v5M9 11h.01M15 11h.01" />
    </>
  ),
  construction: (
    <>
      <path d="M2 20h20M4 20V9l8-5 8 5v11" />
      <path d="M9 20v-7h6v7M4 9h16" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 2v4M16 2v4M3 10h18M8 15h3M8 18h6" />
    </>
  ),
  plan: (
    <>
      <path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3z" />
      <path d="M9 3v15M15 6v15" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  play: <path d="M8 5v14l11-7z" />,
  pause: <path d="M9 5v14M15 5v14" />,
}

const filled = {
  facebook: (
    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.5-4.05 4.2v2.2H7.5V14h2.7v8z" />
  ),
  linkedin: (
    <path d="M6.9 21H3.6V9.4h3.3zM5.25 8A1.9 1.9 0 1 1 5.25 4.2 1.9 1.9 0 0 1 5.25 8M21 21h-3.3v-5.6c0-1.35-.03-3.1-1.9-3.1s-2.2 1.48-2.2 3v5.7h-3.3V9.4h3.17v1.6h.04a3.5 3.5 0 0 1 3.13-1.72c3.34 0 3.96 2.2 3.96 5.06z" />
  ),
}

export default function Icon({ name, size, strokeWidth, className, ...rest }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true" {...STROKE} {...rest}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (filled[name]) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true" {...rest}>
        {filled[name]}
      </svg>
    )
  }

  const body = paths[name]
  if (!body) return null

  const isSolid = name === 'play'

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      {...STROKE}
      {...(isSolid ? { fill: 'currentColor', stroke: 'none' } : {})}
      {...(strokeWidth ? { strokeWidth } : {})}
      {...rest}
    >
      {body}
    </svg>
  )
}
