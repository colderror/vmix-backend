const express = require('express')
const axios = require('axios')
const app = express()

app.get('/', (req, res) => {
    const options = {
        url: 'http://192.168.1.235:8088/',
        method: 'GET',
    }
    axios.get('http://192.168.1.235:8088/').then((response)=>{
        console.log(`Test Good ${response}`)
        res.send("Test Good")
    }).catch(()=>{
        console.log("Test Bad")
    })
    // axios({options}).then((response)=>{
    //     console.log(response);
    // }).catch((error)=>{
    //     console.log(error)
    // })
});

app.listen(3000)
