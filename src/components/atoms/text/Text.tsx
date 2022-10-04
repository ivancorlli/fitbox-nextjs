import { Text as Label } from '@chakra-ui/react'
import React from 'react'

interface IText {
  children: React.ReactNode
  variant?: string
  color?: string
  colorMode?: string
  fontFamily?: string
  weight?: string
}

const fontDefault = `sans-serif`

enum FontVariant {
  'H1' = 'H1',
  'H2' = 'H2',
  'H3' = 'H3',
  'H4' = 'H4',
  'H5' = 'H5',
  'H6' = 'H6',
  'Subtitle-1' = 'subtitle-1',
  'Subtitle-2' = 'subtitle-2',
  'body-1' = 'body-1',
  'body-2' = 'body-2',
  TextButton = 'textbutton',
  Caption = 'caption',
  Overline = 'overline'
}

const Text = ({
  variant,
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  switch (variant) {
    case FontVariant.H1:
      return (
        <HeadingOne
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </HeadingOne>
      )
    case FontVariant.H2:
      return (
        <HeadingTwo
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </HeadingTwo>
      )
    case FontVariant.H3:
      return (
        <HeadingThree
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </HeadingThree>
      )
    case FontVariant.H4:
      return (
        <HeadingFour
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </HeadingFour>
      )
    case FontVariant.H5:
      return (
        <HeadingFive
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </HeadingFive>
      )
    case FontVariant.H6:
      return (
        <HeadingSix
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </HeadingSix>
      )
    case FontVariant['Subtitle-1']:
      return (
        <SubtitleOne
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </SubtitleOne>
      )
    case FontVariant['Subtitle-2']:
      return (
        <SubtitleTwo
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </SubtitleTwo>
      )
    case FontVariant['body-1']:
      return (
        <BodyOne
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </BodyOne>
      )
    case FontVariant['body-2']:
      return (
        <BodyTwo
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </BodyTwo>
      )
    case FontVariant.TextButton:
      return (
        <TextButton
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </TextButton>
      )
    case FontVariant.Caption:
      return (
        <Caption
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </Caption>
      )
    case FontVariant.Overline:
      return (
        <Overline
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </Overline>
      )
    default:
      return (
        <BodyOne
          color={color}
          colorMode={colorMode}
          fontFamily={fontFamily}
          weight={weight}
        >
          {children}
        </BodyOne>
      )
  }
}

export default Text

export const HeadingOne = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'dark'}
      fontSize="8xl"
      letterSpacing="-1.5px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const HeadingTwo = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'dark'}
      fontSize="6xl"
      letterSpacing="-0.5px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const HeadingThree = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'normal'}
      fontSize="5xl"
      letterSpacing="0px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const HeadingFour = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'normal'}
      fontSize="4xl"
      letterSpacing="0.25px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const HeadingFive = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'normal'}
      fontSize="2xl"
      letterSpacing="0px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const HeadingSix = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'medium'}
      fontSize="xl"
      letterSpacing="0.15px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const SubtitleOne = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'normal'}
      fontSize="md"
      letterSpacing="0.15px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const SubtitleTwo = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'medium'}
      fontSize="sm"
      letterSpacing="0.1px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const BodyOne = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'normal'}
      fontSize="md"
      letterSpacing="0.5px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const BodyTwo = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'normal'}
      fontSize="sm"
      letterSpacing="0.25px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const TextButton = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'medium'}
      fontSize="sm"
      letterSpacing="1.25px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const Caption = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'normal'}
      fontSize="xs"
      letterSpacing="0.4px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}

export const Overline = ({
  children,
  color,
  colorMode,
  fontFamily,
  weight
}: IText) => {
  return (
    <Label
      fontFamily={fontFamily ?? fontDefault}
      fontWeight={weight ?? 'normal'}
      fontSize="10px"
      letterSpacing="1.5px"
      {...(color
        ? { color }
        : colorMode === 'dark'
        ? { color: 'white' }
        : { color: 'dark' })}
    >
      {children}
    </Label>
  )
}
