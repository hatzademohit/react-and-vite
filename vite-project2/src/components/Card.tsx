import React from "react";

interface cardProps{
    heading?: string;
    buttontext?: string;
}

const Card:React.FC<cardProps> = ({ heading='Card Heading', buttontext='Read More' }) => {
    return(
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
            <img
            src="https://plus.unsplash.com/premium_photo-1752497523819-eaf80e1fd32a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="random-img"
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{heading}</h2>
                <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
                soluta amet corporis accusantium aliquid consectetur eaque!
                </p>
            </div>
            <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200 cursor-pointer"
            >
                {buttontext}
            </button>
            </div>
        </div>
    )
}

export default Card;