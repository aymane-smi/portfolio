import { FC, useEffect, useRef } from "react";

export const Init:FC = ()=>{
    const art = useRef<HTMLPreElement>(null);
    useEffect(()=>{
        art.current.innerText = `    
     #                                         ######                                                     
    # #   #   # #    #   ##   #    # ######    #     # ###### #        ##    ####   ####  # #####    ##   
   #   #   # #  ##  ##  #  #  ##   # #         #     # #      #       #  #  #      #      # #    #  #  #  
  #     #   #   # ## # #    # # #  # #####     ######  #####  #      #    #  ####   ####  # #    # #    # 
  #######   #   #    # ###### #  # # #         #     # #      #      ######      #      # # #####  ###### 
  #     #   #   #    # #    # #   ## #         #     # #      #      #    # #    # #    # # #   #  #    # 
  #     #   #   #    # #    # #    # ######    ######  ###### ###### #    #  ####   ####  # #    # #    # 
                                                                                                          `;
    }, []);
    return <section className="pl-5">
        <pre ref={art} className="text-white xs:text-[4px] sm:text-[6px] md:text-[8px] lg:text-[10px]" />
        <p className="text-white">Welcome to my personal portfolio !!!</p>
        <p className="bg-orange-200 max-w-max text-gray-700 mt-1">[i] use "help" command for more info .</p>
    </section>;
};