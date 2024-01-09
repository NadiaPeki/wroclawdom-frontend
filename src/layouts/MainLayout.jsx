import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />

    </>
  )
}

export default MainLayout