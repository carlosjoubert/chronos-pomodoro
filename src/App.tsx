import './styles/theme.css'
import './styles/global.css'

import { Home } from './pages/Home';
import type { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';
import { TaskContextProvider } from './contexts/TaskContext';


const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        wokTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    }
}

export function App() {
    const [state, setState] = useState<TaskStateModel>(initialState);



    return (
        <TaskContextProvider>
            <Home />
        </TaskContextProvider>
    );
}
