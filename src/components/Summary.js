import { Theme, Table } from '@radix-ui/themes'

const Summary = ({ gpa }) => {
  return (
    <Theme>
      <Table.Root variant="surface" size="3">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Semester</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>GPA</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>1</Table.RowHeaderCell>
            <Table.Cell>{gpa[0][0]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>2</Table.RowHeaderCell>
            <Table.Cell>{gpa[0][1]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>3</Table.RowHeaderCell>
            <Table.Cell>{gpa[0][2]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>4</Table.RowHeaderCell>
            <Table.Cell>{gpa[0][3]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>5</Table.RowHeaderCell>
            <Table.Cell>{gpa[0][4]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>6</Table.RowHeaderCell>
            <Table.Cell>{gpa[0][5]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>7</Table.RowHeaderCell>
            <Table.Cell>{gpa[0][6]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>8</Table.RowHeaderCell>
            <Table.Cell>{gpa[0][7]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>CGPA</Table.RowHeaderCell>
            <Table.Cell>{gpa[1]}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Theme>
  )
}

export default Summary
