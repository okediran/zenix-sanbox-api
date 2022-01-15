module.exports= (sequelize,Datatypes) => {
    const Card = sequelize.define("Card",{
        id: {
            type: Datatypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       balance: {
            type: Datatypes.STRING
        },
        balanceCurrency: {
            type: Datatypes.STRING
        },
        cardType: {
            type: Datatypes.STRING(150)
        },
        cardCategory: {
            type: Datatypes.STRING(150)
        },
        cardholdername: {
            type: Datatypes.STRING(150)
        },
        validity: {
            type: Datatypes.STRING(150)
        }
    });
    return Card
};