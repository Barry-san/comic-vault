export const metadata = {
  title: "Comic Vault | Checkout page",
  description: "Checkout comics you've put in cart",
};

export default function ({ children }) {
  return (
    <>
      <script src="https://js.paystack.co/v1/inline.js"></script>
      {children}
    </>
  );
}
