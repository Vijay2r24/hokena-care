import { useEffect, useState } from "react"

export default function Typewriter({
  phrases = [
    "Heal with Confidence, Every Journey Guided",
    "World-Class Surgeries, Trusted in India",
    "Expert Clinicians, Seamless Recovery",
    "Precision Healthcare, Compassionate Care"
  ],
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseMs = 1800,
  as: Component = "span",
  className = "",
}) {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [subIdx, setSubIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentPhrase = phrases[phraseIdx] || ""

  useEffect(() => {
    if (!isDeleting && subIdx === currentPhrase.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseMs)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && subIdx === 0) {
      setIsDeleting(false)
      setPhraseIdx((prev) => (prev + 1) % phrases.length)
      return
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timeout = setTimeout(() => {
      setSubIdx((prev) => prev + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [subIdx, isDeleting, phraseIdx, phrases, pauseMs, typingSpeed, deletingSpeed, currentPhrase.length])

  const displayText = currentPhrase.substring(0, subIdx)

  const renderStyledText = (text) => {
    if (!text.includes(",")) {
      return <span>{text}</span>
    }
    const parts = text.split(",")
    return (
      <>
        <span>{parts[0]}, </span>
        <span className="bg-gradient-to-r from-[#ff6b00] via-[#ff8533] to-[#f44236] bg-clip-text text-transparent">
          {parts.slice(1).join(",").trimStart()}
        </span>
      </>
    )
  }

  return (
    <Component className={`inline-block min-h-[1.15em] ${className}`}>
      {renderStyledText(displayText)}
      <span className="inline-block w-[3px] h-[0.9em] ml-1 bg-[#ff6b00] animate-pulse align-middle" />
    </Component>
  )
}
