// State Options - Comprehensive list of Indian states and union territories
// Country Options
export enum COUNTRY {
    INDIA = 1,
    USA = 2,
    UK = 3,
    CANADA = 4,
    AUSTRALIA = 5,
    GERMANY = 6,
    FRANCE = 7,
    JAPAN = 8,
    CHINA = 9,
    SINGAPORE = 10,
    UAE = 11
  }
  
  export const COUNTRY_LABELS: Record<COUNTRY, string> = {
    [COUNTRY.INDIA]: 'India',
    [COUNTRY.USA]: 'USA',
    [COUNTRY.UK]: 'UK',
    [COUNTRY.CANADA]: 'Canada',
    [COUNTRY.AUSTRALIA]: 'Australia',
    [COUNTRY.GERMANY]: 'Germany',
    [COUNTRY.FRANCE]: 'France',
    [COUNTRY.JAPAN]: 'Japan',
    [COUNTRY.CHINA]: 'China',
    [COUNTRY.SINGAPORE]: 'Singapore',
    [COUNTRY.UAE]: 'UAE'
  };

// Added constants for visa-related data
export enum VISA_COUNTRY {
  NETHERLAND = 1,
  FRANCE = 2,
  USA = 3
}

export const VISA_COUNTRY_LABELS: Record<VISA_COUNTRY, string> = {
  [VISA_COUNTRY.NETHERLAND]: 'Netherland',
  [VISA_COUNTRY.FRANCE]: 'France',
  [VISA_COUNTRY.USA]: 'United States Of America'
};

export enum VISA_CATEGORY {
  BUSINESS = 1,
  WORK = 2
}

export const VISA_CATEGORY_LABELS: Record<VISA_CATEGORY, string> = {
  [VISA_CATEGORY.BUSINESS]: 'Business',
  [VISA_CATEGORY.WORK]: 'Work'
};

export enum NATIONALITY {
  INDIAN = 1
}

export const NATIONALITY_LABELS: Record<NATIONALITY, string> = {
  [NATIONALITY.INDIAN]: 'Indian'
};

export enum ENTRY_TYPE {
  NORMAL = 1
}

export const ENTRY_TYPE_LABELS: Record<ENTRY_TYPE, string> = {
  [ENTRY_TYPE.NORMAL]: 'Normal'
};

export enum PROCESSING_BRANCH {
  VISAISTIC_DELHI = 1
}

export const PROCESSING_BRANCH_LABELS: Record<PROCESSING_BRANCH, string> = {
  [PROCESSING_BRANCH.VISAISTIC_DELHI]: 'Visaistic - Delhi'
};

export enum STATE {
    // Indian States
    ANDHRA_PRADESH = 1,
    ARUNACHAL_PRADESH = 2,
    ASSAM = 3,
    BIHAR = 4,
    CHHATTISGARH = 5,
    GOA = 6,
    GUJARAT = 7,
    HARYANA = 8,
    HIMACHAL_PRADESH = 9,
    JHARKHAND = 10,
    KARNATAKA = 11,
    KERALA = 12,
    MADHYA_PRADESH = 13,
    MAHARASHTRA = 14,
    MANIPUR = 15,
    MEGHALAYA = 16,
    MIZORAM = 17,
    NAGALAND = 18,
    ODISHA = 19,
    PUNJAB = 20,
    RAJASTHAN = 21,
    SIKKIM = 22,
    TAMIL_NADU = 23,
    TELANGANA = 24,
    TRIPURA = 25,
    UTTAR_PRADESH = 26,
    UTTARAKHAND = 27,
    WEST_BENGAL = 28,
    
    // Union Territories
    ANDAMAN_AND_NICOBAR_ISLANDS = 29,
    CHANDIGARH = 30,
    DADRA_AND_NAGAR_HAVELI_AND_DAMAN_AND_DIU = 31,
    DELHI = 32,
    JAMMU_AND_KASHMIR = 33,
    LADAKH = 34,
    LAKSHADWEEP = 35,
    PUDUCHERRY = 36,
    
