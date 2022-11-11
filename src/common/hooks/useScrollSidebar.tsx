import { useEffect } from 'react'
import { innerDimensions } from '../utils/global'

const useScrollSidebar = ({
  fromTop = 0,
  stickyContainer = 'sticky-container',
  stickyElement = 'sticky-element',
}) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('load', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('load', handleScroll)
    }
  }, [stickyContainer, fromTop, stickyElement])

  const handleScroll = () => {
    const aside = document.getElementById(stickyElement) as HTMLElement | null
    const asideHeight: number = aside.getBoundingClientRect().height

    if (window.innerHeight < asideHeight) {
      window.onscroll = function () {
        if (window.scrollY < this.prevScrollY) {
          // Track position state of nav
          // 1 == stuck to top
          // 0 == absolute positioning
          // -1 == stuck to bottom

          this.stickPos = scrollUpwards(this.stickPos)
        } else {
          this.stickPos = scrollDownwards(this.stickPos)
        }
        this.prevScrollY = window.scrollY
      }
    } else {
      aside.style.position = 'sticky'
      aside.style.top = `${fromTop}px`
    }
  }

  const resetToNeutroState = () => {
    const aside = document.getElementById(stickyElement) as HTMLElement | null
    const stickyContent = document.getElementsByClassName(stickyContainer)[0] as HTMLElement | null
    const stickyContentWidth: number = stickyContent && innerDimensions(stickyContent).width

    aside.style.position = 'absolute'
    aside.style.top = '0px'
    aside.style.bottom = ''
    aside.style.width = `${stickyContentWidth}px`

    return 0
  }

  const scrollUpwards = (stickPos) => {
    const aside = document.getElementById(stickyElement) as HTMLElement | null
    const stickyContent = document.getElementsByClassName(stickyContainer)[0] as HTMLElement | null
    const scrollToTop = aside.getBoundingClientRect().top

    // if we are back on top reset state to neutro (0)
    if (scrollToTop > fromTop) return resetToNeutroState()

    // If the element is already stuck to the top then we are fine
    if (stickPos === 1) return stickPos

    const stickyContentWidth = stickyContent && innerDimensions(stickyContent).width
    const aboveAside = scrollToTop > 0

    // If we are going above the element then we know we must stick
    // it to the top
    if (aboveAside) {
      aside.style.position = 'sticky'
      aside.style.top = `${fromTop}px`
      aside.style.bottom = ''
      aside.style.width = `${stickyContentWidth}px`

      return 1
    }
    // If it will still be below the top of the element, then we
    // must absolutely position it to its current position - if it already is absolutely positioned then we do nothing
    if (stickPos == 0) return stickPos

    const asideOffsetTop = aside.offsetTop

    // Undo the stick to the bottom
    // First get the current position

    aside.style.position = 'absolute'
    aside.style.top = `${asideOffsetTop}px`
    aside.style.bottom = ''
    aside.style.width = `${stickyContentWidth}px`

    return 0
  }

  const scrollDownwards = (stickPos) => {
    // If the element is already stuck to the bottom then we are fine
    // Figure out where the new window will be after scroll
    const aside = document.getElementById(stickyElement) as HTMLElement | null
    const scrollToTop = aside.getBoundingClientRect().top

    if (stickPos === -1) return stickPos

    const browserBottom = window.innerHeight
    const asideBottom = scrollToTop + aside.offsetHeight
    const stickyContent = document.getElementsByClassName(stickyContainer)[0]
    const stickyContentWidth = stickyContent && innerDimensions(stickyContent).width
    const belowAside = browserBottom > asideBottom

    // If we are going below the element then we know we must stick

    // it to the bottom.
    if (belowAside) {
      aside.style.position = 'sticky'
      aside.style.top = `-${aside.offsetTop}px`
      aside.style.bottom = ''
      aside.style.width = `${stickyContentWidth}px`

      return -1
    }
    // If it will still be above the bottom of the element, then we
    // must absolutely position it to its current position - if it already is absolutely positioned then we do nothing
    if (stickPos == 0) return 0

    // // Undo the stick to the top
    // // First get the current position

    aside.style.position = 'absolute'
    aside.style.top = `${aside.offsetTop}px`
    aside.style.bottom = ''
    aside.style.width = `${stickyContentWidth}px`

    return 0
  }
}
export default useScrollSidebar
