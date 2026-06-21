/**
 * Toast Component
 *
 * Props:
 * - message: Toast message
 */

type ToastProps = {
  message: string;
};

export default function Toast({ message }: ToastProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  );
}