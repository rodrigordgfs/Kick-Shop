import { ICart } from "@/interfaces/ICart";
import { ReactNode, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProductsContext } from "../Products";
import { ICoupon } from "@/interfaces/ICoupon";

interface ICartContext {
  cart: ICart[];
  cartQuantity: number;
  subtotal: number;
  total: number;
  coupon: ICoupon | null;
  handleUpdateCart: (id: number, quantity: number) => void;
  handleUpdateQuantityCart: (
    id: number,
    action: "add" | "remove",
    quantity?: number
  ) => void;
  handleRemoveProductCart: (id: number) => void;
  handleValidateCoupon: (code: string) => void;
}

interface ICartContextProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: ICartContextProps) {
  const [cart, setCart] = useState<ICart[]>([] as ICart[]);
  const [couponList, setCouponList] = useState<ICoupon[]>([
    {
      id: 1,
      code: "10OFF",
      discount: 0.1,
    },
    {
      id: 2,
      code: "20OFF",
      discount: 0.2,
    },
    {
      id: 3,
      code: "30OFF",
      discount: 0.3,
    },
  ]);
  const [coupon, setCoupon] = useState<ICoupon | null>(null);

  const { products } = useContext(ProductsContext);

  const cartQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);

  const subtotal = cart.reduce((acc: number, cartItem) => {
    const productItem = products.find(
      (productItem) => productItem.id === cartItem.id
    );
    if (productItem) {
      return acc + productItem.price * cartItem.quantity;
    }
    return acc;
  }, 0);

  const total = coupon ? subtotal - subtotal * coupon.discount : subtotal;

  function handleUpdateCart(id: number, quantity: number) {
    const productCart = cart.find((product) => product.id === id);

    if (productCart) {
      productCart.quantity = productCart.quantity + quantity;
      setCart((cart) => {
        return (
          cart &&
          cart.map((product) => {
            if (product.id === productCart.id) {
              return productCart;
            }
            return product;
          })
        );
      });
    } else {
      setCart((cart) => {
        return [...cart, { id, quantity }];
      });
    }
    toast.success("Produto adicionado ao carrinho", {
      position: "bottom-center",
      theme: "colored",
      pauseOnHover: true,
    });
  }

  function handleUpdateQuantityCart(
    id: number,
    action: "add" | "remove",
    quantity?: number
  ) {
    const productCart = cart.find((product) => product.id === id);

    if (productCart) {
      if (action === "add") {
        productCart.quantity = productCart.quantity + (quantity || 1);
      } else {
        if (productCart.quantity > 1) {
          productCart.quantity = productCart.quantity - (quantity || 1);
        }
      }
      setCart((cart) => {
        return (
          cart &&
          cart.map((product) => {
            if (product.id === productCart.id) {
              return productCart;
            }
            return product;
          })
        );
      });
    }
  }

  function handleValidateCoupon(code: string) {
    console.log(code);

    const coupon = couponList.find(
      (coupon) =>
        String(coupon.code).toUpperCase() === String(code).toUpperCase()
    );
    if (coupon) {
      setCoupon(coupon);
      toast.success("Cupom aplicado com sucesso", {
        position: "bottom-center",
        theme: "colored",
        pauseOnHover: true,
      });
    } else {
      toast.error("Cupom inválido", {
        position: "bottom-center",
        theme: "colored",
        pauseOnHover: true,
      });
    }
  }

  function handleRemoveProductCart(id: number) {
    setCart((cart) => {
      return cart.filter((product) => product.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        subtotal,
        total,
        coupon,
        cartQuantity,
        handleUpdateCart,
        handleUpdateQuantityCart,
        handleRemoveProductCart,
        handleValidateCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
