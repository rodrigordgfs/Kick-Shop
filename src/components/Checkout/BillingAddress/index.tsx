import { BillingAddressForm } from "@/styles/pages/Checkout/components/billingAddress";
import { Panel } from "../Panel";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const BillingAddressFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string().email(),
  streetAddress: z.string(),
  complement: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
});

type BillingAddressFormType = z.infer<typeof BillingAddressFormSchema>;

export function BillingAddress() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BillingAddressFormType>({
    resolver: zodResolver(BillingAddressFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      streetAddress: "",
      complement: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  async function handleSubmitData({
    firstName,
    lastName,
    phone,
    email,
    streetAddress,
    complement,
    city,
    state,
    zipCode,
    country,
  }: BillingAddressFormType) {
    alert(
      `First Name: ${firstName} Last Name: ${lastName} Phone: ${phone} Email: ${email} Street Address: ${streetAddress} Complement: ${complement} City: ${city} State: ${state} Zip Code: ${zipCode} Country: ${country}`
    );
    reset();
  }

  return (
    <Panel title="Endereço de cobrança">
      <BillingAddressForm>
        <input
          type="text"
          placeholder="First Name"
          required
          {...register("firstName")}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          {...register("lastName")}
        />
        <input type="tel" placeholder="Phone" required {...register("phone")} />
        <input
          type="email"
          placeholder="Email"
          required
          {...register("email")}
        />
        <input
          type="text"
          placeholder="Street Address"
          required
          {...register("streetAddress")}
        />
        <input
          type="text"
          placeholder="Complement"
          {...register("complement")}
        />
        <input type="text" placeholder="City" required {...register("city")} />
        <input
          type="text"
          placeholder="State"
          required
          {...register("state")}
        />
        <input
          type="text"
          placeholder="Zip Code"
          required
          {...register("zipCode")}
        />
        <input
          type="text"
          placeholder="Country"
          required
          {...register("country")}
        />
      </BillingAddressForm>
    </Panel>
  );
}
