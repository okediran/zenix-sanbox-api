module.exports= (sequelize,Datatypes) => {
    const Card = sequelize.define("Card",{
        id: {
            type: Datatypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       balance: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        balanceCurrency: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        cardType: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        cardCategory: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        cardholdername: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        validity: {
            type: Datatypes.STRING(150),
            allowNull: false,
        }
    });
    return Card
};