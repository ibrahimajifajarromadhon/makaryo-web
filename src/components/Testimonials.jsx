import Slider from "react-slick";
import {TestimonialsData} from "../data/Data";

const Testimonials = () => {
  const testimonials = TestimonialsData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 text-center">
      <h2 className="text-5xl font-bold mb-16">Testimonials</h2>
      <Slider {...settings} className="container mx-auto">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="max-w-80 lg:max-w-sm rounded-2xl overflow-hidden shadow-lg shadow-orange-500 m-4 hover:bg-orange-500 hover:text-white transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <div className="px-6 py-4">
              <img src={testimonial.image} alt={testimonial.name} className="mx-auto my-5 rounded-full" />
              <div className="font-bold text-xl my-2">{testimonial.name}</div>
              <p className="my-2">
                {testimonial.designation}
              </p>
              <p className="my-2">
                {testimonial.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
