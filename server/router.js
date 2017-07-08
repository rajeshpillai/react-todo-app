module.exports = function (app) {
  app.get('*', (req, res) => {
    console.log("from server: ");
    res.render('layout/index', {
        title: "React with Express", 
        "body": "TODO APP"
        });
    });
}