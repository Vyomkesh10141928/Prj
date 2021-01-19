Webcam.set({
    width: 310,
    height: 300,
    img_format: 'png',
    png_quality: '90',

    constraints: {
        facingMode: 'enviornment'
    }

});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">'

    });
}
console.log("ml5 Version-", ml5.version);
classifier = ml5.imageClassifier('Mobilenet', modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!!!");
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotData);
}

function gotData(error, results) {
    if (error) {
        console.error(error);
    } else {
console.log(results);
document.getElementById("object_nameM").innerHTML = results[0].label;
    }

}