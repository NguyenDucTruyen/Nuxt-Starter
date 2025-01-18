import { seedUsers } from './seedUsers'

(
  async () => {
    console.log('Seeding users...')
    await seedUsers()
    process.exit(0)
  }
)()
