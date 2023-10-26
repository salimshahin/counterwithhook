import React, { useEffect, useState } from "react";

const CounterHook = ()=>{

        const[count, setcounter] = useState("0")
        const[effectcount, setEffectcount] = useState(true)


        const handleIncrement = () => {
              setcounter(count + 1)
        }
        
       const handleDecrement = ()=>{
        setcounter (count - 1)
       }

       const handleReset = ()=>{
        setcounter(0)
       }

      
    
           useEffect( ()=>{

            setTimeout(() => {
                setEffectcount(false)
                
                // alert("After5 sec remove")
            }, 5000);
            
            
            return (()=>{
                alert("Removed from!!")
            })
             },[])
    


        
        return(
    <>
    
        <section className="flex flex-col text-center h-screen">
            <h2 className="text-6xl text-center py-8">counter</h2>
            <h3 className="text-5xl  text-center py -5">{count}</h3>

            <div className="flex flex-wrap gap-6 justify-center items-center p-6">
                <button className="text-2xl py-2 px-9 bg-emerald-600 text-white font-semibold hover:bg-emerald-400 w-50" onClick={handleIncrement}>Increment</button>
                <button className="text-2xl py-2 px-9 bg-emerald-600 text-white font-semibold hover:bg-emerald-400 w-50" onClick={effectcount}>Use Effect</button>
                <button className="text-2xl bg-red-400 py-2 px-9 text-white font-semibold hover:bg-red-300" onClick={handleDecrement}>Decrement</button>
                <button className="text-2xl bg-gray-400 py-2 px-9 text-white" onClick={handleReset}>Reset</button>
            </div>
        </section>
    </>
)

}


export { CounterHook}