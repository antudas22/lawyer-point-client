import React from 'react';

const MyAppointment = () => {
    return (
        <div className='p-2'>
            <h3 className='text-2xl text-center mb-4'>My Appointments</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;