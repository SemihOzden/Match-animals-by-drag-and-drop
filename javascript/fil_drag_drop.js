$(init);
var rastgeleArr=[];

function rastgeleFunc(){
    while(rastgeleArr.length < 5){
        var number = Math.floor(Math.random()*5)+1;
        if(rastgeleArr.indexOf(number) > -1) continue;
        rastgeleArr[rastgeleArr.length] = number;        
    }
    for(var i=0;i<5;i++){
        //objecs are created
        $('#objects').append("<div id='fil"+rastgeleArr[i]+"'></div>");
        $('#fil'+rastgeleArr[i]).css('float','left').css('margin-left','25px').css('margin-top','70px');
        
        //target droppable objects are created
        $('#targetShadows').append("<div id='filShadow"+rastgeleArr[i]+"'></div>");
        $('#filShadow'+rastgeleArr[i]).css('float','left').css('margin-left','25px').css('margin-top','70px');
        
        //Make objects draggable
        $('#fil'+rastgeleArr[i]).appendTo('#objects').draggable({
            containment:'#container',
            stack:'#objects div',
            cursor:'pointer',
            revert:true
        });
        //Create Droppable Objects
         $('#filShadow'+rastgeleArr[i]).appendTo('#targetShadows').droppable({
            drop: handleObjectDrop
        });
        
    }
}

function init(){
    $(rastgeleFunc);      
}
function ObjectsKonumlandir(targetObject,filObject){
    $('#'+filObject).draggable( 'disable' );
    $('#'+targetObject).droppable( 'disable' );
    $('#'+targetObject).css('opacity','0');
    $('#'+filObject).position( { of: $('#'+targetObject), my: 'left top', at: 'left top' } );
    $('#'+filObject).draggable( 'option', 'revert', false );
}

//When drop operation is happened run handleOnjectDrop
function handleObjectDrop(event,ui){
    var targetObject=$(this).attr('id');
    var filObject=ui.draggable.attr('id');
    var targetObjectCut=targetObject.slice(-1);
    var filObjectCut=filObject.slice(-1);

    //Objectler doğru yere drop edildiği kontrol ediliyor
    if(filObjectCut==1 && targetObjectCut==3){
       ObjectsKonumlandir(targetObject,filObject);
    }else if(filObjectCut==2 && targetObjectCut==4){
        ObjectsKonumlandir(targetObject,filObject);
    }else if(filObjectCut==3 && targetObjectCut==2){
        ObjectsKonumlandir(targetObject,filObject);
    }else if(filObjectCut==4 && targetObjectCut==5){
        ObjectsKonumlandir(targetObject,filObject);
    }else if(filObjectCut==5 && targetObjectCut==1){
        ObjectsKonumlandir(targetObject,filObject);
    }
}
