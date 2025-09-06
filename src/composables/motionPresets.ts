export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0, transition: { duration: 400 } },
}

export const pop = {
  initial: { opacity: 0, scale: 0.95 },
  enter: { opacity: 1, scale: 1, transition: { duration: 250 } },
}

export const slideInLeft = {
  initial: { opacity: 0, x: -24 },
  enter: { opacity: 1, x: 0, transition: { duration: 400 } },
}

export const slideInRight = {
  initial: { opacity: 0, x: 24 },
  enter: { opacity: 1, x: 0, transition: { duration: 400 } },
}

export const routeFade = {
  initial: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0, transition: { duration: 250 } },
}

/**
 * Añade un delay progresivo según el índice → efecto "stagger"
 */
export const withStagger = (index: number, base = 80) => ({
  delay: index * base,
})
