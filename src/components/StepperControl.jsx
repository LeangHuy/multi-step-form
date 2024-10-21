import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
    return (
        <div className='container flex justify-end gap-4 px-8 -mt-10 mb-8'>
            {/* back button */}
            <button
                onClick={() => handleClick()}
                className={`'bg-white text-slate-400 capitalize py-2 px-8 rounded-lg font-semibold cursor-pointer border-2 border-slate-300
        hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                {currentStep === steps.length - 3 ? "cancel" : "back"}
            </button>
            {/* next button */}
            <button
                onClick={() => handleClick("next")}
                className='bg-green-500 text-white capitalize py-2 px-8 rounded-lg font-semibold cursor-pointer
        hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
                {currentStep === steps.length ? "Finish" : "Next"}
            </button>
        </div>
    )
}

export default StepperControl
