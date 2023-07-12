const { resolve } = require('path');
const {users, tasks} = require("../db/bdd.json")

exports.homeCtrl = (req, res) => {


  res.sendFile( resolve('public', 'home.html') );
};


exports.tasksListCtrl = (req, res) => {
  // Connexion à la BDD
  // Récupération des livres
  // Vérification de la cnx   
  res.json(tasks);
};
exports.userSelectCtrl = (req, res) => {
  // Connexion à la BDD
  // Récupération des livres
  // Vérification de la cnx   
  res.json(users);
};




exports.userIdCtrl =(req,res)=>{

  console.log(req.params.id);

  const filterTasks = tasks.filter(t=>t.user_id==req.params.id)


res.json(filterTasks);
}
















//Function

function updateJSON() {

  writeFileSync(

      resolve('db', 'bbd.json'),

      JSON.stringify({ tasks }, null, 2)

  );

}
