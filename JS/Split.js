Split(['#view', '#controls'], {  // eslint-disable-line new-cap
    sizes: [75, 25],
    minSize: 100,
    elementStyle: (dimension, size, gutterSize) => {
      return {
        'flex-basis': `calc(${size}% - ${gutterSize}px)`,
      };
    },
    gutterStyle: (dimension, gutterSize) => {
      return {
        'flex-basis': `${gutterSize}px`,
      };
    },
  });