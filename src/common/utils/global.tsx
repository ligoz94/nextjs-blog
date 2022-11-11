export const innerDimensions = (node) => {
  const computedStyle = getComputedStyle(node)

  let width: number = node.clientWidth
  let height: number = node.clientHeight
  const heightWithMargin: number =
    height + parseFloat(computedStyle.marginTop) + parseFloat(computedStyle.marginBottom)

  height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)
  width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight)

  return { height, width, heightWithMargin }
}
