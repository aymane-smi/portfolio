import { createContext, FC, useState } from "react"
import { commands } from "../assets/commands";
import { commands_type, command_error, ContextType, TerminalProviderType, } from "../utils/types";

export const TerminalContext = createContext<ContextType>(null);

export const TerminalProvider:FC<TerminalProviderType> = ({children})=>{
    const [ command, setCommand ] = useState<(commands_type | command_error)[] | null>(null);
    return <TerminalContext.Provider value={{command, setCommand, commands}}>
        {children}
    </TerminalContext.Provider>
};