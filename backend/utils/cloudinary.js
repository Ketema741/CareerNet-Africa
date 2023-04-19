const config = require('config');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'ds373apvf',
    api_key: '264383778163642',
    api_secret: 'uiFLKpMQN9DTO4D3cl7qaXqAGTU'
});

module.exports = { cloudinary };