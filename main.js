function startClassification() {

    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/llH2fMRqo/model.json",modelReady);

}

function modelReady() {

    classifier.classify(gotresults());
    
    }

    function gotResult(error,results) {

        if (error){
        
        console.error(error);
        
        }
    }