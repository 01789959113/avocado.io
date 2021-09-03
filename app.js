const express = require('express')
const app = express()
const path = require('path')
require('./db/connect')
const User = require('./models/model')

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;


// serving static file
app.use(express.static(path.join(__dirname, 'public')))

// setting ejs as template engine
app.set('view engine', 'ejs');

// using middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// home page
app.get('/', (req, res)=>{
    res.render('index.ejs',{title: 'Home'})
})

// about page
app.get('/about', (req, res)=>{
    res.render('about.ejs', {title: 'About'})
})

// client page
app.get('/client', (req, res)=>{
    res.render('client.ejs', {title : 'Client'})
})

// post request for client page
app.post('/client', async (req, res)=>{    
    try {
        let userList = new User(req.body)
        let errors = [];
        const {location , size , bedRoom , bathRoom , name , email, mobile , address} = req.body;
        if(!location || !size || !bedRoom || !bathRoom || !name || !email || !mobile || !address){
            errors.push({ msg: "Please fill all the field" })
        }
        if(mobile.length < 10){
            errors.push({ msg: "Mobile number should be at least 10 characters " })
        }
        if (errors.length > 0) {
            res.render('client', {
                title: 'Client',
                errors,
                name,
                email,
                mobile,
                address,
            })
        } else {
            // saving user data into database
            const saveUser = await userList.save()
            res.render('index', { title: 'Home' })
        }
        
        
    } catch (error) {
        console.log(error)
    }
})


// career page
app.get('/career', (req, res)=>{
    res.render('career.ejs', {title: 'Career'})
})

// post request for career page
app.post('/career', async(req, res)=>{
    try {
        const userList = new User(req.body);
        let errors = [];
        const {name, email, mobile, jobPosition, address, cv} = req.body;
        console.log(`${mobile} and ${jobPosition}`)
        if (!name || !email || !mobile || !jobPosition || !address || !cv) {
            errors.push({ msg: "Please fill all the field" })
        }
        if(mobile.length < 10){
            errors.push({ msg: "Mobile number should be at least 10 characters " })
        }
        if (errors.length > 0) {
            res.render('career', {
                title: 'Career',
                errors,
                name,
                email,
                mobile,
                address,
                cv
            })
        } else {
            // saving user data into database
            const saveUser = await userList.save()
            res.render('index', { title: 'Home' })
        }

    } catch (error) {
        console.log(error);
    }
})


// contact page
app.get('/contact', (req, res)=>{
    res.render('contact.ejs', {title: 'Contact'})
})

// post requset of contact page
app.post('/contact', async (req, res)=>{
    try {
        const userList = new User(req.body);
        let errors = [];
        const {name, email, mobile, subject, address} = req.body;
        // console.log(`${name} is ${email}`)
        if (!name || !email || !mobile || !subject || !address) {
            errors.push({ msg: "Please fill all the field" })
        }
        if(mobile.length < 10){
            errors.push({ msg: "Mobile number should be at least 10 characters " })
        }

        if (errors.length > 0) {
            res.render('contact', {
                title: 'Contact',
                errors,
                name,
                email,
                mobile,
                subject,
                address
            })
        } else {
            // saving user data into database
            const saveUser = await userList.save()
            res.render('index', { title: 'Home' })
        }

        
    } catch (error) {
        console.log(error)
    }

})


// latest project pages

// latest project one page
app.get('/latestProjectOne', (req, res)=>{
    res.render('latestProjectOne.ejs', {title : 'Latest Project One'})
})

// latest project two page
app.get('/latestProjectTwo', (req, res)=>{
    res.render('latestProjectTwo.ejs', {title: 'Latest Project Two'})
})
// latest project three page
app.get('/latestProjectThree', (req, res)=>{
    res.render('latestProjectThree.ejs', {title: 'Latest Project Three'})
})


// projects pages

// residential page
app.get('/residential', (req, res)=>{
    res.render('residential.ejs', {title: 'Residential'})
})

// commercial page 
app.get('/commercial', (req, res)=>{
    res.render('commercial', {title: 'Commercial'})
})

// land page
app.get('/land', (req, res)=>{
    res.render('land', {title: 'Land'})
})


// residential projects pages

// residential project one page
app.get('/residProOne', (req, res)=>{
    res.render('residProOne.ejs', {title : 'Residential Project One'})
})

// residential project two page
app.get('/residProTwo', (req, res)=>{
    res.render('residProTwo.ejs', {title : 'Residential Project Two'})
})

// residential project three page
app.get('/residProThree', (req, res)=>{
    res.render('residProThree.ejs', {title : 'Residential Project Three'})
})

// residential project four page
app.get('/residProFour', (req, res)=>{
    res.render('residProFour.ejs', {title : 'Residential Project Four'})
})

// residential project five page
app.get('/residProFive', (req, res)=>{
    res.render('residProFive.ejs', {title : 'Residential Project Five'})
})

// residential project six page
app.get('/residProSix', (req, res)=>{
    res.render('residProSix.ejs', {title : 'Residential Project Six'})
})


// commercial projects pages

// commercial project one page
app.get('/commerProOne', (req, res)=>{
    res.render('commerProOne.ejs', {title : 'Commercial Project One'})
})

// commercial project two page
app.get('/commerProTwo', (req, res)=>{
    res.render('commerProTwo.ejs', {title : 'Commercial Project Two'})
})

// commercial project three page
app.get('/commerProThree', (req, res)=>{
    res.render('commerProThree.ejs', {title : 'Commercial Project Three'})
})

// commercial project four page
app.get('/commerProFour', (req, res)=>{
    res.render('commerProFour.ejs', {title : 'Commercial Project Four'})
})

// commercial project five page
app.get('/commerProFive', (req, res)=>{
    res.render('commerProFive.ejs', {title : 'Commercial Project Five'})
})

// commercial project six page
app.get('/commerProSix', (req, res)=>{
    res.render('commerProSix', {title: 'Commercial Project Six'})
})



// land projects pages

// land porject one page
app.get('/landOne', (req, res)=>{
    res.render('landOne.ejs', {title : 'Land Project One'})
})

// land project two page
app.get('/landTwo', (req, res)=>{
    res.render('landTwo.ejs', {title : 'Land Project Two'})
})

// land project three page
app.get('/landThree', (req, res)=>{
    res.render('landThree.ejs', {title : 'Land Project Three'})
})

// land project four page
app.get('/landFour', (req, res)=>{
    res.render('landFour.ejs', {title : 'Land Project Four'})
})

// land project five page
app.get('/landFive', (req, res)=>{
    res.render('landFive.ejs', {title : 'Land Project Five'})
})

// error page
app.get('*', (req, res)=>{
    res.render('notfound.ejs', {title: 'Error'})
})


// server listening to port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
