const User = require('./user');
const Movie = require('./movie');
const Category = require('./category');
const Seen = require('./seen');

const models = {
        usersModels: require('./user'),
        moviesModels: require('./movie'),
        categoriesModels: require('./category'),
        seenModels: require('./seen'),
    };

    Movie.belongsTo(Category, { foreignKey: 'category_name', targetKey: 'nameCategory' });
    Category.hasMany(Movie, { foreignKey: 'category_name', sourceKey: 'nameCategory' });

    User.belongsToMany(Movie, { through: Seen, foreignKey: 'idUser', otherKey: 'idMovie', as: 'movies', sourceKey: 'email' });
    Movie.belongsToMany(User, { through: Seen, foreignKey: 'idMovie', otherKey: 'idUser', as: 'users', sourceKey: 'title' });

module.exports = models
