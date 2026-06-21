/**
 * Button Component
 *
 * Props:
 * - label: Button text
 * - onClick: Function triggered on click
 */

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      {label}
    </button>
  );
}