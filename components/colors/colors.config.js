module.exports = {
  status: 'ready',
  title: 'Available colors',
  context: {
    inlineCss: `
      .color-square{
        width: 170px; 
        height: 92px; 
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center; 
        text-transform: uppercase;
        padding: 10px;
        font-weight: bold;
        text-align: center;
        flex-direction: column;
      } 
      .color-container{display: flex; flex-wrap: wrap}
      .variable-name{
        font-size: 14px;
        text-transform: initial;
        font-weight: normal;
        margin-top: 10px;
      }`,
    primaryColors: [
      {
        textColor: 'msds-text-white',
        text: 'Milestone clear blue',
        backgroundColor: 'msds-bg-clear-blue',
        scssVarName: '$clear-blue'
      },
      {
        textColor: 'msds-text-white',
        text: 'Milestone dark blue',
        backgroundColor: 'msds-bg-dark-blue',
        scssVarName: '$dark-blue'
      },
      {
        textColor: 'msds-text-black',
        text: 'Milestone yellow',
        backgroundColor: 'msds-bg-yellow',
        scssVarName: '$yellow'
      }
    ],
    grayWhiteBlack: [
      {
        textColor: 'msds-text-black',
        text: 'gray 1',
        backgroundColor: 'msds-bg-gray-1',
        scssVarName: '$gray-1'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray 2',
        backgroundColor: 'msds-bg-gray-2',
        scssVarName: '$gray-2'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray 3',
        backgroundColor: 'msds-bg-gray-3',
        scssVarName: '$gray-3'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray 4',
        backgroundColor: 'msds-bg-gray-4',
        scssVarName: '$gray-4'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray 5',
        backgroundColor: 'msds-bg-gray-5',
        scssVarName: '$gray-5'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray 6',
        backgroundColor: 'msds-bg-gray-6',
        scssVarName: '$gray-6'
      },
      {
        textColor: 'msds-text-white',
        text: 'gray 7',
        backgroundColor: 'msds-bg-gray-7',
        scssVarName: '$gray-7'
      },
      {
        textColor: 'msds-text-white',
        text: 'gray 8',
        backgroundColor: 'msds-bg-gray-8',
        scssVarName: '$gray-8'
      },
      {
        textColor: 'msds-text-white',
        text: 'gray 9',
        backgroundColor: 'msds-bg-gray-9',
        scssVarName: '$gray-9'
      },
      {
        textColor: 'msds-text-white',
        text: 'gray 10',
        backgroundColor: 'msds-bg-gray-10',
        scssVarName: '$gray-10'
      },
      {
        textColor: 'msds-text-black',
        text: 'white',
        backgroundColor: 'msds-bg-white',
        scssVarName: '$white'
      },
      {
        textColor: 'msds-text-white',
        text: 'black',
        backgroundColor: 'msds-bg-black',
        scssVarName: '$black'
      }
    ],
    altColors: [
      {
        textColor: 'msds-text-white',
        text: 'Alt blue 1',
        backgroundColor: 'msds-bg-alt-blue-1',
        scssVarName: '$alt-blue-1'
      },
      {
        textColor: 'msds-text-white',
        text: 'alt blue 2',
        backgroundColor: 'msds-bg-alt-blue-2',
        scssVarName: '$alt-blue-2'
      },
      {
        textColor: 'msds-text-white',
        text: 'alt blue 3',
        backgroundColor: 'msds-bg-alt-blue-3',
        scssVarName: '$alt-blue-3'
      },
      {
        textColor: 'msds-text-black',
        text: 'alt yellow 1',
        backgroundColor: 'msds-bg-alt-yellow-1',
        scssVarName: '$alt-yellow-1'
      },
      {
        textColor: 'msds-text-black',
        text: 'alt yellow 2',
        backgroundColor: 'msds-bg-alt-yellow-2',
        scssVarName: '$alt-yellow-2'
      },
      {
        textColor: 'msds-text-white',
        text: 'confirm green',
        backgroundColor: 'msds-bg-confirm-green',
        scssVarName: '$confirm-green'
      },
      {
        textColor: 'msds-text-white',
        text: 'danger red 1',
        backgroundColor: 'msds-bg-danger-red-1',
        scssVarName: '$danger-red-1'
      },
      {
        textColor: 'msds-text-white',
        text: 'danger red 2',
        backgroundColor: 'msds-bg-danger-red-2',
        scssVarName: '$danger-red-2'
      },
      {
        textColor: 'msds-text-white',
        text: 'sand',
        backgroundColor: 'msds-bg-sand',
        scssVarName: '$sand'
      }
    ],
    gradients: [
      {
        textColor: 'msds-text-white',
        text: 'clear blue gradient',
        backgroundColor: 'msds-bg-clear-blue-gradient',
        scssVarName: '$clear-blue-gradient'
      },
      {
        textColor: 'msds-text-white',
        text: 'dark blue gradient',
        backgroundColor: 'msds-bg-dark-blue-gradient',
        scssVarName: '$dark-blue-gradient'
      },
      {
        textColor: 'msds-text-white',
        text: 'mixed blue gradient',
        backgroundColor: 'msds-bg-mixed-blue-gradient',
        scssVarName: '$mixed-blue-gradient'
      },
      {
        textColor: 'msds-text-black',
        text: 'yellow gradient',
        backgroundColor: 'msds-bg-yellow-gradient',
        scssVarName: '$yellow-gradient'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray gradient 1',
        backgroundColor: 'msds-bg-gray-gradient-1',
        scssVarName: '$gray-gradient-1'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray gradient 2',
        backgroundColor: 'msds-bg-gray-gradient-2',
        scssVarName: '$gray-gradient-2'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray gradient 3',
        backgroundColor: 'msds-bg-gray-gradient-3',
        scssVarName: '$gray-gradient-3'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray gradient 4',
        backgroundColor: 'msds-bg-gray-gradient-4',
        scssVarName: '$gray-gradient-4'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray gradient 5',
        backgroundColor: 'msds-bg-gray-gradient-5',
        scssVarName: '$gray-gradient-5'
      }
    ],
    shadows: [
      {
        textColor: 'msds-text-black',
        text: 'shadow small',
        shadow: 'msds-shadow-small',
        scssVarName: '$shadow-small'
      },
      {
        textColor: 'msds-text-black',
        text: 'shadow medium',
        shadow: 'msds-shadow-medium',
        scssVarName: '$shadow-medium'
      },
      {
        textColor: 'msds-text-black',
        text: 'shadow large',
        shadow: 'msds-shadow-large',
        scssVarName: '$shadow-large'
      }
    ]
  },
  notes: 'Overview of available colors'
}
