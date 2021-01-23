import React from 'react'
import MUIDataTable from "mui-datatables"
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from "@material-ui/core";
import { InventoryComponentProps } from '../../interfaces/inventory';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import EmptyImage from '../../static/empty.jpg'


const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      sort: true,
      filter: false
    }
  },
  {
    name: "serialNumber",
    label: "Serial Number",
    options: {
      sort: true,
      filter: false
    }
  },
  {
    name: "quantity",
    label: "Quantity",
    options: {
      sort: true,
      filter: true
    }
  },
  {
    name: "category",
    label: "Category",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "status",
    label: "Status",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "cost",
    label: "Cost (MYR)",
    options: {
      sort: true,
      filter: false
    }
  },
  {
    name: "salePrice",
    label: "Sale Price (MYR)",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    name: "createdAt",
    label: "Created At",
    options: {
      sort: false,
      filter: false
    }
  }
]

const options = {
  filterType: 'checkbox' as any,
}

const useTableStyles = makeStyles((theme) => ({
  titleWrapper: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  mainTitle: {
    marginRight: '10px'
  },
  subTitle: {
    marginLeft: '10px'
  },
  emptyImage: {
    alignSelf: 'center',
    width: 'max-content'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  newInventoryButton: {
    maxWidth: '30%',
    marginTop: '3%',
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70%',
    },
  }
}))

export default function Inventories({ inventoriesState, openCreateInventoryDialog }: InventoryComponentProps): JSX.Element {
  const classes = useTableStyles()

  const inventoriesData = () => inventoriesState.map(inventory => ({
    name: inventory.name,
    serialNumber: inventory.serialNumber,
    quantity: inventory.quantity,
    category: inventory.category,
    status: inventory.status,
    cost: inventory.cost,
    salePrice: inventory.salePrice,
    createdAt: inventory.createdAt
  }))

  const tableTitle = () => {
    return (
      <div className={classes.titleWrapper}>
        <Typography className={classes.mainTitle} component="span" variant="h5" color="primary" noWrap>
          <span>AstraZenga</span>
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography className={classes.subTitle} component="span" variant="subtitle1" noWrap>
          <span>Inventories</span>
        </Typography>
      </div>
    )
  }

  const inventoriesTable = () => {
    if (!inventoriesData().length) {
      return (
        <Paper className={classes.paper}>
          <img src={EmptyImage} className={classes.emptyImage} />
          <Button
            className={classes.newInventoryButton}
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutlineOutlinedIcon />}
            onClick={() => { openCreateInventoryDialog() }}
          >
            Add New Inventory
          </Button>
        </Paper>
      )
    }
    return (
      <MUIDataTable
        title={tableTitle()}
        data={inventoriesData()}
        columns={columns}
        options={options}
      />
    )
  }

  return (
    <React.Fragment>
      {
        inventoriesTable()
      }
    </React.Fragment>
  )
}