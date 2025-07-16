import { useState } from "react";

const BgChanger = () => {
    const [color, setColor] = useState<string>('bg-gray-950');
    const buttons = [
        { text: 'Red', color: 'bg-red-500' },
        { text: 'Yellow', color: 'bg-yellow-400' },
        { text: 'Green', color: 'bg-green-500' },
        { text: 'Blue', color: 'bg-blue-500' },
        { text: 'Lime', color: 'bg-lime-700' },
        { text: 'Gray', color: 'bg-gray-500' },
        { text: 'Pink', color: 'bg-pink-400' },
        { text: 'Purple', color: 'bg-purple-500' },
        { text: 'Lavender', color: 'bg-purple-200' },
        { text: 'White', color: 'bg-white' },
        { text: 'Black', color: 'bg-black' }
    ]

    const colorChange = (color) => {
        setColor(color)
    }

    return(
        <>
            <div className={`w-full h-[calc(100vh-88px)] rounded inset-0 ${color} text-center content-center`}>
                red
                <div className="rounded-xl bg-yellow-100 inset-x-0 p-2 fixed bottom-0 gap-2 flex">
                    {
                        buttons && buttons.map((item) => (
                            <button key={item.text} className={`${item.color} text-white rounded-2xl px-5 py-2 cursor-pointer`} style={ item.color === 'bg-white' ? { color: '#000000' } :  {} } onClick={ () => colorChange(item.color) }>
                                { item.text }
                            </button>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BgChanger;