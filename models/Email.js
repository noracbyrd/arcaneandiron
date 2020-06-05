// Email model - sign-ups for the mailing list
module.exports = function (sequelize, DataTypes) {
    const Email = sequelize.define("Email", {
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                unique: true
            },
            allowNull: false,
        }
    });
    return Email;
};





