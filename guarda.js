img = "";
stats = "";

objects = [];

function setup()
{
    canvas = createCanvas(640, 400);
    canvas.position(350, 210);

    detectorObject = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objeto";
}

function preload()
{
    img = loadImage('Guarda-Roupa.jpeg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    
    if(stats != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Objeto Detectado";
            document.getElementById("quantidade").innerHTML = "Foram detectados " + objects.length + " Objetos";
            fill('red');
            porcentagem = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + porcentagem + "%", objects[i].x + 70, objects[i].y + 60);
            noFill();
            stroke('red');
            rect(objects[i].x + 70, objects[i].y + 60, objects[i].width + 100, objects[i].height + 100);
        }
    }
    else
    {
        document.getElementById("status").innerHTML = "Objeto Não Detectado";
    }
}

function start()
{
    detectorObject = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objeto";
}

function modelLoaded()
{
    console.log("O Modelo foi Carregado!");
    stats = true;
    detectorObject.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);

    objects = results;

    floor(objects);
    console.log(objects);
}

function voltar()
{
    location.replace('index.html');
}