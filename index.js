import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const apiSearchName = "https://openlibrary.org/search.json";
const apiGetCover = "https://covers.openlibrary.org/b/id/";
var flag = false ;
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "store",
    password: "1234",
    port: 5433,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


async function hArr(){
    const result = await db.query("SELECT * FROM books ORDER BY ID ASC;");
    if(result.rows.length > 0){
        flag = true;
    }
    return result.rows;
}


app.get("/", async (req,res)=>{
    const kingArr = await hArr();
    res.render("index.ejs" , {
        flag : flag ,
        myArr : kingArr 
    });
});

app.post("/add" , async (req,res)=>{
        flag = true;
            try {
            const searchUrl = await axios.get(apiSearchName , {
                params :{
                        title : req.body.title
                }
            });
            const searchUrlJso = searchUrl.data ;   
            const searchUrl2 = apiGetCover + `${searchUrlJso.docs[0].cover_i}-M.jpg`;
            await db.query("INSERT INTO books (title , link , notes , rating) VALUES ( $1 ,$2 , $3 , $4);" ,[req.body.title, searchUrl2, req.body.notes, req.body.rating]);
       
       
        } 
        catch (err) {
            console.log(err);
        }

        res.redirect("/");
});

app.post("/edit" , async (req,res)=>{
    const kingArr = await db.query("SELECT * FROM books WHERE id = $1 ;" , [req.body.bookId]);
    console.log(kingArr);
    res.render("edit.ejs" , {
        myArr : kingArr.rows[0]
    });
});

app.post("/update" , async (req, res)=>{
    await db.query("UPDATE books SET title = $1 , rating = $2 , notes = $3 WHERE id = $4 ;",[req.body.title , req.body.rating , req.body.notes , req.body.bookId ]);
    res.redirect("/");
});

app.post("/remove" , async (req, res)=>{
 await db.query("DELETE FROM books WHERE id = $1 ;" , [req.body.bookId]);
 res.redirect("/");
});


app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
});