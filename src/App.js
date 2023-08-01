import "./App.css";
import {useState} from 'react'

function App() {

  // using useState hook to update the changes on the UI

  // initialize count to 0
  const [count, setCount] = useState(0);

  function decrementHandler() {
    setCount(count-1);
  }
  function incrementHandler() {
    setCount(count+1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="bg-slate-400 w-[100vw] h-[100vh] flex flex-col gap-14 items-center justify-center">
      <h1 className="text-4xl font-bold">
          Counter App
      </h1>
      <div className="bg-slate-100 flex items-center justify-center gap-20 py-2 text-5xl rounded-md shadow-xl">      
          <button onClick={decrementHandler} className="border-r-2 border-r-stone-300 px-9 mx-auto cursor-pointer">-</button>
          <div className='text-4xl'>{count}</div>
          <button onClick={incrementHandler}  className="border-l-2 border-l-stone-300 px-8 cursor-pointer ">+</button>       
      </div>
      <button onClick={resetHandler} className='text-2xl px-7 py-2 mt-[-15px] rounded-md bg-[#4287f5] shadow-md hover:shadow-lg  text-white'>Reset</button>
    </div>
  );
}

export default App;
