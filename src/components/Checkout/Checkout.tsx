import { useState } from "react";
import { RootState } from "../../redux/root-reducer";
import { useSelector } from "react-redux";
import checkoutFormSchema from "../../schema/checkoutForm";

const CheckoutForm = () => {
  const products = useSelector(
    (state: RootState) => state.cartReducer.products
  );

  const initialFormData = {
    firstName: "",
    lastName: "",
    companyName: "",
    zipCode: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    email: "",
    addOnAddress: "",
    addInformation: "",
    paymentMethod: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<any>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const total = products
    .reduce((sum, { product, quantity }) => sum + product.price * quantity, 0)
    .toLocaleString();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleZipCodeChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        if (!response.ok) {
          throw new Error("Failed to fetch address data");
        }
        const data = await response.json();
        const { logradouro, localidade, uf } = data;
        setFormData({
          ...formData,
          streetAddress: logradouro,
          city: localidade,
          province: uf,
          country: "Brazil",
        });
      } catch (error) {
        console.error("Error fetching address data:", error);
      }
    }
  };

  const validateForm = () => {
    const result = checkoutFormSchema.safeParse(formData);
    if (result.success) {
      return true;
    } else {
      const formattedErrors: any = {};
      result.error.errors.forEach((err) => {
        if (err.path.length > 0) {
          formattedErrors[err.path[0]] = err.message;
        }
      });
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitSuccess(true);
      setFormData(initialFormData);
      setErrors({});

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } else {
      console.log("Formulário inválido");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-20 mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-[1242px] gap-14 font-poppins"
    >
      <div className="space-y-8 lg:space-x-20">
        <h2 className="text-2xl font-bold lg:pl-20">Billing details</h2>
        <div
          className="space-y-8
        "
        >
          <div className="flex space-x-10">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.firstName ? "border-red-500" : "border-gray"
                } rounded`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.lastName ? "border-red-500" : "border-gray"
                } rounded`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="companyName" className="block">
              Company Name (Optional)
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded"
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="block">
              ZIP code
            </label>
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              value={formData.zipCode}
              onChange={handleZipCodeChange}
              className={`w-full p-2 border ${
                errors.zipCode ? "border-red-500" : "border-gray"
              } rounded`}
            />
            {errors.zipCode && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.zipCode}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="country" className="block">
              Country / Region
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.country ? "border-red-500" : "border-gray"
              } rounded`}
            />
            {errors.country && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.country}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="streetAddress" className="block">
              Street address
            </label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.streetAddress ? "border-red-500" : "border-gray"
              } rounded`}
            />
            {errors.streetAddress && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.streetAddress}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="city" className="block">
              Town / City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.city ? "border-red-500" : "border-gray"
              } rounded`}
            />
            {errors.city && (
              <p className="text-red-500 text-xs italic mt-1">{errors.city}</p>
            )}
          </div>
          <div>
            <label htmlFor="province" className="block">
              Province
            </label>
            <input
              type="text"
              name="province"
              id="province"
              value={formData.province}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.province ? "border-red-500" : "border-gray"
              } rounded`}
            />
            {errors.province && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.province}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="addOnAddress" className="block">
              Add-on address
            </label>
            <input
              type="text"
              name="addOnAddress"
              id="addOnAddress"
              value={formData.addOnAddress}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.email ? "border-red-500" : "border-gray"
              } rounded`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <textarea
              name="addInformation"
              id="addInformation"
              placeholder="Additional Information (Optional)"
              value={formData.addInformation}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded resize-none"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 px-12">
        <div className="mt-10">
          <div className="flex justify-between">
            <p className="font-medium text-xl">Products</p>
            <p className=" font-medium text-xl mb-4">Subtotal</p>
          </div>
          {products.map(({ product, quantity }) => (
            <div key={product.sku} className="flex justify-between mt-2">
              <p className="flex justify-between">
                <span className="text-gray mr-2">{product.name}</span> x{" "}
                {quantity}
              </p>
              <p>Rs. {(product.price * quantity).toLocaleString()}</p>
            </div>
          ))}
          <div className="flex justify-between pt-4">
            <p className="font-medium">Subtotal</p>
            <p>Rs. {total} </p>
          </div>
          <div className="flex justify-between pt-4">
            <p className="font-medium">Total</p>
            <p className="text-primary font-bold text-xl">Rs. {total}</p>
          </div>
        </div>

        <hr className="text-gray" />

        <div className="space-y-4">
          <div className="flex items-center mt-2">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <p className="ml-2 font-bold">Direct Bank Transfer</p>
          </div>
          <p className="text-gray mt-2">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="paymentMethod1"
              name="paymentMethod"
              value="paymentMethod1"
              onChange={handleChange}
              checked={formData.paymentMethod === "paymentMethod1"}
              className="mr-2"
            />
            <label
              htmlFor="paymentMethod1"
              className={`${
                formData.paymentMethod === "paymentMethod1"
                  ? "text-black font-bold"
                  : "text-gray"
              }`}
            >
              Direct Bank Transfer
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="paymentMethod2"
              name="paymentMethod"
              value="paymentMethod2"
              onChange={handleChange}
              checked={formData.paymentMethod === "paymentMethod2"}
              className="mr-2"
            />
            <label
              htmlFor="paymentMethod2"
              className={`${
                formData.paymentMethod === "paymentMethod2"
                  ? "text-black font-bold"
                  : "text-gray"
              }`}
            >
              Cash on Delivery
            </label>
          </div>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-bold">privacy policy.</span>
          </p>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            className="py-4 px-20 border border-black text-black hover:font-bold rounded-xl"
          >
            Place Order
          </button>
        </div>

        {submitSuccess && (
          <div className="text-green-500 font-bold mt-4">
            Form submitted successfully!
          </div>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
