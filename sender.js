var  async=require('async');
var https = require('https');
var fs=require('fs')

var cheerio=require('cheerio');
var sql=require('./sql');
var MinOglasaKlase=20;
var arr=[];
var NoviOglasi=[];


var lastid=0;


function FindData(ch,th,str)
{
    var arrOfCom=[];

    arrOfCom=str.split('.');
    //console.log(arrOfCom);
    for(var i=0;i<arrOfCom.length;i++)
    {
        var otv=arrOfCom[i].indexOf('(');
        var zatv=arrOfCom[i].indexOf(')');
        
        if(arrOfCom[i].indexOf('eq')!=-1)
        {

            var string=arrOfCom[i].substr(otv+1,zatv-1);
            string=string.substr(0,string.length-1);
            //console.log(string);
            th=ch(th).eq(Number(string));
            continue;
        }
        else if(arrOfCom[i].indexOf('children')!=-1)
        {
            //var num=arrOfCom[i].substr(otv+1,zatv-1);
            th=ch(th).children();
            //console.log('children.');
        }
        else if(arrOfCom[i].indexOf('attr')!=-1)
        {
            var string=arrOfCom[i].substr(otv+1,arrOfCom[i].length-1);
            string=string.substr(0,string.length-1);
            th=ch(th).attr(string);
            //console.log('attr');
            return th;
        }
        else if(arrOfCom[i].indexOf('text')!=-1)
        {
            th=ch(th).text();
            return th;
        }

        else
        {
            console.log('Funckija FindData dobija parametar koji ne valja!');
        }
        //console.log(ch);
    }
    return ch(th);

}
function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}



function download(opt,callback) {
 //return true;
 https.get(opt, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
  });
    res.on("end", function() {
       // console.log(data,'ovde je ispis');
       
       callback(data);
   });
}).on("error", function() {
    callback(null);
});
}
var NizSajtova=[];
var sadasnji;
var brPagea=0
function wrapper()
{
    fs.readFile("t.txt","utf8",function(err,data)
    {

        var bin=data.split("!");
        
        for(var i=0;i<bin.length;i++)NizSajtova[i]=JSON.parse(bin[i]);

            async.each(NizSajtova,function(Sajt,callback)
            {

                sadasnji=Sajt;

               // console.log(sadasnji);
                console.log("Sending request so time is out!");
               var BrojOglasaKlase=[]
               for(k in sadasnji.class)BrojOglasaKlase[k]=0;
                var PageNum=1;
                //var responded=1;
                 var options = {
                        host: sadasnji.host,
                        path: sadasnji.path+sadasnji.page+PageNum,
                        method: sadasnji.request
                    };
                var brPagea=[]
               for(var k=0;k<1;k++)brPagea[k]=k;
                   
                    async.each(brPagea,function(Page,callback2)
                    {
                        download(options,function(data)
                        {
                            
                            console.log('odgovor');
                            var obj={}
                            var sm=cheerio.load(data,{
                             ignoreWhitespace: true,})

                            for(klasa in sadasnji.class)
                            {   
                                //console.log(sadasnji.class[klasa]);
                                    sm(sadasnji.class[klasa]).each(function(i,j)
                                    {
                               // console.log('a');
                                        BrojOglasaKlase[klasa]++;
                                        obj=clone(sadasnji)
                                        obj.id=FindData(sm,this,sadasnji.id);
                                        //console.log(obj.id);
                                        obj.cena=FindData(sm,this,sadasnji.cena);
                                        //console.log(obj.cena)

                                        //var temp=sm(this).children().eq(4).children()
                                        obj.naslov=FindData(sm,this,sadasnji.naslov)
                                        obj.grad=FindData(sm,this,sadasnji.grad)

                                        obj.opstina=FindData(sm,this,sadasnji.opstina)
                                        obj.mesto=FindData(sm,this,sadasnji.mesto)
                                        obj.ulica=FindData(sm,this,sadasnji.ulica)
                                        delete obj.class;
                                        obj.websitename=sadasnji.websitename;
                                        delete obj.host;
                                        delete obj.path;
                                        delete obj.page;
                                        delete obj.request;
                                        arr.push(clone(obj));

                                    })
                                    console.log('izlazim')
                                
                            }  
                            console.log('zavrsavam')
                            callback2();
  
                         })
                    },function(err)
                        {
                            console.log('ZAVRSIO PAGEEEVE');
                           /*  var b=1;
                            for(klasa in sadasnji.class)
                            {
                                if(BrojOglasaKlase[klasa]<MinOglasaKlase)
                                {
                                    b=0;
                                    break;
                                }
                            }
                            if(b!=0)break;
                            PageNum++;
                            options.path=sadasnji.path+sadasnji.page+PageNum;*/

                            if(!err)callback();
                            else console.log(err);
                        
                        })
                  
               
               
               
              
            },ubaci)
            
           
        });

}
function ubaci(err)
{           var temparr=[]

            if(err)console.log(err);
            var bro=0;
            for(i in arr)temparr[bro++]=clone(arr[i]);
                var exists=[];
           async.eachSeries(temparr,function(i,callback3)
            {

                
              var check="SHOW TABLES LIKE "+"'"+i.websitename+"'";
               sql.exec(check,null,function(res)
               {
                   
                   // console.log(res);
                    if(res.length)
                    {   
                         console.log('IMA TABELE');
                        sql.select('SELECT ulica from '+i.websitename+' WHERE ulica=\''+i.ulica+'\'',function(res)
                            {
                                console.log(res);
                                if(!res.length)
                                {
                                    NoviOglasi.push(i);
                                    //console.log('usao de')
                                    sql.exec('INSERT INTO '+i.websitename+' SET ?',i,function(data)
                                        {
                                            console.log('IZLAZAK')
                                        callback3();
                                        });
                                }
                                else
                                {
                                    callback3();//za async.eachseries mozda treba kao callback da ide null
                                }

                            });

                    }
                    else
                    {
                        console.log('NEMA TABLELE');
                
                        NoviOglasi.push(i);
                        sql.CreateTable(i.websitename,function(res)
                            {
                                sql.exec('INSERT INTO '+i.websitename+' SET ?',i,
                                 function(data)
                                    {
                                        callback3();
                                     });
                        
                            });
                        
                    }
               })
           },function(err)
           {
                if(!err)
                {
                    console.log(NoviOglasi);

                }
                else console.log(err);

           })
}

///setInterval(wrapper,10000);
wrapper()


