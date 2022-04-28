// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const {
	generateViewLayer,
	generateViewLayerOnlyService,
	generateViewLayerOnlyView,
	generateViewLayerOnlyModel,
}= require('./view_layer');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mobile" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposableView = vscode.commands.registerCommand('mobile.generateViewLayer', function () {
		vscode.window.showInputBox({
			placeHolder: 'Enter feature name Snackcase (e.g. feature_name)',
		}).then(async (featureName) => {
			if (!featureName) {
				return vscode.window.showErrorMessage('Please enter feature name');
			}

			generateViewLayer(featureName);
		});
	});

	context.subscriptions.push(disposableView);
	
	let disposableOnlyService = vscode.commands.registerCommand('mobile.generateViewLayerOnlyService', function () {
		// get input from user
		vscode.window.showInputBox({
			placeHolder: 'Enter feature name Snackcase (e.g. feature_name)',
		}).then(async (featureName) => {
			if (!featureName) {
				return vscode.window.showErrorMessage('Please enter feature name');
			}

			generateViewLayerOnlyService(featureName);
		});
	});
	
	context.subscriptions.push(disposableOnlyService);
	
	let disposableOnlyView = vscode.commands.registerCommand('mobile.generateViewLayerOnlyView', function () {
		vscode.window.showInputBox({
			placeHolder: 'Enter feature name Snackcase (e.g. feature_name)',
		}).then(async (featureName) => {
			if (!featureName) {
				return vscode.window.showErrorMessage('Please enter feature name');
			}

			generateViewLayerOnlyView(featureName);
		});
	});
	
	context.subscriptions.push(disposableOnlyView);

	let disposableOnlyModel = vscode.commands.registerCommand('mobile.generateViewLayerOnlyModel', function () {
		vscode.window.showInputBox({
			placeHolder: 'Enter feature name Snackcase (e.g. feature_name)',
		}).then(async (featureName) => {
			if (!featureName) {
				return vscode.window.showErrorMessage('Please enter feature name');
			}

			generateViewLayerOnlyModel(featureName);
		});
	});
	
	context.subscriptions.push(disposableOnlyModel);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
