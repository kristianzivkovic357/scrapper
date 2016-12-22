
var mysql = require('mysql');
var express=require('express');
var app=express();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Advertising'
});

connection.connect();
var select=function select(query,callback)
{
  connection.query(query, function(err, rows, fields) {
    //console.log("fields:",fields);
    if (!err)
     callback(rows)
   else
    {console.log('Error while performing Query.');console.log(err)}
  //console.log(rows.length);
});
}
var exec = function (query,data,callback)
{
  //console.log('EXEC')
  if(data)
  {
    //console.log(data)

     //console.log(data[il]);
      connection.query(query,data,function(err,res)
      {
    //console.log('EVO MMEEEE')
        if(err)console.log(err);

        //else console.log(err);
        else if(callback!=null)callback(res);
    
      });
    
}

  else
  {
  //console.log('USO 2')
  connection.query(query,function(err,res)
  {
   if(!err)console.log(res);
   else console.log(err);
   if(callback!=null)callback(res);
   
 });
}
}
var CreateTable= function(name,callback)
{
  var tabela='CREATE TABLE '+name
  +' (ids int(15) NOT NULL AUTO_INCREMENT, '
  +'type VARCHAR(40), '
  +'nacinkupovine VARCHAR(40), '
  +'websitename VARCHAR(150), '
  +'domain VARCHAR(150), '
  +'img VARCHAR(150), '
  +'naslov VARCHAR(40), '
  +'drzava VARCHAR(40), '
  +'grad VARCHAR(40), '
  +'opstina VARCHAR(40), '
  +'mesto VARCHAR(40), '
  +'ulica VARCHAR(40), '
  +'text VARCHAR(1000), '
  +'cena VARCHAR(40), '
  +'id VARCHAR(40), '
  +'PRIMARY KEY(ids))ENGINE = InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;';
console.log(tabela);
exec(tabela,null,function(res)
  {
      callback(res);
  });
}

module.exports={select,exec,connection,CreateTable}