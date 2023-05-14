import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const ManageLawyers = () => {

    const {logOut} = useContext(AuthContext);

    const [removeLawyer, setRemoveLawyer] = useState(null);

    const closeModal = () => {
        setRemoveLawyer(null)
    }

    const {data: lawyers, refetch, isLoading } = useQuery({
        queryKey: ['lawyers'],
        queryFn: async () => {
            try{
                const res = await fetch('http://localhost:5000/lawyers', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                if(res.status === 401 || res.status === 403){
                    return logOut();
                }
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        }
    })

    const handleDeleteLawyer = lawyer => {
        fetch(`http://localhost:5000/lawyers/${lawyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut();
            }
            res.json()
        })
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Successfully removed ${lawyer.name}`)
            }
        })
    }

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='p-2'>
            <div className='mb-4'>
            <h3 className="text-2xl text-center">Manage Lawyers</h3>
            <p className='text-end mb-4'>Total Lawyer{lawyers?.length > 1 ? 's' : ''}: {lawyers?.length}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Specialist In</th>
                        <th>Remove From List</th>
                    </tr>
                    </thead>
                    <tbody>

                        {
                            lawyers &&
                            lawyers?.map((lawyer, i) => <tr key={lawyer._id} className="hover">
                            <th>{i+1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-circle w-12 h-12">
                                        <img src={lawyer.image} alt='lawyer-img' />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">{lawyer.name}</div>
                                    </div>
                                </div>
                                </td>
                            <td>{lawyer.email}<br/>{lawyer.phone}</td>
                            <td>{lawyer.specialist}</td>
                            <td><label
                            onClick={() => setRemoveLawyer(lawyer)}
                            htmlFor="confirmation-modal" className='btn bg-red-500 btn-sm text-white border-none'>Remove</label></td>
                        </tr>)
                        }

                    </tbody>
                </table>
                </div>
            {
                removeLawyer && 
                <ConfirmationModal
                    title={`Are you sure you wnt to remove?`}
                    description={`If you remove ${removeLawyer.name}. We will never be able to recover it.`}
                    modalData={removeLawyer}
                    successAction={handleDeleteLawyer}
                    closeAction={closeModal}
                />
            }
        </div>
    );
};

export default ManageLawyers;