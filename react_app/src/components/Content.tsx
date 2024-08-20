import { Routes, Route } from 'react-router-dom';
import { Actual } from './Actual';
import { History } from './History';
import { Notifications } from './Notifications';
import { Profile } from './Profile';

export function Content() {
    return (
        <div className="content">
            <Routes>
                <Route path="/actual-tests" element={<Actual />} />
                <Route path="/history-tests" element={<History />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}