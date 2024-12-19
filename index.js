const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})
const upload = multer({ storage })

app.use(express.static('public'))

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'File uploaded successfully', file: req.file })
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))