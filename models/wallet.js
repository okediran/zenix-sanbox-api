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
            allowNull: false,
        },
        balanceCurrency: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        WalletType: {
            type: Datatypes.STRING(150),
            allowNull: false,
        },
        percentageRise: {
            type: Datatypes.STRING(150),
            allowNull: false,
        }
    });
    return Wallet
};