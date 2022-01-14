module.exports= (sequelize,Datatypes) => {
    const TradingActivities = sequelize.define("TradingActivities",{
        id: {
            type: Datatypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       amount: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        currency: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        transactionDateTime: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        status: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        crypto: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        tradingType: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        tradingStatus: {
            type: Datatypes.STRING(150),
            allowNull: false,
        }
    });
    return TradingActivities
};