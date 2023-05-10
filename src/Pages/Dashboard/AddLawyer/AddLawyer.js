import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";

const AddLawyer = () => {
  const { register, handleSubmit } = useForm();

  const {data: specialists, isLoading} = useQuery({
    queryKey: ['specialist'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/specialistIn');
      const data = await res.json();
      return data;
    }
  })

  if(isLoading){
    return <Loading/>
  }

  const handleAddLawyer = (data) => {
      console.log(data)
  }

  return (
    <div className="p-2">
      <h3 className="text-2xl text-center mb-4">Add A Lawyer</h3>
      <div className="w-full mx-auto py-10 max-w-lg rounded-xl p-4 my-10 shadow-2xl">
        <form onSubmit={handleSubmit(handleAddLawyer)}>
          <div className="form-control w-full max-w-lg">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="input input-bordered w-full max-w-lg"
            />
          </div>

          <div className="form-control w-full max-w-lg">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email Address"
              className="input input-bordered w-full max-w-lg mt-2"
            />
          </div>

          <div className="form-control w-full max-w-lg">
            <input
              type="text"
              {...register("phone", { required: true })}
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-lg mt-2"
            />
          </div>
          
          <div className="form-control w-full max-w-lg">
          <select className="select select-bordered w-full max-w-lg mt-2">
            <option disabled selected>Specialist In</option>
            {
              specialists.map(specialist => <option key={specialist._id}>{specialist.name}</option>)
            }
          </select>
          </div>

          <div className="form-control w-full max-w-lg">
            <input
              type="file"
              {...register("file", { required: true })}
              className="file-input file-input-bordered w-full max-w-lg mt-2"
            />
          </div>

          <div className="form-control w-full max-w-lg">
            <textarea
              type="text"
              {...register("details", { required: true })}
              placeholder="Describe About The Lawyer..."
              className="textarea textarea-bordered w-full max-w-lg mt-2"
            />
          </div>

          <input
            className="btn btn-primary text-white w-full mt-2"
            type="submit"
            value="Add Lawyer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddLawyer;
