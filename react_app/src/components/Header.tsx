interface HeaderProps {
    profileName: string
}

export function Header(props: HeaderProps) {
    return (
        <div className="header">
            <div className="logo">
                <img src="/img/logo.svg" />
                <div className="logo-name">
                    Мой класс
                </div>
            </div>

            <div className="header-profile">
                <div className="header-profile-name">
                    {props.profileName}
                </div>
                <img src="/img/profile.svg" />

            </div>
        </div>
    );
}