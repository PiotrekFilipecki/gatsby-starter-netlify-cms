import React from 'react'
import PropTypes from 'prop-types'
import { AmbionicsPageTemplate } from '../../templates/ambionics-page'

const AmbionicsPagePreview = ({ entry, widgetFor }) => (
  <AmbionicsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AmbionicsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AmbionicsPagePreview
