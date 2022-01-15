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
            allowNull: true
        },
        skills: {
            type: Datatypes.STRING(150),
            allowNull: true
        },
        age: {
            type: Datatypes.STRING(150),
            allowNull: true
        },
        location: {
            type: Datatypes.STRING(150),
            allowNull: true
        },
        yearOfexperience: {
            type: Datatypes.STRING(150),
            allowNull: true
        },
        aboutme: {
            type: Datatypes.STRING(150),
            allowNull: true
        },
        availability: {
            type: Datatypes.STRING(150),
            allowNull: true
        },
        job: {
            type: Datatypes.STRING(150),
            allowNull: true
        }
    });
    return User
};