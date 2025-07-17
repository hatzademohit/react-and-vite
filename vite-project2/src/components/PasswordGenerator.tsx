import React, { useCallback, useEffect, useState, useRef } from 'react'

function PasswordGenerator() {
    const [length, setLength] = useState<any>(8)
    const [numberAllowed, setNumberAllowed] = useState<boolean>(false)
    const [charAllowed, setCharAllowed] = useState<boolean>(false)
    const [password, setPassword] = useState<string>()
    const passwordRef = useRef<any>(null)

    const passwordGen = useCallback( () => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (numberAllowed) str += '01234567890';
        if (charAllowed) str += '!@#$%^&*()_+-={}[]:;<>?,./\|';
        
        for (let i = 0; i < length; i++) {
           let char  = Math.floor(Math.random() * str.length + 1)
           pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numberAllowed, charAllowed, setPassword])

    const copyClipboard = () => {
        passwordRef.current?.select();
        window?.navigator?.clipboard?.writeText(password || '')
    }

    useEffect(() =>{
        passwordGen()
    }, [length, numberAllowed, charAllowed])

  return (
    <div className='py-2 px-4 bg-purple-400 rounded-md m-auto'>
      <h3 className='text-white text-2xl text-center'>Password Generator</h3>
      <div className='flex my-2 w-100'>
        <input 
            type='text'
            className='px-2 py-2 bg-white text-blue-950 w-full max-w-2xl rounded-tl-sm rounded-bl-sm outline-0'
            id='password'
            value={password}
            ref={passwordRef}
        />
        <button onClick={copyClipboard} className='bg-amber-400 px-2 rounded-tr-sm rounded-br-sm cursor-pointer text-white'>Click</button>
      </div>
      <div className='flex gap-1'>
        <input 
            type="range" min={6} max={100} id="range-selector"
            value={length}
            onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor='range-selector'>Length: {length}</label>
        <input 
            type="checkbox" id="char"
            checked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)}
        />
        <label htmlFor='char'>characters</label>
        <input type="checkbox" id="number"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
        />
        <label htmlFor='number'>Numbers</label>
      </div>
    </div>
  )
}

export default PasswordGenerator
