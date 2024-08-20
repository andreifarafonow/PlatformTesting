export interface TestCardProps {
    title: string;
    content: string;
    bottom: string;
    link: string;
}

export function TestCard(props: TestCardProps) {
    return (
        <div className="card test-card">
            <div className="card-top">
                <div className="card-icon-container">
                    <img className="card-icon" src="/img/test.svg" />
                </div>
                <div className="card-title">{props.title}</div>
            </div>

            <div className="card-content">
                {props.content}
            </div>

            <div className="card-bottom">
                {props.bottom}
            </div>

        </div>
    );
}