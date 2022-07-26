import { useState } from 'react'
import { createContainer } from 'unstated-next'

const svgStyleContainer = createContainer(() => {
  const [isMenuLoading, setIsMenuLoading] = useState(false)
  return {
    isMenuLoading,
    setIsMenuLoading,
  }
})

export const SvgStyleProvider = svgStyleContainer.Provider
export const svgStyleState = svgStyleContainer.useContainer
