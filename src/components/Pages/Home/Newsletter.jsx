import { useState, useEffect, useRef } from "react";
import strawbery from "../../../assets/strawbery.png";
import { toast, Toaster } from "react-hot-toast";
import "animate.css";

const Newsletter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleNewsletter = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        if (!email) {
            toast.error("Please enter a valid email! 📩");
            return;
        }

        console.log(email);
        toast.success("Thank you for subscribing to our newsletter! 🎉");

        form.reset();
    };

    return (
        <div className="w-[1200px] mx-auto mb-10" ref={sectionRef}>
            <Toaster position="top-right" reverseOrder={false} />
            
            <div
                className="relative h-[400px] flex flex-col items-center justify-center text-center text-white space-y-4 px-6 rounded-lg"
                style={{
                    backgroundImage: `url(${strawbery})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

                <div className={`relative z-10 space-y-3 ${isVisible ? "animate__animated animate__zoomInUp" : "opacity-0"}`}>
                    <h2 className="text-xl font-bold">Stay Connected with Nature! 🌿</h2>
                    <p className="text-lg font-semibold">
                        Subscribe to our newsletter for eco-friendly tips, special offers, <br /> and the latest updates on new plants! 🌱
                    </p>
                    <form onSubmit={handleNewsletter} className="space-y-3">
                        <input
                            className="border-2 px-3 py-2 rounded-md border-[#b7d5ba] text-black"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                        <div>
                            <button type="submit" className="btn font-semibold text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 border-0 px-6 py-2 rounded-md">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