    // Major US States (adding just a few for example)
    CALIFORNIA = 37,
    NEW_YORK = 38,
    TEXAS = 39,
    FLORIDA = 40,
    
    // Major UK regions
    ENGLAND = 41,
    SCOTLAND = 42,
    WALES = 43,
    NORTHERN_IRELAND = 44,
    
    // Major Canadian provinces
    ONTARIO = 45,
    QUEBEC = 46,
    BRITISH_COLUMBIA = 47,
    
    // Major Australian states
    NEW_SOUTH_WALES = 48,
    VICTORIA = 49,
    QUEENSLAND = 50
  }
  
  export const STATE_LABELS: Record<STATE, string> = {
    // Indian States
    [STATE.ANDHRA_PRADESH]: 'Andhra Pradesh',
    [STATE.ARUNACHAL_PRADESH]: 'Arunachal Pradesh',
    [STATE.ASSAM]: 'Assam',
    [STATE.BIHAR]: 'Bihar',
    [STATE.CHHATTISGARH]: 'Chhattisgarh',
    [STATE.GOA]: 'Goa',
    [STATE.GUJARAT]: 'Gujarat',
    [STATE.HARYANA]: 'Haryana',
    [STATE.HIMACHAL_PRADESH]: 'Himachal Pradesh',
    [STATE.JHARKHAND]: 'Jharkhand',
    [STATE.KARNATAKA]: 'Karnataka',
    [STATE.KERALA]: 'Kerala',
    [STATE.MADHYA_PRADESH]: 'Madhya Pradesh',
    [STATE.MAHARASHTRA]: 'Maharashtra',
    [STATE.MANIPUR]: 'Manipur',
    [STATE.MEGHALAYA]: 'Meghalaya',
    [STATE.MIZORAM]: 'Mizoram',
    [STATE.NAGALAND]: 'Nagaland',
    [STATE.ODISHA]: 'Odisha',
    [STATE.PUNJAB]: 'Punjab',
    [STATE.RAJASTHAN]: 'Rajasthan',
    [STATE.SIKKIM]: 'Sikkim',
    [STATE.TAMIL_NADU]: 'Tamil Nadu',
    [STATE.TELANGANA]: 'Telangana',
    [STATE.TRIPURA]: 'Tripura',
    [STATE.UTTAR_PRADESH]: 'Uttar Pradesh',
    [STATE.UTTARAKHAND]: 'Uttarakhand',
    [STATE.WEST_BENGAL]: 'West Bengal',
    
    // Union Territories
    [STATE.ANDAMAN_AND_NICOBAR_ISLANDS]: 'Andaman and Nicobar Islands',
    [STATE.CHANDIGARH]: 'Chandigarh',
    [STATE.DADRA_AND_NAGAR_HAVELI_AND_DAMAN_AND_DIU]: 'Dadra and Nagar Haveli and Daman and Diu',
    [STATE.DELHI]: 'Delhi',
    [STATE.JAMMU_AND_KASHMIR]: 'Jammu and Kashmir',
    [STATE.LADAKH]: 'Ladakh',
    [STATE.LAKSHADWEEP]: 'Lakshadweep',
    [STATE.PUDUCHERRY]: 'Puducherry',
    
    // US States
    [STATE.CALIFORNIA]: 'California',
    [STATE.NEW_YORK]: 'New York',
    [STATE.TEXAS]: 'Texas',
    [STATE.FLORIDA]: 'Florida',
    
    // UK regions
    [STATE.ENGLAND]: 'England',
    [STATE.SCOTLAND]: 'Scotland',
    [STATE.WALES]: 'Wales',
    [STATE.NORTHERN_IRELAND]: 'Northern Ireland',
    
    // Canadian provinces
    [STATE.ONTARIO]: 'Ontario',
    [STATE.QUEBEC]: 'Quebec',
    [STATE.BRITISH_COLUMBIA]: 'British Columbia',
    
    // Australian states
    [STATE.NEW_SOUTH_WALES]: 'New South Wales',
    [STATE.VICTORIA]: 'Victoria',
    [STATE.QUEENSLAND]: 'Queensland'
  };
  
  // Country to State mapping
  export const COUNTRY_STATES: Record<COUNTRY, STATE[]> = {
    [COUNTRY.INDIA]: [
      STATE.ANDHRA_PRADESH,
      STATE.ARUNACHAL_PRADESH,
      STATE.ASSAM,
      STATE.BIHAR,
      STATE.CHHATTISGARH,
      STATE.GOA,
      STATE.GUJARAT,
      STATE.HARYANA,
      STATE.HIMACHAL_PRADESH,
      STATE.JHARKHAND,
      STATE.KARNATAKA,
      STATE.KERALA,
      STATE.MADHYA_PRADESH,
      STATE.MAHARASHTRA,
      STATE.MANIPUR,
      STATE.MEGHALAYA,
      STATE.MIZORAM,
      STATE.NAGALAND,
      STATE.ODISHA,
      STATE.PUNJAB,
      STATE.RAJASTHAN,
      STATE.SIKKIM,
      STATE.TAMIL_NADU,
      STATE.TELANGANA,
      STATE.TRIPURA,
      STATE.UTTAR_PRADESH,
      STATE.UTTARAKHAND,
      STATE.WEST_BENGAL,
      STATE.ANDAMAN_AND_NICOBAR_ISLANDS,
      STATE.CHANDIGARH,
      STATE.DADRA_AND_NAGAR_HAVELI_AND_DAMAN_AND_DIU,
      STATE.DELHI,
      STATE.JAMMU_AND_KASHMIR,
      STATE.LADAKH,
      STATE.LAKSHADWEEP,
      STATE.PUDUCHERRY
    ],
    [COUNTRY.USA]: [
      STATE.CALIFORNIA,
      STATE.NEW_YORK,
      STATE.TEXAS,
      STATE.FLORIDA
    ],
    [COUNTRY.UK]: [
      STATE.ENGLAND,
      STATE.SCOTLAND,
      STATE.WALES,
      STATE.NORTHERN_IRELAND
    ],
    [COUNTRY.CANADA]: [
      STATE.ONTARIO,
      STATE.QUEBEC,
      STATE.BRITISH_COLUMBIA
    ],
    [COUNTRY.AUSTRALIA]: [
      STATE.NEW_SOUTH_WALES,
      STATE.VICTORIA,
      STATE.QUEENSLAND
    ],
    // Add default states for the newly added countries
    [COUNTRY.GERMANY]: [],
    [COUNTRY.FRANCE]: [],
    [COUNTRY.JAPAN]: [],
    [COUNTRY.CHINA]: [],
    [COUNTRY.SINGAPORE]: [],
    [COUNTRY.UAE]: []
  };

// City Options - Common Indian and International cities
export enum CITY {
  NEW_DELHI = 1,
  MUMBAI = 2,
  BANGALORE = 3,
  CHENNAI = 4,
  KOLKATA = 5,
  HYDERABAD = 6,
  PUNE = 7,
  AHMEDABAD = 8,
  JAIPUR = 9,
  SURAT = 10,
  // Add more cities as needed
}

export const CITY_LABELS: Record<CITY, string> = {
  [CITY.NEW_DELHI]: 'New Delhi',
  [CITY.MUMBAI]: 'Mumbai',
  [CITY.BANGALORE]: 'Bangalore',
  [CITY.CHENNAI]: 'Chennai',
  [CITY.KOLKATA]: 'Kolkata',
  [CITY.HYDERABAD]: 'Hyderabad',
  [CITY.PUNE]: 'Pune',
  [CITY.AHMEDABAD]: 'Ahmedabad',
  [CITY.JAIPUR]: 'Jaipur',
  [CITY.SURAT]: 'Surat',
  // Add more cities as needed
};




