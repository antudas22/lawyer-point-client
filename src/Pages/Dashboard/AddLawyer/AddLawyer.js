import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddLawyer = () => {
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate();

  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const {data: specialists, isLoading} = useQuery({
    queryKey: ['specialist'],
    queryFn: async () => {
      const res = await fetch('https://lawyer-point-server.vercel.app/specialistIn');
      const data = await res.json();
      return data;
    }
  })

  if(isLoading){
    return <Loading/>
  }

  const handleAddLawyer = (data) => {
    console.log(imgHostKey)
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
      fetch(url, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(imageData => {
        if(imageData.success){
          const lawyer ={
            name: data.name,
            email: data.email,
            phone: data.phone,
            specialist: data.specialist,
            image: imageData.data.url,
            details: data.details
          }

          fetch('https://lawyer-point-server.vercel.app/lawyers', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(lawyer)
          })
          .then(res => res.json())
          .then(result => {
            console.log(result);
            toast.success(`${data.name} successfully added`);
            navigate('/dashboard/managelawyers')
          })
        }
      })
  }

  return (
    <div className="p-5 lg:p-2">
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
          <select
          {...register("specialist", { required: true })}
          className="select select-bordered w-full max-w-lg mt-2">
            <option disabled selected>Specialist In</option>
            {
              specialists.map(specialist => <option key={specialist._id}>{specialist.name}</option>)
            }
          </select>
          </div>

          <div className="form-control w-full max-w-lg">
            <input
              type="file"
              {...register("image", { required: true })}
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
