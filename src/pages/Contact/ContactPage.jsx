import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import JerukwudelLogo from "../../assets/image/jerukwudel.png";

const ContactPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="mt-16 flex flex-col items-center w-full">
                <div className="flex items-stretch max-w-4xl w-full px-8">
                    <div className="mb-10 self-center">
                        <img src={JerukwudelLogo} alt="" />
                    </div>
                    <div className="mb-10 ml-10 text-justify">
                        <h1 className="font-bold text-3xl">Hubungi kami</h1>
                        <hr className="border-t-2 border-black mb-4" />
                        <p className="text-black">
                            Iduk Sudiyanto (Pak Dukuh Karanggede B) : (0813-2825-4354)<br />
                            Adin (KIM Karanggede B) : (0852-2858-5735)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
