const CuttomAlert = (alertMessage='alert box',alertType='success',duiration=2000,) => {
    let previousAlertBox = document.getElementById('alert-box');
    if(previousAlertBox){
        previousAlertBox.remove()
    }
    let customAlert = document.createElement('div')
    customAlert.setAttribute('class',`movie-alert-box movie-alert-${alertType}`);
    customAlert.setAttribute('id',`alert-box`)
    customAlert.innerText = alertMessage;
    document.body.appendChild(customAlert);
    setTimeout(() => {
      customAlert.remove()
    },[duiration])

}
export {CuttomAlert}