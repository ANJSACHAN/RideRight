import { useState } from "react"

export default () => {

    const testimonials = [
        {
          avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
          name: "Jennifer Smith",
          title: "Frequent Renter",
          quote: "I've been using this car rental service for years, and I'm always impressed by the quality of their vehicles and the ease of the rental process. Highly recommended!"
        },
        {
          avatar: "https://randomuser.me/api/portraits/women/79.jpg",
          name: "John Anderson",
          title: "Road Trip Enthusiast",
          quote: "Renting a car from this company made my road trip unforgettable. The car was in excellent condition, and the staff was friendly and efficient. Will definitely use their services again!"
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/86.jpg",
          name: "Sophie Carter",
          title: "Business Traveler",
          quote: "As a frequent business traveler, I rely on this car rental service for my transportation needs. The wide selection of cars and seamless booking process make my trips hassle-free."
        },
      ];
      

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
      <div className="">
        <section className="py-20  bg-black">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-[#f48c06] font-semibold pb-6">What people are saying</h3>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-[#eaf4f4] text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-[#f48c06] font-semibold">{item.name}</span>
                                                    <span className="block text-white text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-[#0077b6] focus:ring ${currentTestimonial == idx ? "bg-[#caf0f8]" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
        </div>
    )
}
