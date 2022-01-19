module.exports= (sequelize,Datatypes) => {
    const Wallet = sequelize.define("Wallet",{
        id: {
            type: Datatypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        balance: {
            type: Datatypes.STRING(150),
        },
        balanceCurrency: {
            type: Datatypes.STRING(150),
        },
        WalletType: {
            type: Datatypes.STRING(150),
        },
        percentageRise: {
            type: Datatypes.INTEGER,
        }
    });
    return Wallet
};