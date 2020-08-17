import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import Skeleton from '@material-ui/lab/Skeleton'

import { DynamicButton, Loader } from '../src/index'

const skeleton = (
  <div>
    <Skeleton variant="rect" width={100} height={40} />
  </div>
)

storiesOf('Loader', module)
  .add('Backdrop-Circular: Default', () => (
    <Loader open={true} backdrop action="circular" message="Loading..." />
  ))
  .add('Backdrop-Circular: Determinate', () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      const timer = setInterval(
        () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
        800,
      )
      return () => clearInterval(timer)
    }, [])
    return (
      <Loader
        open={true}
        backdrop
        action="circular determinate"
        message="Determinate..."
        progress={progress}
      />
    )
  })
  .add('Backdrop-Circular: w/ Label', () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      const timer = setInterval(
        () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
        800,
      )
      return () => clearInterval(timer)
    }, [])
    return (
      <Loader
        open={true}
        backdrop
        action="circular determinate label"
        message="Determinate with label..."
        progress={progress}
      />
    )
  })
  .add('BackDrop-Linear: Default', () => (
    <Loader open={true} backdrop action="linear" message="Linear..." />
  ))
  .add('BackDrop-Linear: Determinate', () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      const timer = setInterval(
        () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
        800,
      )
      return () => clearInterval(timer)
    }, [])
    return (
      <Loader
        open={true}
        backdrop
        action="linear determinate"
        progress={progress}
        message="Linear Determinate..."
      />
    )
  })
  .add('BackDrop-Linear: Determinate w/ Label', () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      const timer = setInterval(
        () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
        800,
      )
      return () => clearInterval(timer)
    }, [])
    return (
      <Loader
        open={true}
        backdrop
        action="linear determinate label"
        progress={progress}
        message="Linear Determinate with label..."
      />
    )
  })
  .add('BackDrop-Linear: Buffer', () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      const timer = setInterval(
        () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
        800,
      )
      return () => clearInterval(timer)
    }, [])
    return (
      <Loader
        open={true}
        backdrop
        action="linear buffer"
        progress={progress}
        message="Linear Buffer..."
      />
    )
  })
  .add('BackDrop-Linear: Buffer w/ Label', () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      const timer = setInterval(
        () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
        800,
      )
      return () => clearInterval(timer)
    }, [])
    return (
      <Loader
        open={true}
        backdrop
        action="linear buffer label"
        progress={progress}
        message="Linear Buffer with label..."
      />
    )
  })

  // as loading wrapper:
  .add('Wrapper-Button: Default', () => {
    const [open, setOpen] = useState(false)
    return (
      <Loader open={open} action="circular">
        <DynamicButton
          disabled={open}
          load={open}
          onClick={() => setOpen(true)}
        >
          Click Me
        </DynamicButton>
      </Loader>
    )
  })
  .add('Wrapper-Button: Determinate', () => {
    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      const timer = setInterval(
        () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
        800,
      )
      return () => clearInterval(timer)
    }, [])
    return (
      <Loader open={open} action="circular determinate" progress={progress}>
        <DynamicButton
          disabled={open}
          load={open}
          onClick={() => setOpen(true)}
        >
          Click Me
        </DynamicButton>
      </Loader>
    )
  })
  .add('Wrapper-Button: w/ Label', () => {
    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      const timer = setInterval(
        () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
        800,
      )
      return () => clearInterval(timer)
    }, [])
    return (
      <Loader
        open={open}
        action="circular determinate label"
        progress={progress}
      >
        <DynamicButton
          disabled={open}
          load={open}
          onClick={() => setOpen(true)}
        >
          Click Me
        </DynamicButton>
      </Loader>
    )
  })

  // with skeleton config:
  .add('Wrapper-Button: w/ skeleton', () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      const timer = setInterval(
        () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
        800,
      )
      return () => clearInterval(timer)
    }, [])
    return (
      <Loader open={progress < 50} skeletonConfig={skeleton}>
        <DynamicButton>Click Me</DynamicButton>
      </Loader>
    )
  })
