import { NavLink } from 'react-router-dom';

export interface MenuItemProps {
    name: string;
    to: string;
    activeIcon: string;
    passiveIcon: string;
}

export function MenuItem(props: MenuItemProps) {
    return (
        <NavLink className='menu-item-link' to={props.to} >
            {({ isActive }) => (
                <div className="menu-item">
                    <img src={isActive ? props.activeIcon : props.passiveIcon} />
                    <div className="menu-item-name">{props.name}</div>
                </div>
            )}
        </NavLink>

    );
}