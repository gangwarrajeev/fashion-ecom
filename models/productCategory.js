module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory', {
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
     },
     image: {
        type: DataTypes.STRING,
        defaultValue:null,
        required:false
     },
     image_original_name: {
      type: DataTypes.STRING,
      defaultValue:null,
      required:false
   }
    },{
      'tableName':'product_categories'
    })
    // to delete user some key from return model
    ProductCategory.prototype.toJSON = function () {
        var values = Object.assign({}, this.get())
        delete values.userKey
        return values
    }
 
    // ProductCategory.sync() //if table not exists creates new
    // ProductCategory.sync({ force: true }) // forcefully recreate the table
    return ProductCategory
}
