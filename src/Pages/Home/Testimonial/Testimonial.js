import React from "react";
import { ImLocation } from "react-icons/im";

const Testimonial = () => {
  return (
    <div className="hidden md:block lg:block">
      <h2 className="text-3xl font-bold text-center my-10 lg:my-14">Our Client Says</h2>

      <div className="">

      <div className="carousel w-full">
  <div id="slide1" className="carousel-item justify-center gap-5 relative w-full py-6">
    <div className="w-[200px] md:w-[320px] lg:w-[500px] p-6 shadow-xl rounded-lg">
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg" alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-600">Bill Gates</h3>
            <div className="flex items-center gap-1 text-primary">
                <ImLocation/>
                <p>NYC, USA</p>
            </div>
          </div>
        </div>
        <div className="my-4">
            <h2 className="text-2xl font-bold my-2">I got my money back.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, earum neque explicabo eum quas quam ut placeat architecto laudantium blanditiis modi nesciunt quo omnis reprehenderit et necessitatibus facilis quae sint.</p>
        </div>
      </div>
      <div className="w-[200px] md:w-[320px] lg:w-[500px] p-6 shadow-xl rounded-lg">
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://www.scotsman.com/webimg/b25lY21zOjNkZDIwNTZhLWQ1OGYtNGE5OC1iZjNlLWMyNDBmM2JiYTZlMjoxZTA1MzY3OC0yZTc2LTRkOTYtOGVlNi02OGJlZGZiYzlmODU=.jpg?crop=3:2,smart&width=1024&auto=webp&quality=75" alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-600">James Bond</h3>
            <div className="flex items-center gap-1 text-primary">
                <ImLocation/>
                <p>London, UK</p>
            </div>
          </div>
        </div>
        <div className="my-4">
            <h2 className="text-2xl font-bold my-2">I got justice in my movie.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, earum neque explicabo eum quas quam ut placeat architecto laudantium blanditiis modi nesciunt quo omnis reprehenderit et necessitatibus facilis quae sint.</p>
        </div>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="bg-base-300 text-2xl p-2">❮</a> 
      <a href="#slide2" className="bg-base-300 text-2xl p-2">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item justify-center gap-5 relative w-full py-6">
  <div className="w-[200px] md:w-[320px] lg:w-[500px] p-6 shadow-xl rounded-lg">
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg" alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-600">Tim Cook</h3>
            <div className="flex items-center gap-1 text-primary">
                <ImLocation/>
                <p>California, USA</p>
            </div>
          </div>
        </div>
        <div className="my-4">
            <h2 className="text-2xl font-bold my-2">I got my apple back.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, earum neque explicabo eum quas quam ut placeat architecto laudantium blanditiis modi nesciunt quo omnis reprehenderit et necessitatibus facilis quae sint.</p>
        </div>
      </div>
      <div className="w-[200px] md:w-[320px] lg:w-[500px] p-6 shadow-xl rounded-lg">
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://image.cnbcfm.com/api/v1/image/104410446-GettyImages-669889288.jpg?v=1529474846" alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-600">Mark Zuckerberg</h3>
            <div className="flex items-center gap-1 text-primary">
                <ImLocation/>
                <p>Chicago, USA</p>
            </div>
          </div>
        </div>
        <div className="my-4">
            <h2 className="text-2xl font-bold my-2">I got my meta back.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, earum neque explicabo eum quas quam ut placeat architecto laudantium blanditiis modi nesciunt quo omnis reprehenderit et necessitatibus facilis quae sint.</p>
        </div>
      </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="bg-base-300 text-2xl p-2">❮</a> 
      <a href="#slide1" className="bg-base-300 text-2xl p-2">❯</a>
    </div>
  </div>
</div>

      </div>

    </div>
  );
};

export default Testimonial;
