module.exports= (sequelize,Datatypes) => {
    const User = sequelize.define("User",{
        id: {
            type: Datatypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        fullname: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        lastname: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        email: {
            type: Datatypes.STRING(150),
            allowNull: false,
            unique: true
        },
        password: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        language: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        skills: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        age: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        location: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        yearOfexperience: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        aboutme: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        availability: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        job: {
            type: Datatypes.STRING(150),
            allowNull: false,
        }
    });
    return User
};