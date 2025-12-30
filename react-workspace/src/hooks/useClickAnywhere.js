import { useEffect } from 'react'

export default function useClickAnywhere(handler) {

  useEffect(() => {
    window.addEventListener('click', handler)

    return () => {
      window.removeEventListener('click', handler)
    }
  }, [])
}