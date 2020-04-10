const withImages = require('next-images')

module.exports = withImages({
  webpack(config) {
    // HACK: Below is a huge hack
    //
    // https://github.com/webpack/webpack/issues/9309
    //
    // Because of a bug with webpack, require.context cannot use loaders with
    // issuers key. We therefore copy next-images module.rules, change the test
    // to only work with images in content directories, and sets issuer to
    // undefined so that the image rules will work with images in content.
    //
    // The reason we change the test to only work with content directories is
    // that next-images includes an issuer test to ensure images from CSS/SCSS
    // files are handled by next rather than next-images... they are handled
    // out the box by next you see. We can't have an issuer as it breaks
    // require.context so we change the test to only work with images in
    // content directories as these images won't be loaded in CSS/SCSS.
    //
    const NEXT_IMAGES_REGEX = /\.(jpe?g|png|svg|gif|ico|webp|jp2)$/

    const nextImagesRuleIndex = config.module.rules.findIndex(
      ({ test }) => test && test.toString() == NEXT_IMAGES_REGEX.toString()
    )

    if (nextImagesRuleIndex === -1) {
      throw new Error('Image hack for require.context has stopped working')
    }

    const nextImagesRule = config.module.rules[nextImagesRuleIndex]

    config.module.rules.splice(nextImagesRuleIndex, 1, {
      ...nextImagesRule,
      test: (path) => {
        if (path.indexOf('ui') > -1) return false
        return path.match(nextImagesRule.test)
      },
      issuer: undefined,
    })

    return config
  },
})
