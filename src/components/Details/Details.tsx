import { Products } from '../../types/products';

interface DetailsProps {
  product: Products;
}

const Details = ({ product }: DetailsProps) => {
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center bg-filter p-4  pl-16 pr-16 font-poppins relative">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="text-gray">Home</span>
          <span className="font-bold ml-2">{'>'}</span>
          <span className="text-gray ml-4">Shop</span>
          <span className="font-bold ml-4">{'>'}</span>
          <div className="bg-gray h-6 w-0.5 ml-8 mr-4"></div>
          <span className="ml-4 font-bold">{product.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
