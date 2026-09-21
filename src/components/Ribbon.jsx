import { Fragment } from 'react'
import { ribbonWords } from '../data/site.js'

/* Words and dots stay siblings so the `:nth-child(even)` colour alternation
   in styles/sections.css keeps working. */
const Group = () => (
  <div className="ribbon__group">
    {ribbonWords.map((word) => (
      <Fragment key={word}>
        <span>{word}</span>
        <i className="dot" />
      </Fragment>
    ))}
  </div>
)

/** The scrolling brand marquee between the hero and the page body. */
export default function Ribbon() {
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon__track">
        <Group />
        <Group />
      </div>
    </div>
  )
}
