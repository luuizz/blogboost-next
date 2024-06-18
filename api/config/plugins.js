module.exports = ({ env }) => ({
  "reading-time": {
    enabled: true,
    config: {
      contentTypes: {
        'single-post': {
          field: 'readingTime',
          references: 'ConteudoPost',
        },
      },
    }
  }
});
