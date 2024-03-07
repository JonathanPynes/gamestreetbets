import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Game Street Bets"
        content="Place bets on your favorite video game players and teams. Spectate, Bet, Win! 🚀"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
