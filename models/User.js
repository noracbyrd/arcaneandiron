// user model - sign-ups for the mailing list
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        first_name: {
            type: DataTypes.STRING,
            validate: {
            // validate that we are using letters, including hyphens
                is: /^[A-Za-z\-]+$/i
            }
        },
        last_name: {
            type: DataTypes.STRING,
            // validate that we are using letters, including hyphens
            is: /^[A-Za-z\-]+$/i
        },
        email: {
            type: DataTypes.STRING,
            //validate that it is an email
            isEmail: true
        }
    });
    return User;
};





