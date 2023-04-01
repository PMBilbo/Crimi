$(document).ready(function() {
    $.get('tareas.json',function(data){
        var content = JSON.parse(data);
        console.log(content)
    })
});