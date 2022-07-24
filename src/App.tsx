import React, { useContext } from 'react';
import './App.css';
import Input from './components/Input';
import { Outputs } from './components/Outputs';
import { TerminalContext } from './context/terminal.context';

function App() {
  const terminalContext = useContext(TerminalContext);
  console.log(terminalContext);
  return (
    <main className='w-[100vw] font-dejavu '>
      <Outputs />
      <section>
        <p className="font-dejavu text-[#64e986] font-extrabold font-12 absolute">
          aymane@aymane
          <span className="text-white">:</span>
          <span className="text-blue-400">~/portfolio</span>
          <span className='text-white'>$</span>
        </p>
        <Input />
      </section>
    </main>
  );
}

export default App;
