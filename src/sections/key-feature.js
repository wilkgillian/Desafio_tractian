/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Grid } from 'theme-ui'
import SectionHeader from '../components/section-header'
import FeatureCardColumn from 'components/feature-card-column.js'
import Performance from 'assets/key-feature/maintance.svg'
import Partnership from 'assets/key-feature/monitorament.svg'
import Subscription from 'assets/key-feature/setup.svg'
import Support from 'assets/key-feature/cmms.svg'

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Manutenção Preditiva',
    title: 'Manutenção Preditiva',
    text:
      'Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.'
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Monitoramento Online',
    title: 'Monitoramento Online',
    text:
      'Sensor Tractian coleta dados de vibração, temperatura, horímetro e consumo de energia em tempo real.'
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Setup Instantâneo',
    title: 'Setup Instantâneo',
    text:
      'Solução Plug & Play, sem necessidade de WiFi industrial, comunicação via 3G/4G independente.'
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'CMMS Integrado',
    title: 'CMMS Integrado',
    text:
      'Automatize processos, ordens de serviço e tenha total controle sobre seus ativos e equipe.'
  }
]

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.KeyFeature' }} id="sobre">
      <Container>
        <SectionHeader
          slogan="O que fazemos?"
          title="Revolucionamos a vida dos profissionais de manutenção. Com a melhor tecnologia, nós transformamos um processo que hoje é demorado e complexo em uma experiência simples e inteligente."
        />
        <Grid sx={styles.grid}>
          {data.map(item => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px'
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)'
    ]
  }
}
