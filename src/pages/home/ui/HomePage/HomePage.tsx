import { Link } from 'react-router'
import { ROUTES } from '../../../../shared'

export const HomePage = () => {
  return <div>
    <p>Home Page with FSD</p>
    <Link to={ROUTES.profile.index}>Profile</Link>
  </div>
}
