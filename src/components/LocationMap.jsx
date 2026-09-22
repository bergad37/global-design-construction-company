import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import { site } from '../data/site.js'

/**
 * The office on a map.
 *
 * OpenStreetMap's embed needs no API key and sets no tracking cookies, which
 * keeps the page free of a third-party consent problem. To move the pin, edit
 * `site.map` in src/data/site.js — nothing here is hardcoded.
 *
 * To use Google Maps instead, swap `src` for:
 *   `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`
 */
export default function LocationMap() {
  const { lat, lng, span, label } = site.map

  const bbox = [lng - span, lat - span / 2, lng + span, lat + span / 2].join(',')
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`
  const full = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

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

      <div className="map__bar">
        <span className="map__where">
          <Icon name="pin" />
          <span>
            <b>{label}</b>
            <small>{site.contact.address}</small>
          </span>
        </span>

        <span className="map__links">
          <a href={directions} target="_blank" rel="noreferrer">
            Get directions
            <Icon name="arrowUpRight" strokeWidth={2.4} />
          </a>
          <a href={full} target="_blank" rel="noreferrer">
            Larger map
            <Icon name="arrowUpRight" strokeWidth={2.4} />
          </a>
        </span>
      </div>
    </Reveal>
  )
}
