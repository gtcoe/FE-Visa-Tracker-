import { ChecklistDetail } from "@component/components/Checklist/ChecklistDetailView";
import { VISA_COUNTRY, VISA_CATEGORY, NATIONALITY, STATE } from '@component/constants/dropdown/geographical';

// Sample checklist data for different combinations
// The key format is '{country}-{category}-{nationality}-{state}'
export const sampleChecklistData: Record<string, ChecklistDetail> = {

  // France Work Visa for Indian nationals - This matches the second image
  [`${VISA_COUNTRY.FRANCE}-${VISA_CATEGORY.BUSINESS}-${NATIONALITY.INDIAN}-${STATE.DELHI}`]: {
    notes: ["Important notice about visa processing times", "Current COVID-19 protocol information"],
    requirements: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "Passport: Original Passport with validity of minimum six months and minimum two blank page for visa stamp.",
        subItems: [
          "Copy of the first and last page of your current valid passport. If you have any observations on your passport please submit a copy of the observation page.",
          "Attach all your old passports (if any)."
        ]
      },
      {
        id: 3,
        text: "Visa Application Form: One online DS-160 form duly filled and signed by the applicant. (Sample DS-160 Form)"
      },
      {
        id: 4,
        text: "The following also need to be submitted along with the application",
        subItems: [
          "Original Notice of Action-I 797",
          "Incase , Blanket L1 applicants must carry the original I-129 and a copy of the Notice of Action I-797"
        ]
      },
      {
        id: 5,
        text: "Valid Machine Readable Visa (MRV) fee receipt.",
        subItems: [
          "Please Note:",
          "For US MRV if the total amounts in one MRV is Rs.50,000 and above then Pan card copy of principal applicant is required"
        ]
      },
      {
        id: 6,
        text: "Interview Appointment letters : You must schedule two appointments,one for the visa interview at the Embassy or Consulate and one for the OFC.",
        subItems: [
          "You need to be present at the US Embassy or Consulate where the Appointment for the Visa Interview is scheduled.",
          "You need to be present at the OFC Facilitation Center (OFC) for the second appointment. This appointment will allow you to go to one of the five OFC locations to have your fingerprints and photo taken.",
          "This appointment must be at least 1 day before your visa interview appointment at the Embassy or Consulate."
        ]
      },
      {
        id: 7,
        text: "Photo Specification: Two recent passport size photographs with matt or semi matt finish, 80% face coverage, white background and without border (Size: 50mm x 50mm)"
      },
      {
        id: 8,
        text: "Covering Letter : Covering letter from applicant on company's letter head stating his name, designation, passport number, duration, purpose of travel and who is bearing his/her expenses. The letter should be addressed to: Consulate General of the United States of America,Kolkata."
      },
      {
        id: 9,
        text: "Work Visas must have a Petition approved by the \"Bureau of Citizenship and Immigration Service\". United States os America (BCIS) before applying for the Visa. The Petition is filed in USA."
      },
      {
        id: 10,
        text: "From Petitioner:",
        subItems: [
          "Copy of the petition with all supporting documents as filed to USCIS.",
          "Copy of the employment contract or letter of agreement signed by you and the petitioner.",
          "Petitioner's Income Tax Return for the last two tax years and financial statements.",
          "A notarized list of all the petitioner's employees of the job site listed. The list should show all employees' names, their specific job titles, start and end dates, and their individual salaries and immigration status.",
          "State Unemployment Wage Report, showing all wages paid to each employee in the state, for the past three quarters.(This should be the actual forms filed to the State authorities listing each employee and wages paid during the quarter)",
          "A copy of the contract between the U.S. employment agency (petitioner) and the job site (the location where you will actually work).",
          "A letter (on letterhead) from the personnel department at the U.S. job site stating that there is a vacancy for you."
        ]
      },
      {
        id: 11,
        text: "From You (or Your Working Family Member):",
        subItems: [
          "Your license to practice your profession in the U.S.",
          "Original or certified copies of your complete academic credentials.",
          "Evidence of previous work experience in the petitioned field.",
          "Evidence of extension of legal status in the U.S.",
          "If you were previously employed in the United States, your U.S. federal income tax returns and W-2 forms for those tax years.",
          "If you were previously employed in the United States, copies of all pay slips and monthly bank statements for the time you were employed.",
          "Original marriage certificate and wedding photos.",
          "Professional & Educational Certificates",
          "Resume / CV"
        ]
      },
      {
        id: 12,
        text: "Please Note :",
        subItems: [
          "Personal Appearance is Mandatory",
          "The above mentioned documents are required for H1(b) and L visa."
        ]
      }
    ],
    fees: [
      {
        entryType: "Normal",
        visaFee: 14820.00,
        vesFee: 0.00,
        remark: "Visa Fee can be paid by cash (Axis or Citi Bank) or Online Payment through Bank of America",
        chargeLocation: "Kolkata"
      }
    ]
  },

  // Default data for any combination that doesn't have specific data
  default: {
    notes: ["Important notice about visa processing times", "Current COVID-19 protocol information"],
    requirements: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "Passport: Original Passport with validity of minimum six months and minimum two blank page for visa stamp.",
        subItems: [
          "Copy of the first and last page of your current valid passport. If you have any observations on your passport please submit a copy of the observation page.",
          "Attach all your old passports (if any)."
        ]
      },
      {
        id: 3,
        text: "Visa Application Form: One online DS-160 form duly filled and signed by the applicant. (Sample DS-160 Form)"
      },
      {
        id: 4,
        text: "The following also need to be submitted along with the application",
        subItems: [
          "Original Notice of Action-I 797",
          "Incase , Blanket L1 applicants must carry the original I-129 and a copy of the Notice of Action I-797"
        ]
      },
      {
        id: 5,
        text: "Valid Machine Readable Visa (MRV) fee receipt.",
        subItems: [
          "Please Note:",
          "For US MRV if the total amounts in one MRV is Rs.50,000 and above then Pan card copy of principal applicant is required"
        ]
      },
      {
        id: 6,
        text: "Interview Appointment letters : You must schedule two appointments,one for the visa interview at the Embassy or Consulate and one for the OFC.",
        subItems: [
          "You need to be present at the US Embassy or Consulate where the Appointment for the Visa Interview is scheduled.",
          "You need to be present at the OFC Facilitation Center (OFC) for the second appointment. This appointment will allow you to go to one of the five OFC locations to have your fingerprints and photo taken.",
          "This appointment must be at least 1 day before your visa interview appointment at the Embassy or Consulate."
        ]
      },
      {
        id: 7,
        text: "Photo Specification: Two recent passport size photographs with matt or semi matt finish, 80% face coverage, white background and without border (Size: 50mm x 50mm)"
      },
      {
        id: 8,
        text: "Covering Letter : Covering letter from applicant on company's letter head stating his name, designation, passport number, duration, purpose of travel and who is bearing his/her expenses. The letter should be addressed to: Consulate General of the United States of America,Kolkata."
      },
      {
        id: 9,
        text: "Work Visas must have a Petition approved by the \"Bureau of Citizenship and Immigration Service\". United States os America (BCIS) before applying for the Visa. The Petition is filed in USA."
      },
      {
        id: 10,
        text: "From Petitioner:",
        subItems: [
          "Copy of the petition with all supporting documents as filed to USCIS.",
          "Copy of the employment contract or letter of agreement signed by you and the petitioner.",
          "Petitioner's Income Tax Return for the last two tax years and financial statements.",
          "A notarized list of all the petitioner's employees of the job site listed. The list should show all employees' names, their specific job titles, start and end dates, and their individual salaries and immigration status.",
          "State Unemployment Wage Report, showing all wages paid to each employee in the state, for the past three quarters.(This should be the actual forms filed to the State authorities listing each employee and wages paid during the quarter)",
          "A copy of the contract between the U.S. employment agency (petitioner) and the job site (the location where you will actually work).",
          "A letter (on letterhead) from the personnel department at the U.S. job site stating that there is a vacancy for you."
        ]
      },
      {
        id: 11,
        text: "From You (or Your Working Family Member):",
        subItems: [
          "Your license to practice your profession in the U.S.",
          "Original or certified copies of your complete academic credentials.",
          "Evidence of previous work experience in the petitioned field.",
          "Evidence of extension of legal status in the U.S.",
          "If you were previously employed in the United States, your U.S. federal income tax returns and W-2 forms for those tax years.",
          "If you were previously employed in the United States, copies of all pay slips and monthly bank statements for the time you were employed.",
          "Original marriage certificate and wedding photos.",
          "Professional & Educational Certificates",
          "Resume / CV"
        ]
      },
      {
        id: 12,
        text: "Please Note :",
        subItems: [
          "Personal Appearance is Mandatory",
          "The above mentioned documents are required for H1(b) and L visa."
        ]
      }
    ],
    fees: [
      {
        entryType: "Normal",
        visaFee: 14820.00,
        vesFee: 0.00,
        remark: "Visa Fee can be paid by cash (Axis or Citi Bank) or Online Payment through Bank of America",
        chargeLocation: "Kolkata"
      }
    ]
  }
}; 