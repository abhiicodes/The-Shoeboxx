import { Box, HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
export function formatPrice(value, opts = {}) {
  const { locale = 'en-US', currency = 'USD' } = opts
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
}

export const PriceTag = (props) => {
  const { price, currency, salePrice, rootProps, priceProps, salePriceProps } = props
  // console.log(price)
  return (
    // <HStack spacing="1" {...rootProps}>
    //   <Price isOnSale={!!salePrice} textProps={priceProps}>
    //     {formatPrice(price, {
    //       currency,
    //     })}
    //   </Price>
    //   {salePrice && (
    //     <SalePrice {...salePriceProps}>
    //       {formatPrice(salePrice, {
    //         currency,
    //       })}
    //     </SalePrice>
    //   )}
    // </HStack>
    <Box>₹{price}</Box>
  )
}

