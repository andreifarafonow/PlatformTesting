import { HistoryCard } from "./HistoryCard";
import { TestCard } from "./TestCard";

export function History() {
    return (
        <>
            <div className="page-name">
                Пройденные тесты
            </div>
            <div className="page-name-subtitle">
                Результаты выполненных работ
            </div>

            <div className="cards-grid-container">
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
            </div>
        </>
    );
}