import React from "react";
import { ImLocation } from "react-icons/im";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-14">Our Client Says</h2>

      <div className="flex justify-end gap-1 mr-32 mb-2">
        <button className="bg-base-300 text-2xl p-2" ><FiChevronLeft/></button>
        <button className="bg-base-300 text-2xl p-2" ><FiChevronRight/></button>
        </div>

      <div className="flex justify-center gap-5 w-full">
      <div className="w-[500px] p-6 shadow-xl rounded-lg">
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
                <p>Berlin, Germany</p>
            </div>
          </div>
        </div>
        <div className="my-4">
            <h2 className="text-2xl font-bold my-2">I got my money back.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, earum neque explicabo eum quas quam ut placeat architecto laudantium blanditiis modi nesciunt quo omnis reprehenderit et necessitatibus facilis quae sint.</p>
        </div>
      </div>
      <div className="w-[500px] p-6 shadow-xl rounded-lg">
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
                <p>Berlin, Germany</p>
            </div>
          </div>
        </div>
        <div className="my-4">
            <h2 className="text-2xl font-bold my-2">I got my money back.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, earum neque explicabo eum quas quam ut placeat architecto laudantium blanditiis modi nesciunt quo omnis reprehenderit et necessitatibus facilis quae sint.</p>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Testimonial;
