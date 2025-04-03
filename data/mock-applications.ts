import { ApplicationData } from "@component/types/application-tracker";
import { COUNTRY } from "@component/constants/dropdown/geographical";

export const mockApplications: ApplicationData[] = [
  {
    refNo: "VIS23001",
    handlingBranch: "Delhi",
    entryGenerationBranch: "Delhi",
    agentCorporate: "Travel Experts",
    billingToCompany: "ABC Corp",
    referrer: "John Smith",
    country: COUNTRY.UNITED_STATES,
    visaType: "Tourist",
    status: "In Process"
  },
  {
    refNo: "VIS23002",
    handlingBranch: "Mumbai",
    entryGenerationBranch: "Mumbai",
    agentCorporate: "Global Travels",
    billingToCompany: "XYZ Ltd",
    referrer: "Sarah Johnson",
    country: COUNTRY.UNITED_KINGDOM,
    visaType: "Business",
    status: "Approved"
  },
  {
    refNo: "VIS23003",
    handlingBranch: "Bangalore",
    entryGenerationBranch: "Bangalore",
    agentCorporate: "Visa Services Inc",
    billingToCompany: "Tech Solutions",
    referrer: "Michael Brown",
    country: COUNTRY.CANADA,
    visaType: "Student",
    status: "Submitted"
  },
  {
    refNo: "VIS23004",
    handlingBranch: "Chennai",
    entryGenerationBranch: "Delhi",
    agentCorporate: "Easy Visa",
    billingToCompany: "Global Corp",
    referrer: "Lisa Davis",
    country: COUNTRY.AUSTRALIA,
    visaType: "Work",
    status: "Doc Received"
  },
  {
    refNo: "VIS23005",
    handlingBranch: "Hyderabad",
    entryGenerationBranch: "Hyderabad",
    agentCorporate: "Travel Masters",
    billingToCompany: "Innovative Tech",
    referrer: "James Wilson",
    country: COUNTRY.GERMANY,
    visaType: "Tourist",
    status: "Ready for Collection"
  },
  {
    refNo: "VIS23006",
    handlingBranch: "Kolkata",
    entryGenerationBranch: "Kolkata",
    agentCorporate: "Visa Pro",
    billingToCompany: "Smart Solutions",
    referrer: "David Miller",
    country: COUNTRY.FRANCE,
    visaType: "Business",
    status: "In Process"
  },
  {
    refNo: "VIS23007",
    handlingBranch: "Pune",
    entryGenerationBranch: "Pune",
    agentCorporate: "GlobeWide",
    billingToCompany: "Future Tech",
    referrer: "Elizabeth Taylor",
    country: COUNTRY.SPAIN,
    visaType: "Tourist",
    status: "Submitted"
  },
  {
    refNo: "VIS23008",
    handlingBranch: "Delhi",
    entryGenerationBranch: "Mumbai",
    agentCorporate: "Travel Services",
    billingToCompany: "Global Solutions",
    referrer: "Robert Johnson",
    country: COUNTRY.ITALY,
    visaType: "Student",
    status: "Doc Received"
  },
  {
    refNo: "VIS23009",
    handlingBranch: "Mumbai",
    entryGenerationBranch: "Delhi",
    agentCorporate: "Visa Experts",
    billingToCompany: "Digital Corp",
    referrer: "Patricia Lewis",
    country: COUNTRY.JAPAN,
    visaType: "Work",
    status: "Approved"
  },
  {
    refNo: "VIS23010",
    handlingBranch: "Bangalore",
    entryGenerationBranch: "Bangalore",
    agentCorporate: "Global Travels",
    billingToCompany: "Modern Tech",
    referrer: "Thomas Williams",
    country: COUNTRY.UNITED_STATES,
    visaType: "Tourist",
    status: "Ready for Collection"
  }
]; 