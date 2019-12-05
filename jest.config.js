module.exports = {
	preset: "react-native",
	moduleFileExtensions: ["ts", "tsx", "js"],
	transform: {
		"^.*(.js)$": "babel-jest"
	},
	transformIgnorePatterns: [
		"node_modules/(?!react-native|native-base-shoutem-theme|@shoutem/animation|@shoutem/ui|tcomb-form-native)",
		"node_modules/@react-native-community/async-storage/(?!(lib))"
    ],
	testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
	testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/", "<rootDir>/lib/"],
	watchman: false,
	verbose: true,
	cacheDirectory: ".jest/cache",
	globals: {
		"ts-jest": {
			isolatedModules: true,
		},
	},
	snapshotSerializers: ["enzyme-to-json/serializer"],
	setupFiles: ["<rootDir>/setupEnzyme.js"],
};




// "jest": {
//     "preset": "react-native",
//     "transformIgnorePatterns": [
//       "node_modules/(?!react-native|native-base-shoutem-theme|@shoutem/animation|@shoutem/ui|tcomb-form-native)"
//     ],
//     "setupFiles": [
//       "./test/setup.js"
//     ]
//   }