import { FC, useContext, useEffect, useRef } from "react";
import { TerminalContext } from "../../context/terminal.context";
import { commands_type } from "../../utils/types";
import { Init } from "../Init";

export const Outputs:FC = () => {
    const { command, setCommand } = useContext(TerminalContext);
    const context = useRef(null);
    useEffect(()=>{
        setCommand([{command:"init", output: "Welcome to my portfolio\n\tuse 'help' to see all available commands.\n"}]);
    }, []);
    return (<div>
        {command && command.map((obj, i)=>{
            {console.log(obj)}
            if(obj.command === "init")
                return <Init key={i}/>;
            else
                return (<section key={i}>
                <p className="font-dejavu text-[#64e986] font-extrabold font-12 absolute">
                    aymane@aymane
                    <span className="text-white">:</span>
                    <span className="text-blue-400">
                        ~/portfolio
                        <span className="text-white">     {obj.command}</span>
                    </span>
                </p>
                <br />
                {("output_error" in obj) ? <p className="text-white">
                    {obj.output_error}
                </p> : <>
                    <div>
                        {obj.output.split("\n").map((str, i)=><p key={i}  className={`text-white ${ (i !== 0) && "ml-5"}`} >{str}</p>)}
                    </div>
                    
                    {("links" in obj) && obj.links.map((link, i)=>{
                        if(i === 0 && (obj.command === "show-projects"))
                            return <>
                                <p className="text-white">Bitcoin using Nodejs</p>
                                <a key={i} className="text-black max-w-max bg-gray-700 block mt-2" href={link.includes("@") ? "mailto:"+link : link}>
                                    {link}
                                </a>
                            </>
                        else if(i === 1 && (obj.command === "show-projects"))
                        return <>
                            <p className="text-white">uniswap clone</p>
                            <a key={i} className="text-black max-w-max bg-gray-700 block mt-2" href={link.includes("@") ? "mailto:"+link : link}>
                                {link}
                            </a>
                        </>
                        else if(i === 2 && (obj.command === "show-projects"))
                        return <>
                            <p className="text-white">Search engine(9aleb)</p>
                            <a key={i} className="text-black max-w-max bg-gray-700 block mt-2" href={link.includes("@") ? "mailto:"+link : link}>
                                {link}
                            </a>
                        </>
                        else if(i === 3 && (obj.command === "show-projects"))
                        return <>
                            <p className="text-white">Meals to Go</p>
                            <a key={i} className="text-black max-w-max bg-gray-700 block mt-2" href={link.includes("@") ? "mailto:"+link : link}>
                                {link}
                            </a>
                            <p className="text-white">
                                for more project check my github @aymane-smi💡
                            </p>
                        </>
                        else
                            return <a key={i} className="text-black max-w-max bg-gray-700 block mt-2" href={link.includes("@") ? "mailto:"+link : link}>
                            {link}
                        </a>
                    })}
                </>}
              </section>);
        })}
    </div>);
};