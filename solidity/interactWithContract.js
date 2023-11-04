const { ethers, JsonRpcProvider } = require('ethers');
const express = require('express');

require('dotenv').config();
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BRAND = process.env.BRAND;
const BRAND_FACTORY = process.env.BRAND_FACTORY;
const PAUSER = process.env.PAUSER;
const MODERATOR1 = process.env.MODER1;
const MODERATOR2 = process.env.MODER2;

const provider = new ethers.providers.JsonRpcProvider(API_KEY);

const pauser = new ethers.Wallet(PAUSER, provider);
const moderator1 = new ethers.Wallet(MODERATOR1, provider);
const moderator2 = new ethers.Wallet(MODERATOR2, provider);

const {abi : brandAbi} = require('./out/Brand.sol/Brand.json');
const {abi : brandFactoryAbi} = require('./out/BrandFactory.sol/BrandFactory.json');
const brandInstance = new ethers.Contract(BRAND, brandAbi, provider);
const brandFactoryInstance = new ethers.Contract(BRAND_FACTORY, brandFactoryAbi, provider);

const contractInstancePauser = brandFactoryInstance.connect(pauser);
const contractInstanceModerator1 = brandFactoryInstance.connect(moderator1);
const contractInstanceModerator2 = brandFactoryInstance.connect(moderator2);

app = express();
app.use(express.json());

let i = 0;

app.get('/moderators', async (req, res) => {
    try {
        const moderatorsList = await brandFactoryInstance.getModeratorsList();
        res.json(moderatorsList);
    } catch (error) {
        console.error('Error getting moderators list', error);
    }
})

app.get('/pauser', async (req, res) => {
    try {
        const pauser = await brandFactoryInstance.getPauser();
        res.json(pauser);
    } catch (error) {
        console.error('Error getting pauser', error);
    }
})

app.put('/upVotePauser', async (req, res) => {
    try {
        const { newContractPauser } = req.body;
        const tx = await contractInstanceModerator2.upVotePauser(newContractPauser, {gasLimit: 5000000});
        await tx.wait();
        res.json('Pauser upvoted');
    } catch (error) {
        console.error('Error upvoting pauser', error);
    }
});

app.put('/downVotePauser', async (req, res) => {
    try {
        const { newContractPauser } = req.body;
        const tx = await contractInstanceModerator2.downVotePauser(newContractPauser, {gasLimit: 5000000});
        await tx.wait();
        res.json('Pauser downvoted');
    } catch (error) {
        console.error('Error downvoting pauser', error);
    }
});

app.put('/upVoteModerator_add', async (req, res) => {
    try {
        const { newContractModerator } = req.body;
        const tx = await contractInstanceModerator2.upVoteModerator_add(newContractModerator, {gasLimit: 5000000});
        await tx.wait();
        res.json('Moderator upvoted');
    } catch (error) {
        console.error('Error upvoting moderator', error);
    }
});

app.put('/downVoteModerator_add', async (req, res) => {
    try {
        const { newContractModerator } = req.body;
        const tx = await contractInstanceModerator2.downVoteModerator_add(newContractModerator, {gasLimit: 5000000});
        await tx.wait();
        res.json('Moderator downvoted');
    } catch (error) {
        console.error('Error downvoting moderator', error);
    }
});

app.put('/upVoteModerator_remove', async (req, res) => {
    try {
        const { newContractModerator } = req.body;
        const tx = await contractInstanceModerator2.upVoteModerator_remove(newContractModerator, {gasLimit: 5000000});
        await tx.wait();
        res.json('Moderator upvoted');
    } catch (error) {
        console.error('Error upvoting moderator', error);
    }
}); 

app.put('/downVoteModerator_remove', async (req, res) => {
    try {
        const { newContractModerator } = req.body;
        const tx = await contractInstanceModerator2.downVoteModerator_remove(newContractModerator, {gasLimit: 5000000});
        await tx.wait();
        res.json('Moderator downvoted');
    } catch (error) {
        console.error('Error downvoting moderator', error);
    }
});

app.put('/addModerator', async (req, res) => {
    try {
        const { newContractModerator } = req.body;
        const tx = await contractInstanceModerator2.attributeModeratorRole(newContractModerator, {gasLimit: 5000000});
        await tx.wait();
        res.json('Moderator added');
    } catch (error) {
        console.error('Error adding moderator', error);
    }
});

