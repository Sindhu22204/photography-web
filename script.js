var images=['url("https://a-z-animals.com/media/2021/10/golden-retriever-in-meadow.jpg")',
            'url("https://media.istockphoto.com/id/610255060/photo/dog-licking-a-happy-man.jpg?s=612x612&w=0&k=20&c=pwtoYXDtbf33xvLos7ABS0N_hDiXg7DJgfnd81mnzi0=")',
            'url("https://www.thesprucepets.com/thmb/F-6m45bLy1Ecu2p-egqup7BPVzI=/2124x0/filters:no_upscale():strip_icc()/GoldenPuppy185743593-56a9c1f23df78cf772aa4a33.jpg")',
            'url("https://i.pinimg.com/474x/d0/d4/22/d0d4229fcde31c5fa70c5b65caedde31.jpg")',
            'url("https://www.shutterstock.com/image-photo/happy-handsome-young-man-play-260nw-2209548029.jpg")'];
var currentImageIndex=0;

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('full').style.backgroundImage = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('full').style.backgroundImage = images[currentImageIndex];
}

var testi=['url("https://images.squarespace-cdn.com/content/v1/60183f25d7835f347b6bef56/1642279909922-HJB1GM11H161YLU0T5WB/Wave.jpg")',
            'url("https://c8.alamy.com/comp/PGYNJ7/a-golden-retriever-hunting-dog-training-for-hunting-season-PGYNJ7.jpg")',
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQP3ueAFgtxHXHJsH58JpbNO52_Qvd28geog&usqp=CAU") ',
            'url("https://www.shutterstock.com/image-photo/golden-retriever-outdoor-training-process-260nw-158179946.jpg")'];
var count=0;

function back(){
    count=(count-1+testi.length)%testi.length;
    document.getElementById('t-img').style.backgroundImage=testi[count];
}
function front() {
    count = (count + 1) % testi.length;
    document.getElementById('t-img').style.backgroundImage = testi[count];
}