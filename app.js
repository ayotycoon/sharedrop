const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');

const apiRouter = require('./routes/api');
let port = process.env.PORT || 8080;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', apiRouter);


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/public/index.html"));
});


const server = app.listen(port, () => {
    console.log("connected to server " + port);
});

function handleDelete(filePath) {
    setTimeout(() => {
        if (fs.statSync(filePath)) {
            fs.unlinkSync(filePath);
        } 
    }, 600000);

}
const hash = {}

const io = require('socket.io')(server);
io.on('connection', (socket) => {

    socket.on('create', (data) => {
        socket.join(data.code)
        if (!data.isJoin) {
            hash[data.code] = true;

        } else {
  
            if (!hash[data.code]) {
               
                
                io.to(socket.id).emit('404', true)
                return
            }

        }
        socket.code = data.code
        const infoData = {
            length: Object.keys(io.sockets.adapter.rooms[data.code].sockets).length
        }

        io.to(data.code).emit('info', infoData)

        io.to(socket.id).emit('sync', data.code)

    })
    socket.on('disconnect', () => {
        if (socket.code) {
            if (io.sockets.adapter.rooms[socket.code]) {
                const infoData = {
                    length: Object.keys(io.sockets.adapter.rooms[socket.code].sockets).length
                }

                io.to(socket.code).emit('info', infoData)
            } else {
                if (hash[socket.code]){
                    delete hash[socket.code]
                }
              
            }

         

           
        }
   

    })

    socket.on('message', (data) => {


        if (data.isFile) {

            if(data.isMobile) {
                let base64String = data.file.data
                // Remove header
                let base64File = base64String.split(';base64,').pop();



                const filePathName = Number(new Date()) + data.file.name
                const filePath = path.resolve(__dirname, './tmp/' + filePathName)





                fs.writeFile(filePath, base64File, {
                    encoding: 'base64',
                    flag: "w"
                }, (err) => {
                    if (err) {
                        console.log(err)
                    }
                    if (err) return io.to(data.code).emit('upload error', error);

                    data.file.data = filePathName;
                    const splitFileName = data.file.name.split('.');
                    data.file.ext = splitFileName[splitFileName.length - 1];

                    handleDelete(filePath)
                    data.date = new Date();
                    io.to(data.code).emit('message', data)
                });



                return
            }
            const fileBuffer = new Buffer.from(data.file.data);
            const filePathName = Number(new Date()) + data.file.name
            const filePath = path.resolve(__dirname, './tmp/' + filePathName)
           
           
           
           
           
            fs.writeFile(filePath, fileBuffer, {
                flag: "w"
            }, (err) => {
                if (err) {
                    console.log(err)
                }
                    if (err) return io.to(data.code).emit('upload error', error);

                data.file.data = filePathName;
                    const splitFileName = data.file.name.split('.');
                    data.file.ext = splitFileName[splitFileName.length - 1];

                    handleDelete(filePath)
                    data.date = new Date();
                io.to(data.code).emit('message', data)
            });


            return
        }

        data.date = new Date();

        io.to(data.code).emit('message', data)


    })

})

module.exports = app;
