import { Outlet } from 'react-router';
import { Footer } from '../../shared';
import { Icon } from '../../assets/Icon/Icon';

export const Layout = () => {
  return <div>
      <header>Header</header>
      <main><Outlet /></main>
      <Icon.Check />
      <Footer />
    </div>
}