"use client"
import { useEffect, useState } from "react"

const InfiniteTyping = () => {
  const text = "Desenvolvedor Full Stack"
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const speed = isDeleting ? 100 : 200 // mais rápido ao apagar
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(text.slice(0, index + 1))
        setIndex(index + 1)
        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1000) // pausa no final
        }
      } else {
        setDisplayed(text.slice(0, index - 1))
        setIndex(index - 1)
        if (index - 1 === 0) {
          setIsDeleting(false)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, index, isDeleting, text])

  return (
    <span className="text-xl font-mono">
      {displayed}
      <span className="blink">|</span>
    </span>
  )
}

export default InfiniteTyping
