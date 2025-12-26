export const BrakeDiscIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <line x1="14.12" y1="14.12" x2="18.36" y2="18.36" />
      <line x1="9.88" y1="9.88" x2="5.64" y2="5.64" />
      <line x1="14.12" y1="9.88" x2="18.36" y2="5.64" />
      <line x1="9.88" y1="14.12" x2="5.64" y2="18.36" />
    </svg>
  );
  