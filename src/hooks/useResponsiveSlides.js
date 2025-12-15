import { useState, useEffect } from 'react'

export function useResponsiveSlides() {
  const [imagesPerSlide, setImagesPerSlide] = useState(1)

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth
      if (width >= 1280) {
        setImagesPerSlide(4)
      } else if (width >= 1024) {
        setImagesPerSlide(3)
      } else if (width >= 640) {
        setImagesPerSlide(2)
      } else {
        setImagesPerSlide(1)
      }
    }

    updateSlides()
    window.addEventListener('resize', updateSlides)
    return () => window.removeEventListener('resize', updateSlides)
  }, [])

  return imagesPerSlide
}
