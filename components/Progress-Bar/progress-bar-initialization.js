window.addEventListener('load', function() {
    /*
    //THIS FILE IS NOT USED FOR NOW. ONCE WE MAKE THE JS WORKING ON DOCUMENTS WE WILL USE IT.

    //Progress bar Global Definition------------------
    //Initialize the progress bar with the element id, a progression of 5 steps and set a specific progression step by default      
    const progressBar = Object.create(window.msdsProgressBar);      
    const ProgressBarDefinition = document.getElementById("ProgressBarDefinition");
    if(ProgressBarDefinition) {
        progressBar.init("ProgressBarDefinition", 5, 2); 
    }
    
    //Progress bar Size scripts------------------
    const progressBarSize1 = Object.create(window.msdsProgressBar);    
    progressBarSize1.currentStep = 2; //Set the progress bar to a specific step by default.
    const progressBarSize1El = document.getElementById("ProgressBarSize1");
    if(progressBarSize1El) {
        progressBarSize1.init("ProgressBarSize1", 5, 2); //Initialize the progress bar with 5 steps.
    }    

    const progressBarSize2 = Object.create(window.msdsProgressBar);    
    progressBarSize2.currentStep = 3; //Set the progress bar to a specific step by default.
    const progressBarSize2El = document.getElementById("ProgressBarSize2");
    if(progressBarSize2El) {
        progressBarSize2.init("ProgressBarSize2", 5, 2); //Initialize the progress bar with 5 steps.
    }
    
    //Progress bar States scripts------------------
    const progressBarState1 = Object.create(window.msdsProgressBar);      
    const progressBarState1El = document.getElementById("ProgressBarState1");
    if(progressBarState1El) {
        progressBarState1.init("ProgressBarState1", 5, 0); //Initialize the progress bar with 5 steps.
    }    
    
    const progressBarState2 = Object.create(window.msdsProgressBar);        
    const progressBarState2El = document.getElementById("ProgressBarState2");
    if(progressBarState2El) {
        progressBarState2.startFromOne = true; //Set "StartFromOne" variable to true.
        progressBarState2.init("ProgressBarState2", 5, 0); //Initialize the progress bar with 5 steps.
    }  
    

    //Light Theme scripts------------------       
    //Initialize the progress bar with 12 steps.
    const lightThemeProgressBar = Object.create(window.msdsProgressBar);     
    const lightThemeProgressBarEl = document.getElementById("LightThemeProgressBar");
    if(lightThemeProgressBarEl) {
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
    const darkThemeProgressBar = Object.create(window.msdsProgressBar);          

    const darkThemeProgressBarEl = document.getElementById("DarkThemeProgressBar");
    if(darkThemeProgressBarEl) {
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

    //---

    // progressBar = window.progressBar;
    // let baseNumberElement = document.querySelectorAll('#BaseNumber')[0]
    // if(baseNumberElement) {
    //     let baseNumber = baseNumberElement.value;
    //     progressBar.init(baseNumber);    

    //     document.querySelector('.prevStep').addEventListener('click', event => {
    //         progressBar.onclick = progressBar.prev();
    //     })

    //     document.querySelector('.nextStep').addEventListener('click', event => {
    //         progressBar.next();
    //     })

    //     document.querySelector('#BaseNumber').addEventListener('change', event => {
    //         progressBar.init(event.target.value);        
    //     })    

    //     const startFromOne = document.querySelector('#StartFromOne');
    //     startFromOne.addEventListener('change', event => {        
    //         progressBar.startFromOne = startFromOne.checked;
    //         const baseNumber = document.querySelectorAll('#BaseNumber')[0].value;
    //         progressBar.init(baseNumber);
    //     })  
    // }
    */
});  
