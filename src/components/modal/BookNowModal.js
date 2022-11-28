import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { productBooking } from '../../api/products';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from '../Spinner/Spinner';

const BookNowModal = ({ product, setAllProducts }) => {
    const { user, loading } = useContext(AuthContext)
    const navigate = useNavigate()

    const { productName, categoryName, categoryId, resalePrice, description, year, condition, number, location, image, _id } = product;

    const handlebooking = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const productName = event.target.productName.value
        const resalePrice = event.target.resalePrice.value
        const phone = event.target.phone.value
        const location = event.target.location.value

        const booking = {
            name,
            email,
            productId: _id,
            productName,
            resalePrice,
            phone,
            location,
            image
        }
        productBooking(booking)
            .then(data => {
                if (data.acknowledged) {
                    setAllProducts(null)
                    navigate(`/category/${categoryId}`)
                    toast.success('Item booked')
                }
                else {
                    toast.error(data.message)
                }
            })

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
                        <input name='productName' type="text" defaultValue={productName} disabled className="input input-bordered w-full" />
                        <input name='resalePrice' type="text" defaultValue={resalePrice} disabled className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="phone number" className="input input-bordered w-full" required />
                        <input name='location' type="text" placeholder="meeting location" className="input input-bordered w-full" required />

                        <input type="submit" value='Submit' className="btn btn-success bg-gradient-to-r from-cyan-500 to-blue-500 text-white uppercase w-full" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookNowModal;