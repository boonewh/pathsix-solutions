'use client'

import { useRef, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'

type VideoSource = { src: string; type: string; media?: string }

type HeroMediaProps = {
  /** Still frame from the video. Always rendered, so it is the fallback whenever the video can't play. */
  poster: string
  posterAlt: string
  /** Leave empty until the hero video is produced; the poster image is shown on its own. */
  sources?: VideoSource[]
  className?: string
}

type NetworkInformation = { saveData?: boolean }

const noSubscription = () => () => undefined

/** True when the visitor hasn't asked for reduced motion or reduced data. Always false on the server. */
function prefersFullMotion() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection
  return !reducedMotion && !connection?.saveData
}

/**
 * Hero background: a muted, looping video over its own poster image.
 * The video is skipped for reduced-motion and data-saver visitors, and only
 * fades in once it is actually playing, so a slow or failed load never shows a blank box.
 */
export default function HeroMedia({ poster, posterAlt, sources = [], className = '' }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fullMotion = useSyncExternalStore(noSubscription, prefersFullMotion, () => false)
  const [failed, setFailed] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const allowVideo = sources.length > 0 && fullMotion && !failed

  function togglePlayback() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => undefined)
      setPaused(false)
    } else {
      video.pause()
      setPaused(true)
    }
  }

  return (
    <div className={'relative overflow-hidden ' + className}>
      <Image src={poster} alt={posterAlt} fill priority sizes="100vw" className="site-hero-media object-cover" />
      {allowVideo && (
        <video
          ref={videoRef}
          className={'site-hero-media absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ' + (playing ? 'opacity-100' : 'opacity-0')}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
        >
          {sources.map((source, index) => (
            <source key={source.src} src={source.src} type={source.type} media={source.media} onError={index === sources.length - 1 ? () => setFailed(true) : undefined} />
          ))}
        </video>
      )}
      {allowVideo && playing && (
        <button type="button" onClick={togglePlayback} className="site-video-toggle" aria-label={paused ? 'Play background video' : 'Pause background video'}>
          {paused ? (
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" fill="currentColor" /></svg>
          ) : (
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor" /></svg>
          )}
        </button>
      )}
    </div>
  )
}
