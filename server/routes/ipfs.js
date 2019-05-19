const router = require('express').Router()
const passport = require('passport')
const HashInfo = require('../models/HashInfo')
const IPFS = require('ipfs-http-client');

// const ipfs = IPFS('ipfs.infura.io', '5001', {protocol: 'https'})

const ipfs = IPFS('localhost', '5001', {protocol: 'http'})

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
                let fileInfo = req

                console.log('req', req.body)
                const newHashInfo = new HashInfo ({
                        user: {
                        id: req.user.id,
                        login: req.user.login
                        },
                        type: fileInfo.body.type,
                        name: fileInfo.body.name,
                        ipfsHash: fileInfo.body.ipfsHash
                })
                newHashInfo.save()
                        .then( hashInfo => res.json(hashInfo) )
                        .catch(err => console.log(err))

        })

module.exports = router