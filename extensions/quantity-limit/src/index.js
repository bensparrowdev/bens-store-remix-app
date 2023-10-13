// @ts-check

/**
 * @typedef {import("../generated/api").InputQuery} InputQuery
 * @typedef {import("../generated/api").FunctionResult} FunctionResult
 */

export default /**
 * @param {InputQuery} input
 * @returns {FunctionResult}
 */
(input) => {
  const errors = input.cart.lines
    .filter((line) => {
      if (
        line.merchandise?.product?.metafield?.value &&
        line.merchandise?.product?.metafield?.value.length
      ) {
        const quantityLimit = parseInt(
          line.merchandise?.product?.metafield?.value
        );
        if (line.quantity > quantityLimit) {
          return line;
        }
      }
    })
    .map((line) => ({
      localizedMessage: `Not possible to order more than ${line.quantity - 1}`,
      target: "cart",
    }));

  return {
    errors,
  };
};
