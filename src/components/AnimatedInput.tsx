interface AnimatedInputProps {
    inputText: string;
    value: string;
    setValue: (value: string) => void;
}
const AnimatedInput = ({inputText, value, setValue}: AnimatedInputProps) => {
    return (
        
        <div className='w-40 h-12 relative'>
            <input
                className={`peer w-full h-full bg-transparent border rounded-lg outline-none px-2 focus:border focus:border-blue-500 transition-all duration-300 relative z-10`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <label className={`absolute bg-white text-gray-400 transition-all duration-300 peer-focus:text-blue-500
                ${value === '' ? 'top-3 left-2 peer-focus:scale-75 peer-focus:left-1 peer-focus:-top-3 peer-focus:z-10' 
                : 
                'left-1 -top-3 z-10 scale-75'
                }`
            }>
                    {inputText}
            </label>
        </div>
    )
}

export default AnimatedInput;