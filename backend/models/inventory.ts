import { DataTypes } from 'sequelize'
import SequelizeSetup from '../database'
import { InventoryStatic } from '../interfaces/inventory'
import CollectionModel from './collection'

// Model defined here is for type purpose, db models with migrations are defined in inventory.sql
// cost and salePrice are in cents
const InventoryModel: InventoryStatic = SequelizeSetup.define('inventories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  category: {
    type: DataTypes.STRING(50)
  },
  collectionId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  s3Id: {
    type: DataTypes.TEXT
  },
  s3ThumbnailId: {
    type: DataTypes.TEXT
  },
  serialNumber: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.STRING(50)
  },
  cost: {
    type: DataTypes.INTEGER
  },
  salePrice: {
    type: DataTypes.INTEGER
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  }
}, {
  schema: 'inventa',
  tableName: 'inventories',
  timestamps: false
})

InventoryModel.belongsTo(CollectionModel, { foreignKey: 'collectionId' })
export default InventoryModel
