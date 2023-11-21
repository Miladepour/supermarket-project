import Table from "react-bootstrap/Table";

function ExampleTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Unit Price</th>
          <th>Special Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>60</td>
          <td>3 for 150</td>
        </tr>
        <tr>
          <td>B</td>
          <td>30</td>
          <td>2 for 45</td>
        </tr>
        <tr>
          <td>C</td>
          <td>30</td>
          <td></td>
        </tr>
        <tr>
          <td>D</td>
          <td>25</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ExampleTable;
