import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { imageUpload } from '../../../api/imageUpload';
import { addProduct } from '../../../api/products';
import AddProductsForm from '../../../components/form/AddProductsForm';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddAProduct = () => {
    const { setLoading } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const productName = event.target.name.value
        const category = event.target.category.value
        const price = event.target.price.value
        const description = event.target.description.value
        const year = event.target.year.value
        const condition = event.target.condition.value
        const number = event.target.number.value
        const location = event.target.location.value
        const image = event.target.image.files[0]

        imageUpload(image)
            .then(res => {
                const productData = {
                    productName,
                    category,
                    price,
                    description,
                    year,
                    condition,
                    number,
                    location,
                    image: res.data.display_url
                }
                addProduct(productData)
                    .then(data => {
                        toast.success('Product added')
                        event.target.reset()
                    })
            })
    }
    return (
        <div>
            <AddProductsForm handleSubmit={handleSubmit} />
        </div>
    );
};

export default AddAProduct;