export const deliveryOptions = [
  { id: "1", deleveryDay: 7, costCents: 0 },
  { id: "2", deleveryDay: 3, costCents: 499 },
  { id: "3", deleveryDay: 1, costCents: 999 },
];

export function getDeliveryOptions(deleveryOptionId){
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deleveryOptionId) {
      deliveryOption = option;
    }
  });
  return deliveryOption || deliveryOptions[0]
}