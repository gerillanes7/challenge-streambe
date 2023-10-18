import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Avatar,
  Skeleton,
} from "@chakra-ui/react";
import { ITable } from "./types";
import { UserData } from "../../../domain/entities/UserDto";

export const Table = ({ data = [], columns, loading }: ITable) => {
  return (
    <TableContainer >
      <Skeleton isLoaded={loading !== "loading"} >
        <ChakraTable variant="striped" >
          <TableCaption>Streambe</TableCaption>
          <Thead>
            <Tr>
              {columns?.map((column: string) => (
                <Th key={column}>{column}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((row: UserData) => (
              <Tr key={row.contactId}>
                <Td>
                  {row.name} {row.surnames}
                </Td>
                <Td>{row.birthDate}</Td>
                <Td>
                  <Avatar src={row.photo as string} />
                </Td>
              </Tr>
            ))}
          </Tbody>
          {data.length < 0 && <Heading>No data</Heading>}
        </ChakraTable>
      </Skeleton>
    </TableContainer>
  );
};
