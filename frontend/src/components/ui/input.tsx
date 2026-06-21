/**
 * Input Component
 *
 * Props:
 * - placeholder: Input placeholder text
 * - type: Input type
 */

type InputProps = {
  placeholder: string;
  type?: string;
};

export default function Input({
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded px-3 py-2 w-full"
    />
  );
}