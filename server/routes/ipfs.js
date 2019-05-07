const router = require('express').Router()
const passport = require('passport')
const HashInfo = require('../models/HashInfo')
const IPFS = require('ipfs-http-client');

const ipfs = IPFS('ipfs.infura.io', '5001', {protocol: 'https'})

router.route('/:userId')
        .get((req, res) => {
            HashInfo.find({ 'user.id' : req.params.userId })
                .sort({ createAt: -1 })
                .then(ipfsHashes => res.json(ipfsHashes))
                .catch(err => console.log(err))
        })

router.route('/hash-list')
        .post(passport.authenticate('jwt', {session: false}),(req, res) => {   
                HashInfo.find({ 'user.id' : req.user.id })
                .sort({ createAt: -1 })
                .then(ipfsHashes => res.json(ipfsHashes))
                .catch(err => console.log(err))        
        })

router.route('/add')
        .post(passport.authenticate('jwt', {session: false}),(req, res) => {    
                let fileUpload;
                let uploadPath;
                if (Object.keys(req.files).length == 0) {
                        return res.status(400).send('No files were uploaded.');
                }
                fileUpload = req.files.fileUpload
                console.log(fileUpload.name)
                ipfs.add(fileUpload.data, (err, results) => {
                        if(err) {
                          console.error(err)
                          return
                        }
                        let ipfsHash = results[0].hash 
                        console.log('ipfsHash', ipfsHash)
                        const newHashInfo = new HashInfo ({
                                user: {
                                        id: req.user.id,
                                        login: req.user.login
                                },
                                type: fileUpload.mimetype,
                                name: fileUpload.name,
                                ipfsHash: ipfsHash
                        })
                        newHashInfo.save()
                                .then( hashInfo => res.json(hashInfo) )
                                .catch(err => console.log(err))
                      });

        })

module.exports = router