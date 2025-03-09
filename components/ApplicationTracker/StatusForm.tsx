// components/StatusForm.tsx
import { StatusFormData } from "@component/types/application-tracker";
import { useForm } from "react-hook-form";

interface StatusFormProps {
  onSubmit: (data: StatusFormData) => void;
  isLoading: boolean;
}

const StatusForm = ({ onSubmit, isLoading }: StatusFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<StatusFormData>({
    defaultValues: {
      status: "Doc Received",
      queue: "In Transit Queue",
    },
  });

  const handleReset = () => {
    reset();
  };

  return (
    <div>
      <h2 className="text-[#1C1C1C] text-xl font-semibold mb-4">
        Check Realtime Status Online
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {/* Reference No */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reference No
            </label>
            <input
              type="text"
              className="w-full placeholder:text-[#8A8A8A] text-[#1C1C1C] focus:text-[#8A8A8A] rounded-md border border-gray-300 p-2 "
              {...register("referenceNo")}
            />
          </div>

          {/* Customer Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Type
            </label>
            <select
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500 text-[#1C1C1C]"
              {...register("customerType")}
            >
              <option value="">Select</option>
              <option value="individual">Individual</option>
              <option value="corporate">Corporate</option>
              <option value="agent">Agent</option>
            </select>
          </div>

          {/* Customer */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer
            </label>
            <input
              type="text"
              className="w-full placeholder:text-[#8A8A8A] text-[#1C1C1C] focus:text-[#8A8A8A] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("customer")}
            />
          </div>

          {/* Traveler's Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Traveler's Name
            </label>
            <input
              type="text"
              className="w-full placeholder:text-[#8A8A8A] text-[#1C1C1C] focus:text-[#8A8A8A] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("travelerName")}
            />
          </div>

          {/* Traveler's Passport No */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Traveler's Passport No
            </label>
            <input
              type="text"
              className="w-full placeholder:text-[#8A8A8A] text-[#1C1C1C] focus:text-[#8A8A8A] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("travelerPassportNo")}
            />
          </div>

          {/* Visa Branch */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visa Branch
            </label>
            <select
              className="w-full text-[#1C1C1C] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("visaBranch")}
            >
              <option value="">Select</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
            </select>
          </div>

          {/* Entry Generation Branch */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Entry Generation Branch
            </label>
            <select
              className="w-full text-[#1C1C1C] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("entryGenerationBranch")}
            >
              <option value="">Select</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
            </select>
          </div>

          {/* From Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From Date
            </label>
            <input
              type="date"
              className="w-full placeholder:text-[#8A8A8A] text-[#1C1C1C] focus:text-[#8A8A8A] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("fromDate")}
            />
          </div>

          {/* To Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To Date
            </label>
            <input
              type="date"
              className="w-full placeholder:text-[#8A8A8A] text-[#1C1C1C] focus:text-[#8A8A8A] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("toDate")}
            />
          </div>

          {/* Queue */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Queue
            </label>
            <select
              className="w-full text-[#1C1C1C] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("queue")}
            >
              <option value="In Transit Queue">In Transit Queue</option>
              <option value="Submission Queue">Submission Queue</option>
              <option value="Processing Queue">Processing Queue</option>
              <option value="Return Queue">Return Queue</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              className="w-full text-[#1C1C1C] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("status")}
            >
              <option value="Doc Received">Doc Received</option>
              <option value="Submitted">Submitted</option>
              <option value="In Process">In Process</option>
              <option value="Ready for Collection">Ready for Collection</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              className="w-full text-[#1C1C1C] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("country")}
            >
              <option value="">Select Country</option>
              <option value="spain">Spain</option>
              <option value="france">France</option>
              <option value="germany">Germany</option>
              <option value="italy">Italy</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>

          {/* Billing to Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Billing to Company
            </label>
            <input
              type="text"
              className="w-full placeholder:text-[#8A8A8A] text-[#1C1C1C] focus:text-[#8A8A8A] rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("billingToCompany")}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-700 border border-transparent rounded-md text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              "Check Status"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StatusForm;
