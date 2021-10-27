/*
File name: index.js
Author’s Name: Apple Coleene Duquinal
StudentID:  301000645
Web App Name: COMP229-M2021-MidTerm-301000645
*/  

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
