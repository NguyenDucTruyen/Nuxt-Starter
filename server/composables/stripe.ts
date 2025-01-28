import type { EnumProductType } from '@/server/database/schemas/enum.schema'
import Stripe from 'stripe'

const stripeAdmin = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function createCheckoutSession(email: string, type: EnumProductType) {
  const session = await stripeAdmin.checkout.sessions.create({
    line_items: [
      {
        price: process.env[`STRIPE_PRICE_${type.toUpperCase()}_ID` as string] as string,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NUXT_PUBLIC_APP_BASE_URL}/stripe/success?sessionId={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NUXT_PUBLIC_APP_BASE_URL}/stripe/cancel`,
    customer_email: email,
  })
  return session
}

export async function retrieveCheckoutSession(sessionId: string) {
  const session = await stripeAdmin.checkout.sessions.retrieve(sessionId)
  return session
}

export async function getAllPrices() {
  const prices = await stripeAdmin.prices.list()
  return prices
}

export async function getStripeCustomerByEmail(email: string) {
  const customer = await stripeAdmin.customers.list({ email })
  return customer
}
