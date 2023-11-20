const TextInput = ({label,placeholder,type})=>{
    return(
        <div className="flex flex-col gap-2 w-1/2 mb-4">
            <label for={label} className="text-white font-semibold">{label}</label>
         <input type={type} placeholder={placeholder} className="py-3 px-3 w-full bg-stone-950 border outline-none border-stone-400 rounded text-white focus:border-stone-200 focus:border-4 transition duration-1000"  id={label}/>
         </div>
         )
}
export default TextInput