// State Options - Comprehensive list of Indian states and union territories
// Country Options
export enum COUNTRY {
  UNITED_ARAB_EMIRATES = 1,
  SAUDI_ARABIA = 2,
  UNITED_STATES = 3,
  SINGAPORE = 4,
  THAILAND = 5,
  QATAR = 6,
  KUWAIT = 7,
  UNITED_KINGDOM = 8,
  MALAYSIA = 9,
  CANADA = 10,
  AUSTRALIA = 11,
  CHINA = 12,
  NEPAL = 13,
  SRI_LANKA = 14,
  OMAN = 15,
  INDONESIA = 16,
  BAHRAIN = 17,
  GERMANY = 18,
  FRANCE = 19,
  SOUTH_AFRICA = 20,
  ITALY = 21,
  NEW_ZEALAND = 22,
  SWITZERLAND = 23,
  JAPAN = 24,
  SOUTH_KOREA = 25,
  PHILIPPINES = 26,
  BANGLADESH = 27,
  RUSSIA = 28,
  EGYPT = 29,
  MAURITIUS = 30,
  MALDIVES = 31,
  NETHERLANDS = 32,
  SPAIN = 33,
  TURKEY = 34,
  VIETNAM = 35,
  GREECE = 36,
  HONG_KONG = 37,
  BRAZIL = 38,
  MEXICO = 39,
  SWEDEN = 40,
  NORWAY = 41,
  DENMARK = 42,
  BELGIUM = 43,
  AUSTRIA = 44,
  FINLAND = 45,
  IRELAND = 46,
  POLAND = 47,
  PORTUGAL = 48,
  CZECH_REPUBLIC = 49,
  HUNGARY = 50,
  INDIA = 51,
}

export const COUNTRY_DISPLAY_NAME: Record<COUNTRY, string> = {
  [COUNTRY.UNITED_ARAB_EMIRATES]: 'United Arab Emirates',
  [COUNTRY.SAUDI_ARABIA]: 'Saudi Arabia',
  [COUNTRY.UNITED_STATES]: 'United States',
  [COUNTRY.SINGAPORE]: 'Singapore',
  [COUNTRY.THAILAND]: 'Thailand',
  [COUNTRY.QATAR]: 'Qatar',
  [COUNTRY.KUWAIT]: 'Kuwait',
  [COUNTRY.UNITED_KINGDOM]: 'United Kingdom',
  [COUNTRY.MALAYSIA]: 'Malaysia',
  [COUNTRY.CANADA]: 'Canada',
  [COUNTRY.AUSTRALIA]: 'Australia',
  [COUNTRY.CHINA]: 'China',
  [COUNTRY.NEPAL]: 'Nepal',
  [COUNTRY.SRI_LANKA]: 'Sri Lanka',
  [COUNTRY.OMAN]: 'Oman',
  [COUNTRY.INDONESIA]: 'Indonesia',
  [COUNTRY.BAHRAIN]: 'Bahrain',
  [COUNTRY.GERMANY]: 'Germany',
  [COUNTRY.FRANCE]: 'France',
  [COUNTRY.SOUTH_AFRICA]: 'South Africa',
  [COUNTRY.ITALY]: 'Italy',
  [COUNTRY.NEW_ZEALAND]: 'New Zealand',
  [COUNTRY.SWITZERLAND]: 'Switzerland',
  [COUNTRY.JAPAN]: 'Japan',
  [COUNTRY.SOUTH_KOREA]: 'South Korea',
  [COUNTRY.PHILIPPINES]: 'Philippines',
  [COUNTRY.BANGLADESH]: 'Bangladesh',
  [COUNTRY.RUSSIA]: 'Russia',
  [COUNTRY.EGYPT]: 'Egypt',
  [COUNTRY.MAURITIUS]: 'Mauritius',
  [COUNTRY.MALDIVES]: 'Maldives',
  [COUNTRY.NETHERLANDS]: 'Netherlands',
  [COUNTRY.SPAIN]: 'Spain',
  [COUNTRY.TURKEY]: 'Turkey',
  [COUNTRY.VIETNAM]: 'Vietnam',
  [COUNTRY.GREECE]: 'Greece',
  [COUNTRY.HONG_KONG]: 'Hong Kong',
  [COUNTRY.BRAZIL]: 'Brazil',
  [COUNTRY.MEXICO]: 'Mexico',
  [COUNTRY.SWEDEN]: 'Sweden',
  [COUNTRY.NORWAY]: 'Norway',
  [COUNTRY.DENMARK]: 'Denmark',
  [COUNTRY.BELGIUM]: 'Belgium',
  [COUNTRY.AUSTRIA]: 'Austria',
  [COUNTRY.FINLAND]: 'Finland',
  [COUNTRY.IRELAND]: 'Ireland',
  [COUNTRY.POLAND]: 'Poland',
  [COUNTRY.PORTUGAL]: 'Portugal',
  [COUNTRY.CZECH_REPUBLIC]: 'Czech Republic',
  [COUNTRY.HUNGARY]: 'Hungary',
  [COUNTRY.INDIA]: 'India',
};

