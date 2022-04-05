import { useContext } from 'react';

import CheckoutFormContext from '../../../../context/Form/CheckoutFormContext';

export default function useOfflineCheckoutFormContext() {
  const { registerPaymentAction } = useContext(CheckoutFormContext);

  return { registerPaymentAction };
}
