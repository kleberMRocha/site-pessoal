
var bar = new ProgressBar.Line(node, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#52b18c',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: 'white',
        position: 'relative',
        right: '0',
        top: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#52b18c'},
    step: (state, bar) => {
      
      bar.setText(Math.round(bar.value() * 50) + ' %');
      
    }
});
  
  bar.animate(1.0);  // Number from 0.0 to 1.0