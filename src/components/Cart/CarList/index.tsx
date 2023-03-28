import { CartContext } from "@/contexts/Cart";
import { ProductsContext } from "@/contexts/Products";
import {
  CartCouponForm,
  CartListContainer,
  CartListContent,
  CartListFooter,
  CartListItem,
  CartListItemInfo,
  CartListItemInfoContainer,
  CartListItemInfoImage,
  CartListItemInfoImageContainer,
  CartListItemPrice,
  CartListItemQuantity,
  CartListItemRemoveContainer,
  CartListItemSubtotal,
} from "@/styles/pages/Cart/components/cartList";
import { formatCurrencyBRL } from "@/utils/currencyFormat";
import { useContext } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CouponFormSchema = z.object({
  code: z.string(),
});

type CouponFormType = z.infer<typeof CouponFormSchema>;

export function CartList() {
  const {
    cart,
    handleUpdateQuantityCart,
    handleRemoveProductCart,
    handleValidateCoupon,
  } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CouponFormType>({
    resolver: zodResolver(CouponFormSchema),
    defaultValues: {
      code: "",
    },
  });

  async function handleApplyCoupon({ code }: CouponFormType) {
    handleValidateCoupon(code);
    reset();
  }

  return (
    <CartListContainer>
      <CartListContent>
        {cart.map((product) => {
          const productData = products.find((item) => item.id === product.id);
          return (
            <CartListItem key={product.id}>
              <CartListItemRemoveContainer
                onClick={() => handleRemoveProductCart(product.id)}
              >
                <AiOutlineClose size={18} />
              </CartListItemRemoveContainer>
              <CartListItemInfoContainer>
                <CartListItemInfoImageContainer>
                  <CartListItemInfoImage
                    src={productData?.image as string}
                    alt=""
                    width={60}
                    height={60}
                  />
                </CartListItemInfoImageContainer>
                <CartListItemInfo>
                  <p>{productData?.title}</p>
                  <CartListItemPrice>
                    <span>
                      Price:{" "}
                      {formatCurrencyBRL.format(productData?.price as number)}
                    </span>
                  </CartListItemPrice>
                  <CartListItemSubtotal>
                    <span>
                      Subtotal:{" "}
                      {formatCurrencyBRL.format(
                        product.quantity * (productData?.price as number)
                      )}
                    </span>
                  </CartListItemSubtotal>
                </CartListItemInfo>
              </CartListItemInfoContainer>
              <CartListItemQuantity>
                <div
                  onClick={() => handleUpdateQuantityCart(product.id, "add")}
                >
                  <AiOutlinePlus size={18} />
                </div>
                <div>
                  <span>{product.quantity}</span>
                </div>
                <div
                  onClick={() => handleUpdateQuantityCart(product.id, "remove")}
                >
                  <AiOutlineMinus size={18} />
                </div>
              </CartListItemQuantity>
            </CartListItem>
          );
        })}
      </CartListContent>
      <CartListFooter>
        <CartCouponForm onSubmit={handleSubmit(handleApplyCoupon)}>
          <input type="text" placeholder="Coupon code" {...register("code")} />
          <input type="submit" value="Apply" />
        </CartCouponForm>
      </CartListFooter>
    </CartListContainer>
  );
}
