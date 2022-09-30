import { useCallback, useEffect, useRef } from "react"

export function isWindowScrolledToBottom(gap: number) {
  return window.innerHeight + window.scrollY >= document.body.scrollHeight-gap
}

export default function useScrollHelperBottom<T = number>(setActiveID: (v: T)=>void, bottomID: T, gap: number) {
  const handleScroll = useCallback(()=>{
    if ( isWindowScrolledToBottom(gap) ) {
      setActiveID(bottomID)
      return
    } else {
//      console.log("set by scroll", scrollPositionId.current, window.scrollY)
      if ( scrollPositionId.current ) {
        setActiveID(scrollPositionId.current)
      }
    }
  }, [bottomID])

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return ()=>window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  const scrollPositionId = useRef<T | undefined>()

  return  useCallback((id: T)=>{
//    console.log("set by set", id, window.scrollY)
    scrollPositionId.current = id
    if ( isWindowScrolledToBottom(gap) ) {
      setActiveID(bottomID)
      return
    }    
    setActiveID(id)
  }, [bottomID])
}