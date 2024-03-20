'use client'
import WorkSection from "./work";
import ServicesSection from "./services";
import Faq from "./faq";
export default function HomePage(){
    return (
        <main>
            <div className=" h-screen py-10 flex justify-end items-center bg-[#e6e8f4] md:px-[100px] px-[20px]">
                <div className=" md:w/2 flex flex-col items-start justify-start">
                    <h1 className=" text-7xl">
                        Immersive Design <br/> & Creativity Studio
                    </h1>
                    <p className=" mt-3">EST.24</p>
                </div>
            </div>
            <div className="">
                <WorkSection/>
                <ServicesSection/>
                <Faq/>
        </div>
        </main>
    );
}