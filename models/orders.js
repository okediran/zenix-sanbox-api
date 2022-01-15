module.exports= (sequelize,Datatypes) => {
    const Order = sequelize.define("Order",{
        id: {
            type: Datatypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       orderType: {
            type: Datatypes.STRING(150)
        },
        Coin: {
            type: Datatypes.STRING
        },
        price: {
            type: Datatypes.DECIMAL
        },
        amount: {
            type: Datatypes.DECIMAL
        },
        total: {
            type: Datatypes.STRING
        },
        currency: {
            type: Datatypes.STRING
        }
    });
    return Order
};