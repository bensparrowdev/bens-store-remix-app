import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.delivery-address.render-after",
  () => <Extension />
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <Banner title="shipping-address-validation">
      {translate("welcome", { target: extension.target })}
    </Banner>
  );
}
