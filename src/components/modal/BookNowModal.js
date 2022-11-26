import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BookNowModal = () => {
    const { user } = useContext(AuthContext)

    const handlebooking = () => {

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">{name}</h3> */}
                    <form onSubmit={handlebooking} className='grid grid-cols-1 gap-5'>
                        {/* <input type="text" value={date} disabled className="input input-bordered w-full" /> */}
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="full name" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="phone number" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="email" className="input input-bordered w-full" />
                        <input type="submit" value='Submit' className="btn btn-success bg-gradient-to-r from-cyan-500 to-blue-500 text-white uppercase w-full" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookNowModal;