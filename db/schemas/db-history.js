import { DataTypes } from 'sequelize';

export default {
  schema: {
    m_version: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    m_prefix: {
      type: DataTypes.STRING,
      allowNull: false
    },
    m_version_updated: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  options: {
    
  }
};