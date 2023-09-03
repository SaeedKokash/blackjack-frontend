import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import DeleteItem from './DeleteItem'
import UpdateItem from './UpdateItem'

function AdminItemTable({ items }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Id</Th>
            <Th>Options</Th>
            <Th>Images</Th>
            <Th>Title</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>

        {items &&
          items.map((item, index) => (
            <Tbody key={index}>
              <Tr>
                <Td>{index + 1}</Td>
                <Td>{item._id}</Td>
                <Td w="100%" display="flex" flexDirection="column" gap="1" h="150px"
                justifyContent="center"
                >
                  <UpdateItem item={item} />
                  <DeleteItem itemId={item._id} />
                </Td>
                <Td>
                  <Image src={item.images[0]} alt={item.title} w="100px" /> (
                  {item.images.length})
                </Td>
                <Td>
                  <Link to={`/product/${item.title.replace(/\s+/g, "-").toLowerCase()}`}>
                    {item.title}
                  </Link>
                </Td>
                <Td>{item.description.slice(0, 50)}</Td>
              </Tr>
            </Tbody>
          ))}
      </Table>
    </TableContainer>
  );
}

export default AdminItemTable;
