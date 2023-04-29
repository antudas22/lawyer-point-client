import React from "react";
import './Lawyers.css';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import harryPotter from '../../assets/Lawyers-img/harry-potter.jpg'
import andreaPiacquadio from '../../assets/Lawyers-img/andrea-piacquadio.jpg';
import julieOcean from '../../assets/Lawyers-img/julie-ocean.jpg';
import buroMillennial from '../../assets/Lawyers-img/buro-millennial.jpg';
import dinielleDeVeyra from '../../assets/Lawyers-img/dinielle-de-veyra.jpg';
import jhonWick from '../../assets/Lawyers-img/jhon-wick.jpg';
import teddyJoseph from '../../assets/Lawyers-img/teddy-joseph.jpg';
import mikeJhon from '../../assets/Lawyers-img/mike-jhon.jpg';

const Lawyers = () => {

  return (
    <div className="relative">
      <h2 className="text-3xl font-bold text-center my-14">Meet Our Lawyers</h2>
        <div className="flex justify-between">
        <button className="absolute bottom-1/3 bg-base-300 text-4xl p-4 rounded-full" ><FiChevronLeft/></button>
        <button className="absolute bottom-1/3 right-0 bg-base-300 text-4xl p-4 rounded-full" ><FiChevronRight/></button>
        </div>
      <div id="carousel" className="flex justify-center">
        
        <div>
            <div className="card w-72 h-96 bg-base-100 shadow-xl m-4">
            <figure>
                <img
                src={harryPotter}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        <div>
            <div className="card w-72 h-96 bg-base-100 shadow-xl m-4">
            <figure>
                <img
                src={andreaPiacquadio}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        <div>
            <div className="card w-72 h-96 bg-base-100 shadow-xl m-4">
            <figure>
                <img
                src={julieOcean}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        {/* <div>
            <div className="card w-72 h-96 bg-base-100 shadow-xl m-4">
            <figure>
                <img
                src={buroMillennial}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        <div>
            <div className="card w-72 h-96 bg-base-100 shadow-xl m-4">
            <figure>
                <img
                src={dinielleDeVeyra}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        <div>
            <div className="card w-72 h-96 bg-base-100 shadow-xl m-4">
            <figure>
                <img
                src={jhonWick}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        <div>
            <div className="card w-72 h-96 bg-base-100 shadow-xl m-4">
            <figure>
                <img
                src={teddyJoseph}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        <div>
            <div className="card w-72 h-96 bg-base-100 shadow-xl m-4">
            <figure>
                <img
                src={mikeJhon}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div> */}

      </div>
    </div>
  );
};

export default Lawyers;
