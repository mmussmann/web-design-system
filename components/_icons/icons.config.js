module.exports = {
  status: 'ready',
  title: 'Available icons',
  context: {
    previewCss: `
    .msds-generic-flat-icons,
    .msds-marketplace-flat-icons,
    .msds-marketplace-rich-icons,
    .msds-generic-rich-icons {
      display: inline;
    }
    .msds-rich-icon {
      height: 180px !important;
      width: 240px !important;
    }
    .msds-flat-icon {
      height: 240px !important;
      width: 240px !important;
    }
    .msds-icon-title {
      text-align: center;
      vertical-align: top;
      height: 80px !important;
      width: 240px !important;
      margin-top: 20px;
    }
    .msds-icon-wrapper {
      display: inline-block;
      margin: 5px;
    }`
  },
  notes: 'Overview of available icons'
}
