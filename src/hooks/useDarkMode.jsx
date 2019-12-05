import { useLocalStorage } from './useLocalStorage'
import {useEffect } from 'react'

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue) 
  
    useEffect(() => {
      {value === true ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')}
  }, [value])


    return [value, setValue]
  
}