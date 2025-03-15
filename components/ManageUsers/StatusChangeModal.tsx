import React from 'react';
import { User } from './ManageUsers';
import { USER_STATUS,  USER_STATUS_REVERSE, USER_DISPLAY_STATUS_ACTIVE, USER_DISPLAY_STATUS_INACTIVE} from '../../constants/userConstants';

interface StatusChangeModalProps {
  user: User;
  onCancel: () => void;
  onConfirm: () => void;
}

const StatusChangeModal = ({ user, onCancel, onConfirm }: StatusChangeModalProps) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="bg-white p-6 w-[400px] h-[200px]">
        <h2 className="text-xl font-medium mb-2 text-xl text-[#1C1C1C]">Change status?</h2>
        <p className="text-gray-600 mb-10 text-sm font-normal text-black">
          Are you sure you want to change the status from {USER_STATUS_REVERSE[user.status]} to{' '}
          {user.status === USER_STATUS.ACTIVE ? USER_DISPLAY_STATUS_INACTIVE : USER_DISPLAY_STATUS_ACTIVE}?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="w-[115px] h-[36px] text-[#0B498B] rounded-xl font-medium text-sm border border-[#0B498B] px-8 py-2 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-[115px] h-[36px] text-sm px-8 py-2 bg-[#0B498B] text-white rounded-xl font-medium"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusChangeModal; 