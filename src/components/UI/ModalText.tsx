interface ModalTextProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}

export const ModalText: React.FC<ModalTextProps> = ({ isOpen, onClose, text, modalType }: ModalTextProps) => {
  if (!isOpen) return null;

  return (
    <div className='absolute inset-0 top-42 left-285 z-10 flex items-center'>
      <div className='relative w-96 rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-lg'>{text}</div>
    </div>
  );
};
