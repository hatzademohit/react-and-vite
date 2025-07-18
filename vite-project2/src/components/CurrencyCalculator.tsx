import React, { useEffect, useState } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import InputBox from './Inputs/InputBox'

function CurrencyCalculator() {

    const [from, setFrom] = useState()
    const [to, setTo] = useState<number>()
    const [fromSelectValue, seFromSelectValue] = useState('usd')
    const [toSelectValue, setToSelectValue] = useState('inr')

    let currecyInfo = useCurrencyInfo(fromSelectValue)
    const options = Object.keys(currecyInfo)

    useEffect(() => {
        if (from && currecyInfo[toSelectValue]) {
            converCurrency()
        }
        seFromSelectValue( (prev) => prev);
        setToSelectValue( (prev) => prev);
    }, [from, currecyInfo, toSelectValue])
    
    const converCurrency = () => {
        const rate = currecyInfo[toSelectValue]
        if (!rate || !from) return;
        setTo(Number(from) * rate)
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            converCurrency();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                inputValue={from}
                                inputOnchange={ (value) => setFrom(value) }
                                selectValue={fromSelectValue}
                                selectOnChange={ (value) => seFromSelectValue(value) }
                                selectOption={options}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer"
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                inputValue={to}
                                inputOnchange={ (value) => setTo(value) }
                                selectValue={toSelectValue}
                                selectOnChange={ (value) => setToSelectValue(value) }
                                selectOption={options}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CurrencyCalculator
