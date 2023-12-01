import { DataGrid } from "@mui/x-data-grid";
import { Paper } from '@mui/material';
import "./Grid.css";


const Grid = (props) => {
  const {data} = props;
  let headers =[];
 
  if(data){
headers=[
    {
      field: 'time',
      headerName: 'TimeStamp',
      width: 260,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: data[0].neAlias === null ? 'neType' : 'neAlias',
      headerName: data[0].neAlias === null ? 'NeType' : 'NeAlias',
      width: 250,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    // {
    //   field:"neType",
    //   headerName: "NeType",
    //   width: 250,
    //   editable: true,
    //   headerAlign: 'center',
    //   align: 'center',
    // },
    {
      field: 'rsL_INPUT_POWER',
      headerName: 'RSL INPUT POWER',
      type: 'number',
      width: 250,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'maxRxLevel',
      headerName: 'MAX RX LEVEL',
      width: 250,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'rsL_Deviation',
      headerName: 'RSL DEVIATION',
      type: 'number',
      width: 250,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
  ];

}

  const dataWithId = data?.map((d, index) => ({
    ...d,
    id: index,
  }));





  return (
    <>
      <div className="grid">
        <h2>Grid</h2>
        <Paper style={{ height: '36rem', width: '100%', marginTop: '1rem' }}>
          {data && (

            <DataGrid
            rows={dataWithId}
            columns={headers}
            pageSize={9}
            checkboxSelection
            disableSelectionOnClick
            />
            )}
        </Paper>
      </div>
    </>
  );
}

export default Grid;
