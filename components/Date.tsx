import { parseISO, format } from "date-fns";

type DateProps = {
  dateString: string;
};
export const DateComponent: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};
