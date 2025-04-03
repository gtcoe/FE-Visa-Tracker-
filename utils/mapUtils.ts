import { 
  APPLICATION_EXTERNAL_STATUS, 
  APPLICATION_QUEUES,
  STATUS_DISPLAY_MAP,
  QUEUE_DISPLAY_MAP,
  QUEUE_TO_STATUS
} from '@component/constants/appConstants';

// Create reverse mapping for STATUS_DISPLAY_MAP (string -> number)
export const DISPLAY_TO_STATUS: Record<string, APPLICATION_EXTERNAL_STATUS> = Object.entries(STATUS_DISPLAY_MAP)
  .reduce((acc, [key, value]) => {
    acc[value] = Number(key) as APPLICATION_EXTERNAL_STATUS;
    return acc;
  }, {} as Record<string, APPLICATION_EXTERNAL_STATUS>);

// Create reverse mapping for QUEUE_DISPLAY_MAP (string -> number)
export const DISPLAY_TO_QUEUE: Record<string, APPLICATION_QUEUES> = Object.entries(QUEUE_DISPLAY_MAP)
  .reduce((acc, [key, value]) => {
    acc[value] = Number(key) as APPLICATION_QUEUES;
    return acc;
  }, {} as Record<string, APPLICATION_QUEUES>);

// Helper function to get status ID from display value
export const getStatusIdFromDisplay = (displayValue: string): APPLICATION_EXTERNAL_STATUS => {
  return DISPLAY_TO_STATUS[displayValue] || APPLICATION_EXTERNAL_STATUS.UNDER_PROCESS; // Default fallback
};

// Helper function to get queue ID from display value
export const getQueueIdFromDisplay = (displayValue: string): APPLICATION_QUEUES => {
  return DISPLAY_TO_QUEUE[displayValue] || APPLICATION_QUEUES.SUBMISSION; // Default fallback
};

// Get status options based on selected queue
export const getStatusOptionsForQueue = (queueId: APPLICATION_QUEUES): { id: APPLICATION_EXTERNAL_STATUS, label: string }[] => {
  // Get the list of status IDs for the selected queue
  const statusIds = QUEUE_TO_STATUS[queueId] || [];
  
  // Map to objects with id and label
  return statusIds.map(statusId => ({
    id: statusId,
    label: STATUS_DISPLAY_MAP[statusId]
  }));
}; 