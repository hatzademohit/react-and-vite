interface InputBoxProps {
    label: string;
    className?: string;
    inputValue?: any;
    inputOnchange?: (e) => void;
    selectValue?: any;
    selectOnChange?: (e) => void;
    selectOption?: any;
}

const InputBox:React.FC<InputBoxProps> = ({
    label,
    className,
    inputValue,
    inputOnchange,
    selectValue,
    selectOnChange,
    selectOption=['INR']
}) => {

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block" htmlFor="currency-convert-input">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-2 border border-gray-200 px-2 rounded-md"
                    placeholder="Amount"
                    value={inputValue || ""}
                    onChange={ (e) => inputOnchange && inputOnchange(Number(e.target.value)) }
                    name="currency-convert-input"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectValue}
                    onChange={ (e) => selectOnChange && selectOnChange(e.target.value) }
                    name="currency-convert-select"
                >
                   {
                    selectOption && selectOption.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))
                   }
                </select>
            </div>
        </div>
    );
}

export default InputBox;