import React, { createContext, useContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

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

type TaskContextProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>,
}

const initialContextValue = {
    state: initialState,
    setState: () => { },
};

export const TaskContext = createContext(initialContextValue);

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    return (<TaskContext.Provider value={initialContextValue}>
        {children}
    </TaskContext.Provider>
    );
}

export function useTaskContext(){
    return useContext(TaskContext);
}