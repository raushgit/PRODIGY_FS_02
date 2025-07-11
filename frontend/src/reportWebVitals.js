// This is the reportWebVitals file for the frontend application
// It is used to measure the performance of the application
// It exports a function that takes a callback function as an argument
// The callback function is called with the performance metrics of the application
// The metrics are collected using the web-vitals library
// The web-vitals library is imported dynamically to avoid bundling it with the main application code

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
