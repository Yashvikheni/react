import {useState,useEffect} from 'react'

const useDarkMode = () => {
    const [theme,setTheme] = useState('light')
  const setMode=(mode) => {
      localStorage.setItem('theme',mode);
      setTheme(mode);
  }
    const toggleTheme=({checked,setChecked}) => {
        theme==='dark'?setMode('light'): setMode('dark')
        checked===true?setChecked(false):setChecked(true)
    }
    useEffect(() => {
        const localTheme=localStorage.getItem('theme')
        localTheme?setTheme(localTheme):setMode('dark')
    },[])
  return [{theme,toggleTheme}]
}

export default useDarkMode