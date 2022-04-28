const {makeSnackCaseToCamelCase} = require('../utils/stringUtils');

const serviceContent = (/** @type {string} */ name) => {
 return `// ----------------------------------------------------------------------------------
// Please note that this is a generated file. Edit service as in your API.
// ----------------------------------------------------------------------------------

import 'package:vexana/vexana.dart';

import '../../../../core/base/model/base_response_model.dart';
import '../../../../core/utility/service_helper.dart';
import '../../../core/constants/network/network_route_enum.dart';
import '../model/${name}_model.dart';
import 'i_${name}_service.dart';

class ${makeSnackCaseToCamelCase(name)}Service extends I${makeSnackCaseToCamelCase(name)}Service with ServiceHelper {
  ${makeSnackCaseToCamelCase(name)}Service(INetworkManager manager) : super(manager);

  @override
  Future<BaseResponseModel?> fetch(${makeSnackCaseToCamelCase(name)}Model model) async {
    // TODO: implement fetch
    throw UnimplementedError();
  }
}

`;
};

const iServiceContent = (/** @type {string} */ name) => {
    return `// ----------------------------------------------------------------------------------
// Please note that this is a generated file. Edit service as in your API.
// ----------------------------------------------------------------------------------

import 'package:vexana/vexana.dart';

import '../../../../core/base/model/base_response_model.dart';
import '../model/${name}_model.dart';

abstract class I${makeSnackCaseToCamelCase(name)}Service {
    final INetworkManager manager;

    I${makeSnackCaseToCamelCase(name)}Service(this.manager);

    Future<BaseResponseModel?> fetch(${makeSnackCaseToCamelCase(name)}Model model);
}

`;
};

module.exports = {
    serviceContent,
    iServiceContent
};