/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui'
import { keyframes } from '@emotion/core'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import PriceCard from 'components/price-card'
import ButtonGroup from 'components/button-group'
import SectionHeader from 'components/section-header'
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'

const packages = {
  monthly: [
    {
      id: 1,
      name: 'Monitoramento online',
      description: 'Smart trac',
      buttonText: 'Escolher esse',

      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Nós enviamos os sensores',
          isAvailable: true
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Cole em suas máquinas',
          isAvailable: true
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Receba insights valiosos',
          isAvailable: true
        }
      ]
    },
    {
      id: 2,
      name: 'Gestão de ativos',
      description: 'TracOs',

      buttonText: 'Escolher esse',

      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Nos envie sua lista de ativos, locais e usuários',
          isAvailable: true
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Automatize ses planos e ordens de serviço',
          isAvailable: true
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Substitua o excel por completo',
          isAvailable: true
        }
      ]
    },
    {
      id: 3,
      header: 'Sugerido',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Plano completo',
      description:
        'Obtenha a solução completa para sua empresa smart trac + TracOs',

      buttonText: 'Escolher esse',

      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Smart trac',
          isAvailable: true
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'TracOs',
          isAvailable: true
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Suporte 24hr',
          isAvailable: true
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Assistência completa Tractian',
          isAvailable: true
        }
      ]
    }
  ]
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true
  }
}

export default function Package() {
  const { monthly, annual } = packages
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly
  })
  const handlePricingPlan = plan => {
    if (plan == 'annual') {
      setState({ active: 'annual', pricingPlan: annual })
    } else {
      setState({ active: 'monthly', pricingPlan: monthly })
    }
  }

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: ''
  }

  return (
    <section id="pricing" sx={{ variant: 'section.pricing' }}>
      <Container>
        <SectionHeader slogan="PRODUTOS" title="Escolha seu produto" />

        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}></Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map(packageData => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`
      }
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex'
      }
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0]
    }
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto'
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)'
      },
      '&:focus': {
        outline: 0
      }
    }
  }
}
