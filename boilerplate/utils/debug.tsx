// const log = (function () {
//   var context = 'My Descriptive Logger Prefix:';
//   return Function.prototype.bind.call(
//     console.log,
//     console,
//     '%ccontext: ',
//     'font-weight:bold;'
//   );
// })();

export const log = (header, data, theme) => {
  var css = '',
    paint = {
      // default themes
      clr: '#212121',
      bgc: '#b0bec5'
    },
    themes = {
      error: { clr: '#ffebee', bgc: '#c62828' }, // red
      success: { clr: '#e8f5e9', bgc: '#2e7d32' }, // green
      warning: { clr: '#fff3e0', bgc: '#f4511e' }, // orange
      info: { clr: '#ede7f6', bgc: '#651fff' } // purple
    };

  // overriting default themes if theme given
  if (themes.hasOwnProperty(theme)) {
    paint.clr = themes[theme].clr;
    paint.bgc = themes[theme].bgc;
  }
  css =
    'color:' +
    paint.clr +
    ';font-weight:bold; background-color: ' +
    paint.bgc +
    '; padding: 3px 6px; border-radius: 2px;';

  console.log('%c' + header, css);
  console.log(data);
};

export const debug = (data) => (
  <pre
    style={{
      background: '#333',
      color: '#fff',
      padding: '5px',
      whiteSpace: 'pre-wrap'
    }}
  >
    {JSON.stringify(data, null, 2)}
  </pre>
);
