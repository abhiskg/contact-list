import { Table } from "reactstrap";
import { useContactsData } from "../../../hooks/useContactsData";

export default function ContactList() {
  const { isLoading, data } = useContactsData();
  console.log(data);
  return (
    <div>
      <h2>Contact List</h2>
      <Table bordered hover striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phoneNo}</td>
              <td>{contact.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
