const express = require('express')

const app = express();

app.get("/users", (req, res) => {
    res.json({
        status: 200,
        data: [
            {
                name: "siva",
            },
            {
                name: "kumar",
            },
            {
                name: "akash",
            }
        ]
    })
})

// changes

app.listen(4001, () => {
    console.log('Users app is running on port 4001')
})