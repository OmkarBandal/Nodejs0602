let getHomePage = (req, res) => {
res.status(200).json({ "msg":"Home Page" });
}

let getAboutPage = (req, res) => {
 res.status(200).json({ "msg":"About Page" });
}
let getContactPage = (req, res) => {
 res.status(200).json({ "msg":"Contact Page" });
}

let postSubmitData= (req, res)=>{
    res.status(200).json({ "msg":"Data Submitted Successfully", "data": req.body });
}

module.exports={getHomePage, getAboutPage, getContactPage, postSubmitData};