// @ts-check

// Use JSDoc annotations for type safety
/**
 * @typedef {import("../generated/api").InputQuery} InputQuery
 * @typedef {import("../generated/api").FunctionResult} FunctionResult
 * @typedef {import("../generated/api").Operation} Operation
 */

/**
 * @type {FunctionResult}
 */
const NO_CHANGES = {
  operations: [],
};

// The @shopify/shopify_function package will use the default export as your function entrypoint
export default /**
 * @param {InputQuery} input
 * @returns {FunctionResult}
 */
(input) => {
  // Define a type for your configuration, and parse it from the metafield
  /**
   * @type {{
   *  zipCodes: string
   *  rate: string
   * }}
   */
  const configuration = JSON.parse(
    input?.deliveryCustomization?.metafield?.value ?? "{}"
  );
  if (!configuration.zipCodes || !configuration.rate) {
    return NO_CHANGES;
  }

  let toRemove = input.cart.deliveryGroups
    .filter((group) => {
      var allowChange = null;

      if (group.deliveryAddress?.zip) {
        const addressZip = group.deliveryAddress.zip.toUpperCase();
        const zipCodes = configuration.zipCodes.split(",");

        zipCodes.forEach((zip) => {
          if (addressZip.startsWith(zip.toUpperCase())) {
            allowChange = group;
          }
        });
      }

      return allowChange;
    })
    .flatMap((group) =>
      group.deliveryOptions.filter(
        (option) => option.title == configuration.rate
      )
    )
    .map(
      (option) =>
        /** @type {Operation} */ ({
          hide: {
            deliveryOptionHandle: option.handle,
          },
        })
    );

  return {
    operations: toRemove,
  };
};
