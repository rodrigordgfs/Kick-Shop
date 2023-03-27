import { ICart } from "@/interfaces/ICart";
import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";

interface ICartContext {
  cart: ICart[];
  cartQuantity: number;
  handleUpdateCart: (id: number, quantity: number) => void;
}

interface ICartContextProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: ICartContextProps) {
  const [cart, setCart] = useState<ICart[]>([] as ICart[]);

  const cartQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);

  function handleUpdateCart(id: number, quantity: number) {
    const productCart = cart.find((product) => product.id === id);

    if (productCart) {
      productCart.quantity = productCart.quantity + quantity;
      setCart((cart) => {
        return cart.map((product) => {
          if (product.id === productCart.id) {
            return productCart;
          }
          return product;
        });
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

  return (
    <CartContext.Provider value={{ cart, cartQuantity, handleUpdateCart }}>
      {children}
    </CartContext.Provider>
  );
}
