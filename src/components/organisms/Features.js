import React from "react";
import FeatureItem from "../molecules/FeatureItem";

function Feature() {
    return (
        <section className="bg-white py-16 px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center">Fitur Kami</h2>
            <div className="flex justify-around mt-12">
                <FeatureItem title="Quiz Interaktif" description="Seru-seruan dengan quiz mencerdaskan"/>
            </div>
        </section>
    )
}

export default Feature