const db = require("../models");

module.exports = {
    create: async (req, res) => {
        const { balance, balanceCurrency, WalletType,percentageRise} = req.body;
    
        db. Wallet.create({ balance, balanceCurrency, WalletType,percentageRise})
        .then(() => {
            res.json({"message":"created"}).status(200)
        })
        .catch((err) => {
            res.json(err.errors)
        });
       
    },
    retrieve: async (req, res) => {
        db.Wallet.findAll()
        .then(data=>{
        res.status(200).json(data)
        })
        .catch( errors => {
            res.status(400).json(errors)
        });
    },
    update: async (req, res) => {
        const { balance, balanceCurrency,WalletType,percentageRise} = req.body;
        const updateWallet = {}
        if(balance)
            updateWallet['balance']=balance
        if(balanceCurrency)
            updateWallet['balanceCurrency']=balanceCurrency
        if(WalletType)
            updateWallet['WalletType']=WalletType
        if(percentageRise)
            updateWallet['percentageRise']=percentageRise
        db.Wallet.update(updateWallet,{where: {id:req.params.id}})
        .then(()=>{
        res.status(200).json({"message": "updated"})
        })
        .catch( errors => {
            res.status(400).json(errors)
        });
    },
    destroy: async (req, res) => {
        db.Wallet.destroy({where: {id:req.params.id}})
        .then(()=>{
        res.status(200).json({"message": "deleted"})
        })
        .catch( errors => {
            res.status(400).json(errors)
        });
    }
};

