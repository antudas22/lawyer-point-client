import { format } from "date-fns";
import React from "react";
import { toast } from "react-hot-toast";

const ReservingForm = ({lawsuit, setLawsuit, selectedDate}) => {
    const {name, times} = lawsuit;
    const date = format(selectedDate, 'PPPP');

    const handleReserve = e => {
      e.preventDefault();
      const form = e.target;
      const time = form.time.value;
      const clientName = form.clientName.value;
      const number = form.number.value;
      const email = form.email.value;

      const reserve = {
        appointmentDate: date,
        lawsuit: name,
        client: clientName,
        time,
        email,
        number
  
      }

      console.log(reserve);
      setLawsuit(null);
      toast.success('Successfully Appointment Reserved.')
    }

  return (
    <div>
      <input type="checkbox" id="reserving-form" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="reserving-form"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <form onSubmit={handleReserve} className="flex flex-col gap-2 mt-4">
            <input type="text" value={date} className="input input-bordered w-full max-w-md" disabled />
            <select name='time' className="select select-bordered w-full max-w-md">
              {
                times.map((time, i) => <option
                 key={i}
                 value={time}
                >{time}</option>)
              }
            </select>
            <input name='clientName' type="text" placeholder="Full Name" className="input input-bordered w-full max-w-md" required/>
            <input name="number" type="text" placeholder="Contact Number" className="input input-bordered w-full max-w-md" required/>
            <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full max-w-md" required/>
            <input type="submit" value="Submit" className="btn btn-primary w-full max-w-md mt-4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservingForm;