app.put('/removeModerator', async (req, res) => {
    try {
        const { newContractModerator } = req.body;
        const tx = await contractInstanceModerator2.removeModeratorRole(newContractModerator, {gasLimit: 5000000});
        await tx.wait();
        res.json('Moderator removed');
    } catch (error) {
        console.error('Error removing moderator', error);
    }
});

app.get('/pauseContract', async (req, res) => {
    try {
        const tx = await contractInstancePauser.pauseContract({gasLimit: 5000000});
        await tx.wait();
        res.json('Contract paused');
    } catch (error) {
        console.error('Error pausing contract', error);
    }
});

app.get('/unpauseContract', async (req, res) => {
    try {
        const tx = await contractInstancePauser.unpauseContract({gasLimit: 5000000});
        await tx.wait();
        res.json('Contract unpaused');
    } catch (error) {
        console.error('Error unpausing contract', error);
    }
});

app.post('/addBrand', async (req, res) => {
    try {
        const { EIN, brandName, info } = req.body;
        const tx = await contractInstancePauser.addBrand(EIN, brandName, info, {gasLimit: 5000000});
        await tx.wait();
        res.json('Brand created');
    } catch (error) {
        console.error('Error creating brand', error);
    }
});

app.put('/upVoteBrand_add', async (req, res) => {
    try {
        const { EIN } = req.body;
        const tx = await contractInstanceModerator1.upVoteBrand_add(EIN, {gasLimit: 5000000});
        await tx.wait();
        res.json('Brand upvoted');
    } catch (error) {
        console.error('Error upvoting brand', error);
    }
});

app.put('/downVoteBrand_add', async (req, res) => {
    try {
        const { EIN } = req.body;
        const tx = await contractInstanceModerator1.downVoteBrand_add(EIN, {gasLimit: 5000000});
        await tx.wait();
        res.json('Brand downvoted');
    } catch (error) {
        console.error('Error downvoting brand', error);
    }
});

app.put('/upVoteBrand_remove', async (req, res) => {
    try {
        const { EIN } = req.body;
        const tx = await contractInstanceModerator1.upVoteBrand_remove(EIN, {gasLimit: 5000000});
        await tx.wait();
        res.json('Brand upvoted');
    } catch (error) {
        console.error('Error upvoting brand', error);
    }
}); 

app.put('/downVoteBrand_remove', async (req, res) => {
    try {
        const { EIN } = req.body;
        const tx = await contractInstanceModerator1.downVoteBrand_remove(EIN, {gasLimit: 5000000});
        await tx.wait();
        res.json('Brand downvoted');
    } catch (error) {
        console.error('Error downvoting brand', error);
    }
});

app.put('/changeBrandsName', async (req, res) => {
    try {
        const { EIN, newName } = req.body;
        const tx = await contractInstancePauser.changeBrandsName(EIN, newName, {gasLimit: 5000000});
        await tx.wait();
        res.json('Brand name changed');
    } catch (error) {
        console.error('Error changing brand name', error);
    }
});

app.put('/changeBrandsEIN', async (req, res) => {
    try {
        const { EIN, newEIN } = req.body;
        const tx = await contractInstancePauser.changeBrandsEIN(EIN, newEIN, {gasLimit: 5000000});
        await tx.wait();
        res.json('Brand EIN changed');
    } catch (error) {
        console.error('Error changing brand EIN', error);
    }
});

app.put('/upgradeBrandsInfo', async (req, res) => {
    try {
        const { EIN, newInfo } = req.body;
        const tx = await contractInstancePauser.upgradeBrandsInfo(EIN, newInfo, {gasLimit: 5000000});
        await tx.wait();
        res.json('Brand info upgraded');
    } catch (error) {
        console.error('Error upgrading brand info', error);
    }
});

app.get('/getBrand', async (req, res) => {
    try {
        const { EIN } = req.body;
        const brand = await brandInstance.getBrand(EIN);
        res.json(brand);
    } catch (error) {
        console.error('Error getting brand', error);
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});


// async function upVotePauser 
