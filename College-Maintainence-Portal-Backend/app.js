const express=require('express')
const app=express()
const authRoutes=require('./Routes/authRoutes')
const PORT=3500
const cors=require('cors')
const connectToDb=require('./connect/MongooseConnect')

const databaseName = 'mongodb+srv://narukaayushi02:IvOl3TUBXUfOLuSG@cluster0.rfpilfr.mongodb.net/?retryWrites=true&w=majority'


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/auth', authRoutes)

async function mongoConnect() {
    await connectToDb(databaseName)
        .then((result) => {
            console.log(result)
            app.listen(PORT, () => {
                console.log('Server started on port ' + 'http://localhost:' + PORT);
            });
        })
}

mongoConnect();  
