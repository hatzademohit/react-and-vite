import { Header, Footer} from './Components'
import { Outlet } from 'react-router'
import { ThemeProvider  } from './Context/ThemeContext.js'
import { useEffect, useState } from 'react'

const Layout = () => {

    const [themeMode, setThemeMode] = useState<any>('light')

    const darkMode = () => {
        setThemeMode('dark')
    }

    const lightMode = () => {
        setThemeMode('light')
    }

    // useEffect(() => {
    //     document.querySelector('html')?.classList.remove("light", 'dark')
    //     document.querySelector('html')?.classList.add(themeMode)
    // }, [themeMode])

    return(
        <ThemeProvider value={{themeMode, darkMode, lightMode}}>
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>
    )
}

export default Layout