window.addEventListener('load', function() {
        
    //Progress bar Global Definition------------------
    //Initialize the progress bar with the element id, a progression of 5 steps and set a specific progression step by default      
    const progressBar = Object.create(window.msdsProgressBar);      
    const ProgressBarDefinition = document.getElementById("ProgressBarDefinition");
    if(ProgressBarDefinition) {
        progressBar.init("ProgressBarDefinition", 5, 4); 
    }

    //Progress Bar Features scripts------------------    
    const progressBarFeatures1El = document.getElementById("ProgressBarFeatures1");
    if(progressBarFeatures1El) {
        //Initialize the progress bar with 5 steps starting form the default value 0.
        const progressBarFeatures1 = Object.create(window.msdsProgressBar);
        progressBarFeatures1.init("ProgressBarFeatures1", 5, 0);
    }
        
    const progressBarFeatures2El = document.getElementById("ProgressBarFeatures2");
        if(progressBarFeatures2El) {
        //Initialize the progress bar with 5 steps starting form the 1.
        const progressBarFeatures2 = Object.create(window.msdsProgressBar);
        progressBarFeatures2.startFromOne = true; //Set "StartFromOne" variable to true.
        progressBarFeatures2.init("ProgressBarFeatures2", 5, 0); //Initialize the progress bar with 5 steps.
    }

    const progressBarFeatures3El = document.getElementById("ProgressBarFeatures3");
    if(progressBarFeatures3El) {
        //Set the progress bar to a specific step.
        const progressBarFeatures3 = Object.create(window.msdsProgressBar);
        progressBarFeatures3.init("ProgressBarFeatures3", 5, 3); //Initialize the progress bar with 5 steps.
    }

    //Progress bar Size scripts------------------
    const progressBarSize1El = document.getElementById('ProgressBarSize1');
    if(progressBarSize1El) {
        const progressBarSize1 = Object.create(window.msdsProgressBar);
        progressBarSize1.init('ProgressBarSize1', 5, 2); //Initialize the progress bar with 5 steps.
    }    
            
    const progressBarSize2El = document.getElementById('ProgressBarSize2');
    if(progressBarSize2El) {
        //Set the progress bar to a specific step by default.
        const progressBarSize2 = Object.create(window.msdsProgressBar);      
        progressBarSize2.init('ProgressBarSize2', 5, 3); //Initialize the progress bar with 5 steps.
    }
     
    
    //Light Theme scripts------------------       
    //Initialize the progress bar with 12 steps.        
    const lightThemeProgressBarEl = document.getElementById("LightThemeProgressBar");
    if(lightThemeProgressBarEl) {
        const lightThemeProgressBar = Object.create(window.msdsProgressBar);

        let lightThemeBaseNumberElement = document.querySelectorAll('#LightThemeBaseNumber')[0]    
        lightThemeBaseNumberElement.value = 12;

        lightThemeProgressBar.init("LightThemeProgressBar", lightThemeBaseNumberElement.value, 0);  
        
        document.querySelector('#LightThemePrevStep').addEventListener('click', event => {            
            lightThemeProgressBar.prev();
        })
    
        document.querySelector('#LightThemeNextStep').addEventListener('click', event => {
            lightThemeProgressBar.next();
        })
    
        document.querySelector('#LightThemeBaseNumber').addEventListener('change', event => {
            lightThemeProgressBar.init("LightThemeProgressBar", event.target.value, 0);        
        })    
    
        const lightThemeStartFromOneElement = document.querySelector('#LightThemeStartFromOne');
        lightThemeStartFromOneElement.addEventListener('change', event => {        
            lightThemeProgressBar.startFromOne = lightThemeStartFromOneElement.checked;
            const baseNumber = document.querySelectorAll('#LightThemeBaseNumber')[0].value;
            lightThemeProgressBar.init("LightThemeProgressBar", baseNumber, 0);
        })
    }               
          
    
    //Dark Theme scripts------------------        
    //Initialize the progress bar with 12 steps.
    const darkThemeProgressBarEl = document.getElementById("DarkThemeProgressBar");
    if(darkThemeProgressBarEl) {
        const darkThemeProgressBar = Object.create(window.msdsProgressBar);

        let darkThemeBaseNumberElement = document.querySelectorAll('#DarkThemeBaseNumber')[0]    
        darkThemeBaseNumberElement.value = 12;
        
        darkThemeProgressBar.init("DarkThemeProgressBar", darkThemeBaseNumberElement.value, 0); 

        document.querySelector('#DarkThemePrevStep').addEventListener('click', event => {
            darkThemeProgressBar.prev();
        })
    
        document.querySelector('#DarkThemeNextStep').addEventListener('click', event => {
            darkThemeProgressBar.next();
        })
    
        document.querySelector('#DarkThemeBaseNumber').addEventListener('change', event => {
            darkThemeProgressBar.init("DarkThemeProgressBar", event.target.value, 0);        
        })    
    
        const darkThemeStartFromOneElement = document.querySelector('#DarkThemeStartFromOne');
        darkThemeStartFromOneElement.addEventListener('change', event => {        
            darkThemeProgressBar.startFromOne = darkThemeStartFromOneElement.checked;
            const baseNumber = document.querySelectorAll('#DarkThemeBaseNumber')[0].value;
            darkThemeProgressBar.init("DarkThemeProgressBar", baseNumber, 0);
        })
    }
});  
