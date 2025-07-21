import { Header, Footer} from './Components'
import { Outlet } from 'react-router'

const Layout = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout