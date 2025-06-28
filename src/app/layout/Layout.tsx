import { Outlet } from 'react-router';

export const Layout = () => {
  return <div>
      <header>Header</header>
      <main><Outlet /></main>
      <footer>Footer</footer>
    </div>
}