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
        // gotResults function//
function gotResults(error,results){
    if (error) {
        console.error(error)
    } else {
        random_number_r = Math.ceil(Math.random()*255) + 1
        random_number_g = Math.ceil(Math.random()*255) + 1
        random_number_b = Math.ceil(Math.random()*255) + 1
        document.getElementById("result_label").innerHTML= "I can hear- " + results[0].label
        document.getElementById("result_confidence").innerHTML= "Accuracy- " + (results[0].confidence*100).toFixed(2) + " %"
        document.getElementById("result_label").style.color="rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
 
        //Variable//
         img=document.getElementById("Crow")
         img2=document.getElementById("WOLF")
         img3=document.getElementById("Dog")
         img4=document.getElementById("Elephant")
 
         // Noise works//
     if (results[0].label== "Crow") {
         img.src="Crowy.gif"
         img2.src="Dog.jpg"
         img3.src="WOLF.jpg"
         img4.src="Elephant.jpg"
     } else if(results[0].label== "Dog"){
        img.src="Crow.jpg"
        img2.src="Doggy.gif"
        img3.src="WOLF.jpg"
        img4.src="Elephant.jpg"
     }
     else if(results[0].label== "Elephant"){
        img.src="Crow.jpg"
        img2.src="Dog.jpg"
        img3.src="WOLF.jpg"
        img4.src="Elly.gif"
     }
     else {
        img.src="Crow.jpg"
        img2.src="Dog.jpg"
        img3.src="wolf-howl.gif"
        img4.src="Elephant.jpg"
     }
    }
 }
 
    }