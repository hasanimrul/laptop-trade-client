import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BookNowModal = ({ product, setAllProducts }) => {
    const { user } = useContext(AuthContext)

    const { productName, categoryName, resalePrice, description, year, condition, number, location, image } = product;

    const handlebooking = (event) => {
        event.preventDefault()
        toast.success('Item booked')
        setAllProducts(null)

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName
                    }</h3>
                    <form onSubmit={handlebooking} className='grid grid-cols-1 gap-5'>
                        {/* <input type="text" value={date} disabled className="input input-bordered w-full" /> */}
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="full name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="email" className="input input-bordered w-full" />
                        <input name='productName' type="text" defaultValue={productName} disabled placeholder="full name" className="input input-bordered w-full" />
                        <input name='resalePrice' type="text" defaultValue={resalePrice} disabled placeholder="full name" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="phone number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="meeting location" className="input input-bordered w-full" />

                        <input type="submit" value='Submit' className="btn btn-success bg-gradient-to-r from-cyan-500 to-blue-500 text-white uppercase w-full" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookNowModal;