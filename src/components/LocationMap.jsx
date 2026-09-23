import Reveal from './Reveal.jsx'
import { site } from '../data/site.js'

/**
 * The office on a map.
 *
 * OpenStreetMap's embed needs no API key and sets no tracking cookies, which
 * keeps the page free of a third-party consent problem. To move the pin, edit
 * `site.map` in src/data/site.js — nothing here is hardcoded.
 *
 * Just the frame: no caption bar under it. The address, phone and hours are
 * already listed in the rows directly above, and repeating the address beneath
 * the map only made the block taller for nothing.
 *
 * To use Google Maps instead, swap `src` for:
 *   `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`
 */
export default function LocationMap() {
  const { lat, lng, span, label } = site.map

  const bbox = [lng - span, lat - span / 2, lng + span, lat + span / 2].join(',')
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`

  return (
    <Reveal className="map">
      <div className="map__frame">
        <iframe
          src={src}
          title={`Map showing our office in ${label}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Reveal>
  )
}
