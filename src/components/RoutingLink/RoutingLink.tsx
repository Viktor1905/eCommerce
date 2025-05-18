export default function RoutingLink({
  additionalText,
  linkText,
}: {
  additionalText: string;
  linkText: string;
}) {
  return (
    <div className="flex gap-2 bg-white items-center p-2 justify-center font-additional">
      <span className="text-jungle">{additionalText}</span>
      <a href="#" className="text-jungle m-2 font-bold  font-main">
        {linkText}
      </a>
    </div>
  );
}
