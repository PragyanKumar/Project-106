//https://teachablemachine.withgoogle.com/models/S7_VNRs-d/

//Startclassfication function//
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/S7_VNRs-d/model.json",modelReady)
    }
    
    //modelReady function//
    function modelReady(){
        classifier.classify(gotResults)
    }
    
    // gotResults function//
    function gotResults(error,results){
        console.log(gotResults)
    }