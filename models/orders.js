module.exports= (sequelize,Datatypes) => {
    const Order = sequelize.define("Order",{
        id: {
            type: Datatypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       orderType: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        Cryto: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        price: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        amount: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        total: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        currency: {
            type: Datatypes.STRING(150),
            allowNull: false,
        }
    });
    return Order
};