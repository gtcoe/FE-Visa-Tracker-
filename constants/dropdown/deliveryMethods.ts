export enum DELIVERY_METHOD {
  EMAIL = 'email',
  COURIER = 'courier',
  HAND_DELIVERY = 'hand_delivery'
}

export const DELIVERY_METHOD_LABELS: Record<DELIVERY_METHOD, string> = {
  [DELIVERY_METHOD.EMAIL]: 'Email',
  [DELIVERY_METHOD.COURIER]: 'Courier',
  [DELIVERY_METHOD.HAND_DELIVERY]: 'Hand Delivery'
}; 