import React from "react";
import Button from "../atoms/Button";
import BannerImage from "../molecules/BannerImage";

function Banner() {
    return (
        <section className="flex justify-around items-center bg-blue-100 py-16 px-8">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold text-gray-900">
                    Selamat Datang di Platform Pembelajaran Terbaik!
                </h1>
                <p className="text-xl text-gray-700 mt-4">
                    Menyenangkan, interaktif, dan pengalaman yang seru untuk anak-anak semua usia.
                </p>
                <Button text="Start Learning" />
            </div>
            <BannerImage />
        </section>
    )
}

export default Banner;