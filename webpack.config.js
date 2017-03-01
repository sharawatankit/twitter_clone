module.exports = {
  entry: './app/assets/javascripts/frontend/main.jsx',
  output: {

    path: __dirname +'/app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    extensions:['.ts','.tsx','.js','.jsx']
  },
  externals: {
    'react': 'React'
},
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader'},



     ]

  }
};