
import { useContactsData } from "../../../hooks/useContactsData";

export default function ContactList() {
  const { isLoading, data } = useContactsData();
  console.log(data);
  return <div>ContactList</div>;
}
