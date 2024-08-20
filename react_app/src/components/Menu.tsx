import { Link } from 'react-router-dom';
import { MenuItem, MenuItemProps } from './MenuItem';

let menuItems: MenuItemProps[] =
    [
        {
            name: 'Актуальные тесты',
            to: '/actual-tests',
            activeIcon: '/img/notebook_act.svg',
            passiveIcon: '/img/notebook.svg'
        },
        {
            name: 'Пройденные тесты',
            to: '/history-tests',
            activeIcon: '/img/clock_act.svg',
            passiveIcon: '/img/clock.svg'
        },
        {
            name: 'Уведомления',
            to: '/notifications',
            activeIcon: '/img/bell_act.svg',
            passiveIcon: '/img/bell.svg'
        },
        {
            name: 'Мой профиль',
            to: '/profile',
            activeIcon: '/img/person_act.svg',
            passiveIcon: '/img/person.svg'
        }
    ]


export function Menu() {
    return (
        <div className="menu">
            {
                menuItems.map((menuItem, index) =>
                    <MenuItem key={index} name={menuItem.name} to={menuItem.to} activeIcon={menuItem.activeIcon} passiveIcon={menuItem.passiveIcon} />
                )
            }
        </div>
    );
}