const User = require('./user');
const Movie = require('./movie');
const Category = require('./category');

const models = {
        usersModels: require('./user'),
        moviesModels: require('./movie'),
    };
    Movie.belongsTo(Category, { foreignKey: 'category_name', targetKey: 'nameCategory' });
    Category.hasMany(Movie, { foreignKey: 'category_name', sourceKey: 'nameCategory' });

module.exports = models
