import { Link } from "react-router-dom";
import { Products } from "../../types/products";

interface CardItemProps {
  product: Products;
}

const CardItem = ({ product }: CardItemProps) => {
  return (
    <Link
        to={`/products/${product.sku}`}
        className="block w-[285px] h-[446px] relative overflow-hidden hover:scale-105 transition-transform"
    >
      <header className="relative">
        <img
          src={product.imgUrl[0]}
          className="object-cover w-full h-[285px]"
          alt={product.name}
        />
        {product.onDiscount && (
          <span className="bg-discount text-white px-2 py-1 rounded-full absolute top-2 right-2">
            -{product.discountPercentage}%
          </span>
        )}
        {product.isNew && (
          <span className="bg-new text-white px-2 py-1 rounded-full absolute top-2 right-2">
            New
          </span>
        )}
      </header>
      <main className="pt-4 pb-6 px-4 h-[161px] bg-component">
        <h5 className="text-ellipsis overflow-hiddenfont-bold text-xl mb-2">
          {product.name}
        </h5>
        <p className="text-lighter-gray">{product.subtitle}</p>
        {product.onDiscount ? (
          <div className="flex items-center text-sm gap-2 mt-2">
            <p className="text-base">
              <strong>
                Rp{" "}
                {(
                  Number(product.price) -
                  (Number(product.price) * (product.discountPercentage / 100))
                ).toFixed(2)}
              </strong>{" "}
              <span className="text-lighter-gray line-through ml-2">
                Rp {product.price}
              </span>
            </p>
          </div>
        ) : (
          <strong className="font-bold mt-2 block">
            Rp {product.price}
          </strong>
        )}
      </main>
    </Link>
  );
};

export default CardItem;