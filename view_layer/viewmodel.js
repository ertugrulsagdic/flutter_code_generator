const {makeSnackCaseToCamelCase} = require('../utils/stringUtils');

const viewModelContent = (/** @type {string} */ name) => {
    return `// ----------------------------------------------------------------------------------
// Please note that this is a generated file. Edit model as in your response or request.
// ----------------------------------------------------------------------------------

import 'package:flutter/material.dart';
import 'package:mobx/mobx.dart';

import '../../../core/base/viewmodel/base_view_model.dart';

part '${name}_view_model.g.dart';

class ${makeSnackCaseToCamelCase(name)}ViewModel = _${makeSnackCaseToCamelCase(name)}ViewModelBase with _$${makeSnackCaseToCamelCase(name)}ViewModel;

abstract class _${makeSnackCaseToCamelCase(name)}ViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  @observable
  bool isLoading = false;

  @action
  void changeIsLoading() {
    isLoading = !isLoading;
  }
}

`};


const viewModelContentWithService = (/** @type {string} */ name) => {
  return `// ----------------------------------------------------------------------------------
// Please note that this is a generated file. Edit model as in your response or request.
// ----------------------------------------------------------------------------------

import 'package:flutter/material.dart';
import 'package:mobx/mobx.dart';

import '../../../core/base/viewmodel/base_view_model.dart';
import '../service/${name}_service.dart';
import '../service/i_${name}_service.dart';

part '${name}_view_model.g.dart';

class ${makeSnackCaseToCamelCase(name)}ViewModel = _${makeSnackCaseToCamelCase(name)}ViewModelBase
    with _$${makeSnackCaseToCamelCase(name)}ViewModel;

abstract class _${makeSnackCaseToCamelCase(name)}ViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  late final I${makeSnackCaseToCamelCase(name)}Service service;

  @override
  void init() {
    service = ${makeSnackCaseToCamelCase(name)}Service(vexanaManager.networkManager);
  }

  @observable
  bool isLoading = false;

  @action
  void changeIsLoading() {
    isLoading = !isLoading;
  }
}

`};

module.exports = {
  viewModelContent,
  viewModelContentWithService,
};