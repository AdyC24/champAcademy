import React from "react";

function FeatureItem({title, description}) {
    return (
        <div className="max-w-sm text-center">
            <h3 className="text-2xl font-semibold text-blue-500">{title}</h3>
            <p className="text-gray-700 mt-2">{description}</p>
        </div>
    )
}

export default FeatureItem