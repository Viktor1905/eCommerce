import { useNavigate } from 'react-router-dom';

export default function RoutingLink({
  additionalText,
  linkText,
  redirectTo,
}: {
  additionalText: string;
  linkText: string;
  redirectTo: string;
}) {
  const navigate = useNavigate();
  function onClick() {
    void navigate('/' + redirectTo);
  }
  return (
    <div className="flex gap-2 bg-white items-center p-2 justify-center font-additional">
      <span className="text-jungle">{additionalText}</span>
      <div onClick={onClick} className="text-jungle m-2 font-bold hover:cursor-pointer font-main">
        {linkText}
      </div>
    </div>
  );
}
