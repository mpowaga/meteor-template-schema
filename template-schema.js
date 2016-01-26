const pkg = Package['mpowaga:template-schema-dev'];
Template.prototype.schema = pkg ? pkg.TemplateSchema : function () { };
