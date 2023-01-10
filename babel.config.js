module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
       'module-resolver',
       {
         root: ['./src'],
         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
         alias: {
           "@components": "./src/components",
           "@screen/*": ".src/screens",
           "@type/*": ".src/types",
           "@service/*": ".src/services",
           "@constant/*": ".src/const",
           "@svg/*": ".src/assets/svgs",
         }
       }
    ]
  ]
};
