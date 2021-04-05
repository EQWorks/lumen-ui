import { getContrastRatio } from '@material-ui/core/styles/colorManipulator'

/**
 * get white or black color for text based on background color
 *
 * @export
 * @param {string} backgroundColor
 */
export function determineTextColor(backgroundColor) {
  const ratioToWhite = getContrastRatio(backgroundColor, '#FFF')
  const ratioToBlack = getContrastRatio(backgroundColor, '#000')

  const textColor = ratioToWhite + 2 >= ratioToBlack ? '#FFF' : '#000'

  return textColor
}
