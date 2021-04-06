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

  const balanceWhite = ratioToWhite > 3 ? 2 : 0

  const textColor = ratioToWhite + balanceWhite >= ratioToBlack ? '#FFF' : '#000'

  return textColor
}
