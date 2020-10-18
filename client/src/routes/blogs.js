const express = require('express')
const router = express.Router()
const BlogPost = require('../models/blogmodel');
const Users = require('../models/usersmodel');
const bcrypt = require('bcrypt')

// Getting all
router.get('/getblogs', async (req, res) => {
  try {
    const blog = await BlogPost.find({})
    res.json(blog)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/getusers', async (req, res) => {
  try {
    const users = await Users.find({})
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


router.post('/save', async (req, res) => {
  try {
      const salt = await bcrypt.genSalt();
      const cryptPass = await bcrypt.hash(req.body.password, salt);
      const user = new Users({
          name: req.body.name,
          password: cryptPass
        })
        const newUser = await user.save()
        res.status(201).json('User: ' + newUser.name + ' was created succesfully!')
  } catch (error) {
      res.status(400).json({ message: err.message }) 
  }
})

router.post('/login', async (req, res) =>{
      const userInfo = await Users.find({name: req.body.name})
      // const name = userInfo[0].name;
      // console.log(req.body)
      // console.log(userInfo)
      const password = userInfo[0].password;
      if(userInfo == null){
          return res.status(400).send('User not found...')}
      try{
          if(await bcrypt.compare(req.body.pass, password)){
              res.status(202).send('Login successful!')
          }else{
              res.status(401).send('Login failed! Passwords do not match!')
          }
      }
      catch (err){
          res.status(500).send('Error: ' + err.message)
      }}
  )

// Getting a single blog
router.get('/:id', getBlog, (req, res) => {
  res.send(res.blog)
})
  
// // Creating one
router.post('/save', async (req, res) => {
    const blog = new BlogPost({
      title: req.body.title,
      country: req.body.country,
      img_url: req.body.img_url,
      snippet: req.body.snippet,
      body: req.body.body
    })
    try {
      const newBlog = await blog.save()
      res.status(201).json('Your Blog: ' + newBlog.title + ' was created succesfully!')
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

  //delete blog
  router.delete('/:id', getBlog, async (req, res) =>{
    try {
        await res.blog.remove()
        res.json({ message: 'Deleted Subscriber' })
    } catch (err) {
    res.status(500).json({ message: err.message })
    }
  })

  //update blog
  router.patch('/:id', getBlog, (req, res) =>{
    if(req.body.title != null){
        res.blog.title = req.body.title
    }
    if(req.body.country != null){
    res.blog.country = req.body.country
    }
    if(req.body.img_url != null){
        res.blog.img_url = req.body.img_url
    }
    if(req.body.snippet != null){
        res.blog.snippet = req.body.snippet
    }
    if(req.body.body != null){
        res.blog.body = req.body.body
    }
      try {
        const updatedBlog = res.blog.save()
        res.json({ message: 'Blog updated' })
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
  })


  async function getBlog(req, res, next) {
    let blog
    try {
      blog = await BlogPost.findById(req.params.id)
      if (blog == null) {
        return res.status(404).json({ message: 'Cannot find blog' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.blog = blog
    next()
  }
  //users collection
  
module.exports = router
