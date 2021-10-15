import { useLocation } from 'react-router';

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/'}
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

export default Header