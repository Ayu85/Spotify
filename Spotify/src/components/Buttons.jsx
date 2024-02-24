import { VscDebugContinue } from "react-icons/vsc";

const Buttons = () => {
    return (
        <div className="bg-zinc-900 flex justify-center items-center gap-5 py-10">
            <button
                className='bg-yellow-400 flex items-center gap-2 px-7 py-5 text-black hover:scale-125
              transition-all cursor-pointer font-bold text-lg rounded-full '>
                Continue With Web<VscDebugContinue />
            </button>
            <button>Download App</button>
        </div>
    )
}
export default Buttons
