module.exports = function() {
  const config = {
    compilerOptions: {
      target: 'es2018',
      module: 'commonjs',
      outDir: './lib',
      rootDir: './src',
      strict: true,
      esModuleInterop: true
    },
    exclude: ['test']
  };
  
  return config;
};
