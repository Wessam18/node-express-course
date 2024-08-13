const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://wessamabdelnabi4:wessam1812@nodeexpress.tluqngo.mongodb.net/03-task-manager?retryWrites=true&w=majority&appName=NodeExpress'


mongoose
.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('CONNECTED TO DB...'))
.catch((err) => console.log(err))
