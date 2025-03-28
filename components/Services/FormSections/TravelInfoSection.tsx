// "use client";

// import React, { memo } from 'react';
// import { FORM_MODE } from '@component/constants/formConstants';
// import DateInput from './DateInput';

// interface TravelInfoProps {
//   travelInfo: {
//     travelDate: string;
//     personalAppearance: string;
//     fileNo: string;
//   };
//   submissionType: string;
//   isFixed: boolean;
//   handleTravelInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
//   handleRadioChange: (value: string) => void;
//   handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   createDateChangeAdapter: (handler: any) => any;
//   handleTabChange: (tabName: string) => void;
//   formMode: FORM_MODE;
// }

// const TravelInfoSection: React.FC<TravelInfoProps> = ({
//   travelInfo,
//   submissionType,
//   isFixed,
//   handleTravelInfoChange,
//   handleRadioChange,
//   handleCheckboxChange,
//   createDateChangeAdapter,
//   handleTabChange,
//   formMode
// }) => {
//   return (
//     <div className="mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden">
//       <div className="bg-[#F6F7F9] py-4 px-6 border-b border-gray-200">
//         <p className="text-[15px] font-medium text-[#0B498B]">Travel Details</p>
//       </div>
      
//       <div className="p-6">
//         <div className="grid grid-cols-4 gap-6">
//           <DateInput
//             name="travelDate"
//             value={travelInfo.travelDate}
//             onChange={createDateChangeAdapter(handleTravelInfoChange)}
//             label="Travel Date"
//             required={true}
//             readOnly={formMode === FORM_MODE.VIEW}
//           />
          
//           <DateInput
//             name="personalAppearance"
//             value={travelInfo.personalAppearance}
//             onChange={createDateChangeAdapter(handleTravelInfoChange)}
//             label="Personal Appearance/Interview Date"
//             readOnly={formMode === FORM_MODE.VIEW}
//           />
          
//           <div className='col-span-2'>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               File No/Company Name
//             </label>
//             <input
//               type="text"
//               name="fileNo"
//               value={travelInfo.fileNo}
//               onChange={handleTravelInfoChange}
//               placeholder="Enter name"
//               className={`w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === FORM_MODE.VIEW ? 'bg-gray-100' : 'bg-white'}`}
//               readOnly={formMode === FORM_MODE.VIEW}
//             />
//           </div>
//         </div>
        
//         <div className="flex items-center space-x-8 mt-4">
//           <div className={`flex items-center space-x-2 ${formMode === FORM_MODE.VIEW ? 'opacity-70' : ''}`}>
//             <input
//               type="radio"
//               id="tentative"
//               checked={submissionType === 'tentative'}
//               onChange={() => handleRadioChange('tentative')}
//               className="h-4 w-4 text-[#0B498B] focus:ring-[#0B498B]"
//               disabled={formMode === FORM_MODE.VIEW}
//             />
//             <label htmlFor="tentative" className="text-sm font-medium text-gray-700">
//               Tentative
//             </label>
//           </div>
          
//           <div className={`flex items-center space-x-2 ${formMode === FORM_MODE.VIEW ? 'opacity-70' : ''}`}>
//             <input
//               type="radio"
//               id="fixed"
//               checked={submissionType === 'fixed'}
//               onChange={() => handleRadioChange('fixed')}
//               className="h-4 w-4 text-[#0B498B] focus:ring-[#0B498B]"
//               disabled={formMode === FORM_MODE.VIEW}
//             />
//             <label htmlFor="fixed" className="text-sm font-medium text-gray-700">
//               Fixed
//             </label>
//           </div>
          
//           <div className="ml-12 text-sm font-medium text-gray-700">
//             Priority Submission
//           </div>
          
//           <div className={`flex items-center space-x-2 ${formMode === FORM_MODE.VIEW ? 'opacity-70' : ''}`}>
//             <input
//               type="checkbox"
//               id="isFixed"
//               checked={isFixed}
//               onChange={handleCheckboxChange}
//               className="h-4 w-4 text-[#0B498B] focus:ring-[#0B498B] rounded"
//               disabled={formMode === FORM_MODE.VIEW}
//             />
//             <label htmlFor="isFixed" className="text-sm font-medium text-gray-700">
//               Fixed
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default memo(TravelInfoSection); 