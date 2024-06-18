import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';

const CheckoutForm = () => {
  const products = useSelector((state: RootState) => state.cartReducer.products);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    zipCode: '',
    country: '',
    streetAddress: '',
    city: '',
    province: '',
    email: '',
    addOnAddress: '',
    addInformation: ''
  });

  const [total, setTotal] = useState(
    products.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleZipCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    if (value.length === 8) { 
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        if (!response.ok) {
          throw new Error('Failed to fetch address data');
        }
        const data = await response.json();
        const { logradouro, localidade, uf} = data;
        setFormData({
          ...formData,
          streetAddress: logradouro,
          city: localidade,
          province: uf,
          country: 'Brazil',
        });
      } catch (error) {
        console.error('Error fetching address data:', error);
      }
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-between p-4 space-y-4">
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Billing details</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name (Optional)"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="zipCode"
          placeholder="ZIP code"
          value={formData.zipCode}
          onChange={handleZipCodeChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="country"
          placeholder="Country / Region"
          value={formData.country}
          readOnly
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="streetAddress"
          placeholder="Street address"
          value={formData.streetAddress}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="Town / City"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="province"
          placeholder="Province"
          value={formData.province}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="addOnAddress"
          placeholder="Add-on address"
          value={formData.addOnAddress}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="addInformation"
          placeholder="Additional Information"
          value={formData.addInformation}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Product</h2>
        <div className="space-y-2">
          {products.map(({ product, quantity }) => (
            <div key={product.sku} className="flex justify-between p-2">
              <span>{product.name}</span>
              <span>{quantity} x Rs. {product.price.toLocaleString()}</span>
              <span>Rs. {(product.price * quantity).toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-bold border-b pt-2 mt-2">
          <span>Subtotal:</span>
          <span>Rs. {total.toLocaleString()}</span>
        </div>
        <div className="space-y-2 mt-4">
          <h2 className="text-2xl font-bold">Payment Method</h2>
          <div className="flex items-center">
            <input type="radio" id="direct-bank" name="paymentMethod" value="Direct Bank Transfer" required className="mr-2" />
            <label htmlFor="direct-bank">Direct Bank Transfer</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="cash-on-delivery" name="paymentMethod" value="Cash On Delivery" className="mr-2" />
            <label htmlFor="cash-on-delivery">Cash On Delivery</label>
          </div>
        </div>
        <button type="submit" className="w-full py-2 bg-black text-white font-bold rounded">Place order</button>
      </div>
    </form>
  );
};

export default CheckoutForm;