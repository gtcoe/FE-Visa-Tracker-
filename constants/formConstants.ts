// Form modes for FillServiceForm
export enum FORM_MODE {
  VIEW = 'view',
  EDIT = 'edit',
  ADD_SUB_REQUEST = 'add-sub-request'
}

// Tab names for CommonScreen
export enum TAB_NAME {
  SEARCH = 'search',
  FILL = 'fill',
  SUMMARY = 'summary'
}

// LocalStorage keys
export enum STORAGE_KEY {
  FORM_MODE = 'formMode',
  APPEND_VISA_REQUEST = 'appendVisaRequest',
  APPLICATION_ID = 'applicationId',
  ACTIVE_TAB = 'activeTab',
  SERVICE_REFERENCE_NUMBER = 'referenceNumber',
  APPLICATION_INFO = 'applicationInfo',
  USER_ID = 'userId'
} 

export const APPEND_VISA_REQUEST_TYPES = {
  TRUE: 'true',
  FALSE: 'false'
}