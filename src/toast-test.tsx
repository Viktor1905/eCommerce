import { toast } from 'react-toastify';

export default function ToastTester() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h3>Toasts</h3>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => toast.success('Success toast!')}
      >
        Show Success Toast
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => toast.error('Error toast!')}
      >
        Show Error Toast
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => toast.warn('Warn toast!')}
      >
        Show Warn Toast
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => toast.info('Info toast!')}
      >
        Show Info Toast
      </button>
    </div>
  );
}
