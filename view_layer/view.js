const {makeSnackCaseToCamelCase} = require('../utils/stringUtils');

const viewContent = (/** @type {string} */ name) => {
    return `// ----------------------------------------------------------------------------------
// Please note that this is a generated file. Edit model as in your response or request.
// ----------------------------------------------------------------------------------

import 'package:flutter/material.dart';

import '../../../core/base/view/base_widget.dart';
import '../viewmodel/${name}_view_model.dart';

class ${makeSnackCaseToCamelCase(name)}View extends StatelessWidget {
  const ${makeSnackCaseToCamelCase(name)}View({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseView<${makeSnackCaseToCamelCase(name)}ViewModel>(
      viewModel: ${makeSnackCaseToCamelCase(name)}ViewModel(),
      onModelReady: (model) {
        model.setContext(context);
        model.init();
      },
      onPageBuilder: (BuildContext context, ${makeSnackCaseToCamelCase(name)}ViewModel viewModel) =>
          Scaffold(
        appBar: AppBar(
          title: const Text('${makeSnackCaseToCamelCase(name)}'),
        ),
        body: const Center(child: Text('${makeSnackCaseToCamelCase(name)}View')),
      ),
    );
  }
}

`};

module.exports = viewContent;