if(window.location.hostname=="www.youtube.com"){
    console.log("Currently on Youtube");

    const domObserver =  new MutationObserver(checkAdSkipExist);

}

function checkAdSkipExist(){
    const mutationRecord = new MutationRecord(
        
    )
}