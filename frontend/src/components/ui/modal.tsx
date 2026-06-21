/**
 * Modal Component
 *
 * Props:
 * - title: Modal heading
 * - isOpen: Show/hide modal
 * - onClose: Close handler
 */

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({
  title,
  isOpen,
  onClose,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        <p>This is a sample modal component.</p>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}