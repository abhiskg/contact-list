import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/axios.utils";
import { toast } from "react-hot-toast";

type ContactInputTypes = {
  name: string;
  email: string;
  phoneNo: string;
  address: string;
};

type ContactDataTypes = ContactInputTypes & {
  _id: string;
};

const fetchAllContactsData: () => Promise<ContactDataTypes[]> = () => {
  return request({ url: `/api/v1/contacts/all` });
};

export const useContactsData = () => {
  return useQuery(["contacts"], () => fetchAllContactsData());
};

const createNewContact = (products: ContactInputTypes) => {
  return request({
    url: `/api/v1/contact/new`,
    method: "post",
    data: products,
  });
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewContact, {
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
      toast.success("New Contact Added");
    },
  });
};
