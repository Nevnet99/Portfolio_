import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Matter from 'matter-js'
import lightbulbOn from '../../../static/img/bulb-on.svg'
import lightbulbOff from '../../../static/img/bulb-off.svg'

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Lightbulb = () => {
  const scene = useRef(null)
  const changeTheme = light => {
    if (light) {
      document.body.style.backgroundColor = 'white'
      document.body.style.transition = 'all 1s'
    } else {
      document.body.style.backgroundColor = 'black'
      document.body.style.transition = 'all 1s'
    }
  }
  useEffect(() => {
    const { Engine } = Matter
    const { Render } = Matter
    const { World } = Matter
    const { Bodies } = Matter
    const { Mouse } = Matter
    const { MouseConstraint } = Matter
    const { Runner } = Matter
    const { Constraint } = Matter
    const engine = Engine.create({
      // positionIterations: 20
    })
    const width = 1000
    const height = 1000
    const render = Render.create({
      element: scene.current,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
        wireframeBackground: 'transparent',
      },
    })

    // create runner
    const runner = Runner.create()
    Runner.run(runner, engine)

    // add stiff global constraint
    const body = Bodies.polygon(150, 200, 5, 30, {
      render: {
        sprite: {
          texture: lightbulbOff,
        },
      },
    })

    const constraint = Constraint.create({
      pointA: { x: width / 2, y: 0 },
      bodyB: body,
      pointB: { x: -3, y: 40 },
      stiffness: 0.2,
      length: 150,
    })

    World.add(engine.world, [body, constraint])

    const mouse = Mouse.create(render.canvas)

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.3,
        render: {
          visible: false,
        },
      },
    })

    Matter.Events.on(mouseConstraint, 'enddrag', function(event) {
      console.log(body.render.sprite.texture)
      if (body.render.sprite.texture === lightbulbOff) {
        body.render.sprite.texture = lightbulbOn
        changeTheme(true)
      } else {
        body.render.sprite.texture = lightbulbOff
        changeTheme(false)
      }
    })

    World.add(engine.world, mouseConstraint)

    Engine.run(engine)

    Render.run(render)
  }, [])

  return <Container ref={scene}></Container>
}

export default Lightbulb
