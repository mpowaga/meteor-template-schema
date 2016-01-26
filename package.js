Package.describe({
  name: 'mpowaga:template-schema',
  version: '0.0.1',
  summary: 'Validate data context of your templates',
  git: 'https://github.com/mpowaga/meteor-template-schema.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'blaze-html-templates',
    'mpowaga:template-schema-dev@0.0.1'
  ]);
  api.addFiles('template-schema.js', 'client');
});
