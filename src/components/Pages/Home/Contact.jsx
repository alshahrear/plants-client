import { useEffect, useRef, useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { AiTwotoneMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { TbClockHour2 } from "react-icons/tb";
import { toast, Toaster } from "react-hot-toast";
import "animate.css";

const Contact = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

        // You can add more validations here

        console.log("Form submitted: ", { name, email, phone, message });

        // Show success toast
        toast.success("Form submitted successfully! 🎉");

        // Reset form
        form.reset();
    };

    return (
        <div 
            ref={sectionRef} 
            className={`flex w-[1200px] mt-10 mx-auto mb-20 ${isVisible ? "animate__animated animate__fadeIn" : "opacity-0"}`}
        >
            {/* Contact Info Section */}
            <div className="space-y-10 flex-1">
                <h2 className="text-4xl font-bold">
                    <span className="text-[#00730c]">C</span>ontact 
                    <span className="text-[#75cb00]"> U</span>s
                </h2>
                <p className="text-gray-700 -mt-5">
                    Have questions or want to get involved in our tree-planting initiative? We'd love to hear from you! Whether you're looking to volunteer, donate, or simply learn more about our mission, our team is here to assist you. Feel free to reach out via email, phone, or visit us in person. Together, we can create a greener and healthier planet for future generations! 🌿🌍
                </p>
                <div className="flex">
                    <div className="flex items-center">
                        <div><LuPhoneCall className="text-4xl" /></div>
                        <div className=" ml-5">
                            <p className="text-lg text-[#00a23d] font-semibold">Phone</p>
                            <p className="font-medium">+8801612002913</p>
                        </div>
                    </div>
                    <div className="flex items-center ml-28">
                        <div><AiTwotoneMail className="text-4xl" /></div>
                        <div className="ml-5">
                            <p className="text-lg text-[#00a23d] font-semibold">Contact Mail</p>
                            <p className="font-medium">alshahrear1@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-12">
                    <div className="flex items-center">
                        <div><SlLocationPin className="text-4xl" /></div>
                        <div className="ml-5">
                            <p className="text-lg text-[#00a23d] font-semibold">Location</p>
                            <p className="font-medium">18/2 Dhanmondi, Dhaka</p>
                        </div>
                    </div>
                    <div className="flex items-center ml-24">
                        <div><TbClockHour2 className="text-4xl" /></div>
                        <div className="ml-5">
                            <p className="text-lg text-[#00a23d] font-semibold">Open It</p>
                            <p className="font-medium">Sun-Thu: 8:00 am - 9:00 pm</p>
                        </div>
                    </div>
                </div>
                <p className="text-lg font-medium mt-12">
                    Contact us have a cool project? 
                    <span className="text-[#00a23d] ">Get in Touch!</span>
                </p>
            </div>

            {/* Contact Form Section */}
            <div className="flex-1 ml-28 rounded-xl">
                <div className="shadow-lg border-1 border-[#e9e3cd]  px-8 py-8">
                    <form onSubmit={handleFormSubmit} className="space-y-3">
                        <div>
                            <h3 className="text-3xl text-[#00a23d] font-bold">Get <span className="text-[#6cc800]">in</span> Touch</h3>
                        </div>
                        <div className="form-control">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="input input-bordered font-medium bg-[#F4F4F4] w-[500px]" 
                                name="name"
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="input input-bordered font-medium bg-[#F4F4F4] w-[500px]" 
                                name="email"
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <input 
                                type="text" 
                                placeholder="Phone Number" 
                                className="input input-bordered font-medium bg-[#F4F4F4] w-[500px]" 
                                name="phone"
                                required 
                            />
                        </div>
                        <div>
                            <textarea 
                                name="message" 
                                placeholder="  Message" 
                                rows="6" 
                                className="border-1 border-gray-300 font-medium bg-[#F4F4F4] w-[500px] rounded-lg"
                            ></textarea>
                        </div>
                        <div className="form-control mt-3">
                            <button type="submit" className="btn font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 px-8">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Toast Component */}
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default Contact;
