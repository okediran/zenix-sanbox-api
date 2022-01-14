module.exports= (sequelize,Datatypes) => {
    const Transaction = sequelize.define("Transaction",{
        id: {
            type: Datatypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       walletId: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        transactionId: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        amount: {
            type: Datatypes.STRING(150),
            allowNull: false,
            unique: true
        },
        transferId: {
            type: Datatypes.STRING(150),
            allowNull: false,
        }
    });
    return Transaction
};