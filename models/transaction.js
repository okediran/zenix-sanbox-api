module.exports= (sequelize,Datatypes) => {
    const Transaction = sequelize.define("Transaction",{
        id: {
            type: Datatypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       walletId: {
            type: Datatypes.INTEGER,
        },
        transactionId: {
            type: Datatypes.INTEGER,
        },
        amount: {
            type: Datatypes.DECIMAL,
        },
        transferId: {
            type: Datatypes.INTEGER,
        }
    });
    return Transaction
};