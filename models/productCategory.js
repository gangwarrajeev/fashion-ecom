module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('product_categories', {
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
        default:null,
        required:false,
     }
    })
    // to delete user some key from return model
    ProductCategory.prototype.toJSON = function () {
        var values = Object.assign({}, this.get())
        delete values.userKey
        return values
    }
    console.log('prudctCate',ProductCategory)
    // User.sync() //if table not exists creates new
    // ProductCategory.sync({ force: true }) // forcefully recreate the table
    return ProductCategory
}
