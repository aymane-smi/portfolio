import { ReactNode } from "react";

export type commands_type = {
    output: string,
    color?: string,
    links?: string[],
    command?: string,
}
export type commands_obj = {
    whoami: commands_type,
    about: commands_type,
    help: commands_type,
    linkedin: commands_type,
    email: commands_type,
    "show-projects": commands_type,
    github: commands_type,
};


export type TerminalProviderType = {
    children: ReactNode,
}

export type command_error = {
    output_error:string,
    command: string,
}

export type ContextType = {
    setCommand: React.Dispatch<React.SetStateAction<(commands_type | command_error)[]>>,
    command: (commands_type | command_error)[],
    commands: commands_obj, 
};