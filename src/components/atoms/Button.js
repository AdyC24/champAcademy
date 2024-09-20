import React from "react";

function Button({text}) {
    return(
        <button className="my-8 bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 hover:scale-105 transition duration-300 ease-in-out">
    {text}
</button>

    )
}

export default Button