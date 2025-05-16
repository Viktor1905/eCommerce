type OKModalDialogProps = {
  title: string;
  message: React.ReactNode;
  buttonText: string;
  closeModal: () => void;
} & React.DialogHTMLAttributes<HTMLDialogElement>;

export default function OKModalDialog({
  title,
  message,
  buttonText,
  closeModal,
}: OKModalDialogProps) {
  return (
    <div className="fixed backdrop-blur-[2px] inset-0 backdrop-brightness-[.7] flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md flex flex-col gap-4 items-center text-center">
        <h2 className="text-2xl font-bold text-goldenrod font-additional">{title}</h2>
        <p className="font-main text-lg text-olive pt-4 pb-4">{message}</p>
        <button
          onClick={closeModal}
          className="w-fit min-w-3xs bg-jungle text-white px-4 py-2 rounded-xl text-lg font-main hover:bg-opacity-90"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
