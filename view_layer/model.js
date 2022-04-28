const {makeSnackCaseToCamelCase} = require('../utils/stringUtils');

const modelContent = (/** @type {string} */ name) => {
    return `// ----------------------------------------------------------------------------------
// Please note that this is a generated file. Edit model as in your response or request.
// ----------------------------------------------------------------------------------

import 'package:json_annotation/json_annotation.dart';
import 'package:vexana/vexana.dart';

part '${name}_model.g.dart';

@JsonSerializable()
class ${makeSnackCaseToCamelCase(name)}Model extends INetworkModel<${makeSnackCaseToCamelCase(name)}Model> {
  String? string;
  int? integer;
  bool? boolean;
  List? list;
  Map? map;

  ${makeSnackCaseToCamelCase(name)}Model({
      this.string, 
      this.integer,
      this.boolean,
      this.list,
      this.map,
    });

  @override
  ${makeSnackCaseToCamelCase(name)}Model fromJson(Map<String, dynamic> json) {
    return _$${makeSnackCaseToCamelCase(name)}ModelFromJson(json);
  }

  @override
  Map<String, dynamic> toJson() {
    return _$${makeSnackCaseToCamelCase(name)}ModelToJson(this);
  }
}

`};

module.exports = modelContent;