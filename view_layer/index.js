const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

const modelContent = require('./model');
const { serviceContent, iServiceContent } = require('./service');
const viewContent = require('./view');
const {viewModelContent, viewModelContentWithService} = require('./viewmodel');

const generateViewLayer = async (featureName) => {
  if (!vscode.workspace) {
    return vscode.window.showErrorMessage('Please open a project folder first');
  }

  try {

    const folderPath = vscode.workspace.workspaceFolders[0].uri.fsPath;

    const viewLayerPath = path.join(folderPath, `lib/view/${featureName}/`);

    console.log(path);

    const modelPath = path.join(viewLayerPath, `model/`);

    if (!fs.existsSync(modelPath)) {
      fs.mkdirSync(modelPath, { recursive: true });
    }

    fs.writeFileSync(`${modelPath}${featureName}_model.dart`, modelContent(featureName));

    const servicePath = path.join(viewLayerPath, `service/`);

    if (!fs.existsSync(servicePath)) {
      fs.mkdirSync(servicePath, { recursive: true });
    }

    fs.writeFileSync(`${servicePath}${featureName}_service.dart`, serviceContent(featureName));
    fs.writeFileSync(`${servicePath}i_${featureName}_service.dart`, iServiceContent(featureName));

    const viewPath = path.join(viewLayerPath, `view/`);
    
    if (!fs.existsSync(viewPath)) {
      fs.mkdirSync(viewPath, { recursive: true });
    }
    
    fs.writeFileSync(`${viewPath}${featureName}_view.dart`, viewContent(featureName));

    const viewModelPath = path.join(viewLayerPath, `viewmodel/`);

    if (!fs.existsSync(viewModelPath)) {
      fs.mkdirSync(viewModelPath, { recursive: true });
    }

    fs.writeFileSync(`${viewModelPath}${featureName}_view_model.dart`, viewModelContentWithService(featureName));

    vscode.window.showInformationMessage(`${featureName} view layer generated successfully`);

  } catch (error) {
    return vscode.window.showErrorMessage(error.message);
  }

};

const generateViewLayerOnlyService = async (featureName) => {
  if (!vscode.workspace) {
    return vscode.window.showErrorMessage('Please open a project folder first');
  }

  try {

    const folderPath = vscode.workspace.workspaceFolders[0].uri
      .toString()
      .split(':')[1];

    const viewLayerPath = path.join(folderPath, `lib/view/${featureName}/`);

    const modelPath = path.join(viewLayerPath, `model/`);

    if (!fs.existsSync(modelPath)) {
      fs.mkdirSync(modelPath, { recursive: true });
    }

    fs.writeFileSync(`${modelPath}${featureName}_model.dart`, modelContent(featureName));

    const servicePath = path.join(viewLayerPath, `service/`);

    if (!fs.existsSync(servicePath)) {
      fs.mkdirSync(servicePath, { recursive: true });
    }

    fs.writeFileSync(`${servicePath}${featureName}_service.dart`, serviceContent(featureName));
    fs.writeFileSync(`${servicePath}i_${featureName}_service.dart`, iServiceContent(featureName));

    vscode.window.showInformationMessage(`${featureName} view layer service module generated successfully`);

  } catch (error) {
    return vscode.window.showErrorMessage(error.message);
  }

};

const generateViewLayerOnlyView = async (featureName) => {
  if (!vscode.workspace) {
    return vscode.window.showErrorMessage('Please open a project folder first');
  }

  try {

    const folderPath = vscode.workspace.workspaceFolders[0].uri
      .toString()
      .split(':')[1];

    const viewLayerPath = path.join(folderPath, `lib/view/${featureName}/`);

    const viewPath = path.join(viewLayerPath, `view/`);
    
    if (!fs.existsSync(viewPath)) {
      fs.mkdirSync(viewPath, { recursive: true });
    }
    
    fs.writeFileSync(`${viewPath}${featureName}_view.dart`, viewContent(featureName));

    const viewModelPath = path.join(viewLayerPath, `viewmodel/`);

    if (!fs.existsSync(viewModelPath)) {
      fs.mkdirSync(viewModelPath, { recursive: true });
    }

    fs.writeFileSync(`${viewModelPath}${featureName}_view_model.dart`, viewModelContent(featureName));

    vscode.window.showInformationMessage(`${featureName} view layer view module generated successfully`);

  } catch (error) {
    return vscode.window.showErrorMessage(error.message);
  }

};

const generateViewLayerOnlyModel = async (featureName) => {
  if (!vscode.workspace) {
    return vscode.window.showErrorMessage('Please open a project folder first');
  }

  try {

    const folderPath = vscode.workspace.workspaceFolders[0].uri
      .toString()
      .split(':')[1];

    const viewLayerPath = path.join(folderPath, `lib/view/${featureName}/`);

    const modelPath = path.join(viewLayerPath, `model/`);

    if (!fs.existsSync(modelPath)) {
      fs.mkdirSync(modelPath, { recursive: true });
    }

    fs.writeFileSync(`${modelPath}${featureName}_model.dart`, modelContent(featureName));

    vscode.window.showInformationMessage(`${featureName} view layer model generated successfully`);

  } catch (error) {
    return vscode.window.showErrorMessage(error.message);
  }

};
module.exports = {
  generateViewLayer,
  generateViewLayerOnlyService,
  generateViewLayerOnlyView,
  generateViewLayerOnlyModel,
};