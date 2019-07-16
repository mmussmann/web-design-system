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
      } 
      .color-container{display: flex; flex-wrap: wrap}`,
    primaryColors: [
      {
        textColor: 'msds-text-white',
        text: 'Milestone clear blue',
        backgroundColor: 'msds-bg-clear-blue'
      },
      {
        textColor: 'msds-text-white',
        text: 'Milestone dark blue',
        backgroundColor: 'msds-bg-dark-blue'
      },
      {
        textColor: 'msds-text-black',
        text: 'Milestone yellow',
        backgroundColor: 'msds-bg-yellow'
      }
    ],
    grayWhiteBlack: [
      {
        textColor: 'msds-text-black',
        text: 'gray 1',
        backgroundColor: 'msds-bg-gray-1'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray 2',
        backgroundColor: 'msds-bg-gray-2'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray 3',
        backgroundColor: 'msds-bg-gray-3'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray 4',
        backgroundColor: 'msds-bg-gray-4'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray 5',
        backgroundColor: 'msds-bg-gray-5'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray 6',
        backgroundColor: 'msds-bg-gray-6'
      },
      {
        textColor: 'msds-text-white',
        text: 'gray 7',
        backgroundColor: 'msds-bg-gray-7'
      },
      {
        textColor: 'msds-text-white',
        text: 'gray 8',
        backgroundColor: 'msds-bg-gray-8'
      },
      {
        textColor: 'msds-text-white',
        text: 'gray 9',
        backgroundColor: 'msds-bg-gray-9'
      },
      {
        textColor: 'msds-text-white',
        text: 'gray 10',
        backgroundColor: 'msds-bg-gray-10'
      },
      {
        textColor: 'msds-text-black',
        text: 'white',
        backgroundColor: 'msds-bg-white'
      },
      {
        textColor: 'msds-text-white',
        text: 'black',
        backgroundColor: 'msds-bg-black'
      }
    ],
    altColors: [
      {
        textColor: 'msds-text-white',
        text: 'Alt blue 1',
        backgroundColor: 'msds-bg-alt-blue-1'
      },
      {
        textColor: 'msds-text-white',
        text: 'alt blue 2',
        backgroundColor: 'msds-bg-alt-blue-2'
      },
      {
        textColor: 'msds-text-white',
        text: 'alt blue 3',
        backgroundColor: 'msds-bg-alt-blue-3'
      },
      {
        textColor: 'msds-text-black',
        text: 'alt yellow 1',
        backgroundColor: 'msds-bg-alt-yellow-1'
      },
      {
        textColor: 'msds-text-black',
        text: 'alt yellow 2',
        backgroundColor: 'msds-bg-alt-yellow-2'
      },
      {
        textColor: 'msds-text-white',
        text: 'confirm green',
        backgroundColor: 'msds-bg-confirm-green'
      },
      {
        textColor: 'msds-text-white',
        text: 'danger red 1',
        backgroundColor: 'msds-bg-danger-red-1'
      },
      {
        textColor: 'msds-text-white',
        text: 'danger red 2',
        backgroundColor: 'msds-bg-danger-red-2'
      },
      {
        textColor: 'msds-text-white',
        text: 'sand',
        backgroundColor: 'msds-bg-sand'
      }
    ],
    gradients: [
      {
        textColor: 'msds-text-white',
        text: 'clear blue gradient',
        backgroundColor: 'msds-bg-clear-blue-gradient'
      },
      {
        textColor: 'msds-text-white',
        text: 'dark blue gradient',
        backgroundColor: 'msds-bg-dark-blue-gradient'
      },
      {
        textColor: 'msds-text-white',
        text: 'mixed blue gradient',
        backgroundColor: 'msds-bg-mixed-blue-gradient'
      },
      {
        textColor: 'msds-text-black',
        text: 'yellow gradient',
        backgroundColor: 'msds-bg-yellow-gradient'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray gradient 1',
        backgroundColor: 'msds-bg-gray-gradient-1'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray gradient 2',
        backgroundColor: 'msds-bg-gray-gradient-2'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray gradient 3',
        backgroundColor: 'msds-bg-gray-gradient-3'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray gradient 4',
        backgroundColor: 'msds-bg-gray-gradient-4'
      },
      {
        textColor: 'msds-text-black',
        text: 'gray gradient 5',
        backgroundColor: 'msds-bg-gray-gradient-5'
      }
    ],
    shadows: [
      {
        textColor: 'msds-text-black',
        text: 'shadow small',
        shadow: 'msds-shadow-small'
      },
      {
        textColor: 'msds-text-black',
        text: 'shadow medium',
        shadow: 'msds-shadow-medium'
      },
      {
        textColor: 'msds-text-black',
        text: 'shadow large',
        shadow: 'msds-shadow-large'
      }
    ]
  },
  notes: 'Overview of available colors'
}
