import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { imageUpload } from '../../../api/imageUpload';
import { addProduct } from '../../../api/products';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import AddProductsForm from './AddProductsForm';

const AddAProduct = () => {
    const { loading, user, setLoading } = useContext(AuthContext)

    const handleSubmit = (event) => {

        event.preventDefault()
        const productName = event.target.name.value
        const category = event.target.category.value
        const originalPrice = event.target.originalPrice.value
        const resalePrice = event.target.resalePrice.value
        const description = event.target.description.value
        const year = event.target.year.value
        const condition = event.target.condition.value
        const number = event.target.number.value
        const location = event.target.location.value
        const image = event.target.image.files[0]

        const categoryName = category.split("-")[0]
        const categoryId = category.split("-")[1]
        const postTime = new Date()


        imageUpload(image)
            .then(res => {
                const productData = {
                    productName,
                    categoryName,
                    categoryId,
                    originalPrice,
                    resalePrice,
                    description,
                    year,
                    condition,
                    number,
                    location,
                    image: res.data.display_url,
                    postTime,
                    sellerName: user?.displayName,
                    sellerEmail: user?.email

                }
                addProduct(productData)
                    .then(data => {
                        toast.success('Product added')
                        event.target.reset()
                        // setLoading(false)
                    })
            })
    }
    return (
        <div>
            <AddProductsForm handleSubmit={handleSubmit} loading={loading} />
        </div>
    );
};

export default AddAProduct;