export const COUNTRY_LABELS: Partial<Record<COUNTRY, string>> = {
  [COUNTRY.INDIA]: 'India',
  [COUNTRY.UNITED_STATES]: 'USA',
  [COUNTRY.UNITED_KINGDOM]: 'UK',
  [COUNTRY.CANADA]: 'Canada',
  [COUNTRY.AUSTRALIA]: 'Australia',
  [COUNTRY.GERMANY]: 'Germany',
  [COUNTRY.FRANCE]: 'France',
  [COUNTRY.JAPAN]: 'Japan',
  [COUNTRY.CHINA]: 'China',
  [COUNTRY.SINGAPORE]: 'Singapore',
  [COUNTRY.UNITED_ARAB_EMIRATES]: 'UAE'
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
  export const COUNTRY_STATES: Partial<Record<COUNTRY, STATE[]>> = {
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
    [COUNTRY.UNITED_STATES]: [
      STATE.CALIFORNIA,
      STATE.NEW_YORK,
      STATE.TEXAS,
      STATE.FLORIDA
    ],
    [COUNTRY.UNITED_KINGDOM]: [
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
    [COUNTRY.GERMANY]: [],
    [COUNTRY.FRANCE]: [],
    [COUNTRY.JAPAN]: [],
    [COUNTRY.CHINA]: [],
    [COUNTRY.SINGAPORE]: [],
    [COUNTRY.UNITED_ARAB_EMIRATES]: []
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

export const VISA_COUNTRY_LABELS: Partial<Record<COUNTRY, string>> = {
  [COUNTRY.NETHERLANDS]: COUNTRY_DISPLAY_NAME[COUNTRY.NETHERLANDS],
  [COUNTRY.FRANCE]: COUNTRY_DISPLAY_NAME[COUNTRY.FRANCE],
  [COUNTRY.UNITED_STATES]: COUNTRY_DISPLAY_NAME[COUNTRY.UNITED_STATES]
};

// Create reverse mappings for easier lookups by name

// Reverse mapping of COUNTRY_DISPLAY_NAME (maps from display name to enum value)
export const DISPLAY_NAME_TO_COUNTRY: Record<string, COUNTRY> = Object.entries(COUNTRY_DISPLAY_NAME)
  .reduce((acc, [key, value]) => {
    acc[value] = Number(key) as COUNTRY;
    return acc;
  }, {} as Record<string, COUNTRY>);

// Reverse mapping of STATE_LABELS (maps from state name to enum value)
export const STATE_NAME_TO_STATE: Record<string, STATE> = Object.entries(STATE_LABELS)
  .reduce((acc, [key, value]) => {
    acc[value] = Number(key) as STATE;
    return acc;
  }, {} as Record<string, STATE>);

// Reverse mapping of NATIONALITY_LABELS (maps from nationality name to enum value)
export const NATIONALITY_NAME_TO_NATIONALITY: Record<string, NATIONALITY> = Object.entries(NATIONALITY_LABELS)
  .reduce((acc, [key, value]) => {
    acc[value] = Number(key) as NATIONALITY;
    return acc;
  }, {} as Record<string, NATIONALITY>);

// Reverse mapping of ENTRY_TYPE_LABELS (maps from entry type name to enum value)
export const ENTRY_TYPE_NAME_TO_ENTRY_TYPE: Record<string, ENTRY_TYPE> = Object.entries(ENTRY_TYPE_LABELS)
  .reduce((acc, [key, value]) => {
    acc[value] = Number(key) as ENTRY_TYPE;
    return acc;
  }, {} as Record<string, ENTRY_TYPE>);

// Reverse mapping of VISA_CATEGORY_LABELS (maps from visa category name to enum value)
export const VISA_CATEGORY_NAME_TO_VISA_CATEGORY: Record<string, VISA_CATEGORY> = Object.entries(VISA_CATEGORY_LABELS)
  .reduce((acc, [key, value]) => {
    acc[value] = Number(key) as VISA_CATEGORY;
    return acc;
  }, {} as Record<string, VISA_CATEGORY>);




