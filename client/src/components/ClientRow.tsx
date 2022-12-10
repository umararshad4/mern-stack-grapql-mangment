import { useMutation } from "@apollo/client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

export interface ClientType {
  id: string;
  name: string;
  email: string;
  phone: string;
}
export interface ClientRowType {
  client: ClientType;
}
const ClientRow = ({ client }: ClientRowType) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    //not a good way because in a bigger application your request too much client again and again after little update
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients }: any = cache.readQuery({
    //     query: GET_CLIENTS,
    //   });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter(
    //         (client: any) => client.id !== deleteClient.id
    //       ),
    //     },
    //   });
    // },
  });
  return (
    <tr>
      <td>{client.name} </td>
      <td>{client.email} </td>
      <td>{client.phone} </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteClient()}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
