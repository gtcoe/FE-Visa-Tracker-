export type ClientType = 1 | 2 | 3;

export enum CLIENT_TYPE {
  CORPORATE = 1,
  AGENT = 2,
  WALK_IN = 3
}

export const CLIENT_TYPE_LABELS: Record<CLIENT_TYPE, string> = {
  [CLIENT_TYPE.CORPORATE]: 'Corporate',
  [CLIENT_TYPE.AGENT]: 'Agent',
  [CLIENT_TYPE.WALK_IN]: 'Walk In'
};

// Helper function to create dropdown options for client types
export const getClientTypeOptions = (includeEmpty: boolean = true) => {
  const options = Object.entries(CLIENT_TYPE)
    .filter(([key]) => !isNaN(Number(key)))
    .map(([key]) => ({
      value: Number(key),
      label: CLIENT_TYPE_LABELS[Number(key) as CLIENT_TYPE]
    }));

  if (includeEmpty) {
    return [{ value: '', label: 'Select' }, ...options];
  }
  
  return options;
}; 